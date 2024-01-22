const { db } = require('@vercel/postgres');
const {
  usersBusiness,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        fname VARCHAR(255) NOT NULL,
        lname VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, fname, lname, email, password)
        VALUES (${user.id}, ${user.fname}, ${user.lname}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}
async function seedBusiness(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "usersBusiness" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS usersBusiness (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        bname VARCHAR(255) NOT NULL,
        blocation VARCHAR(255) NOT NULL,
        bgender VARCHAR(255) NOT NULL,
        bservices TEXT NOT NULL,
        bwebsite VARCHAR(255) NOT NULL,
        binstagram VARCHAR(255) NOT NULL,
        bfacebook VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "business" table`);

    // Insert data into the "usersBusiness" table
    const insertedBusiness = await Promise.all(
      usersBusiness.map(
        (business) => client.sql`
        INSERT INTO usersBusiness (user_id, bname, blocation, bgender, bservices, bwebsite, binstagram, bfacebook)
        VALUES (${business.user_id}, ${business.bname}, ${business.blocation}, ${business.bgender}, ${business.bservices}, ${business.bwebsite}, ${business.binstagram}, ${business.bfacebook})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedBusiness.length} users business`);

    return {
      createTable,
      usersBusiness: insertedBusiness,
    };
  } catch (error) {
    console.error('Error seeding users business:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedBusiness(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
