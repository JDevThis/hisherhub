import { sql } from '@vercel/postgres';
import {
  Business,
  User,
} from './definitions';


const ITEMS_PER_PAGE = 6;
export async function fetchuserBussinessProfile(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    
    const businesses = await sql<Business>`SELECT COUNT(*)
    FROM usersbusiness
    JOIN users ON usersbusiness.user_id = users.id
    WHERE
      usersbusiness.bservices ILIKE ${`%${query}%`} OR
      userbusiness.blocation ILIKE ${`%${query}%`} OR
      userbusiness.bgender ILIKE ${`%${query}%`}

      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return businesses.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to sfetch businesses.');
  }
}
  
export async function fetchuserBusinessProfile() {
  try {
    const data = await sql<Business>`
      SELECT usersbusiness.bname, usersbusiness.blocation, usersbusiness.bgender, usersbusiness.bservices, usersbusiness.bwebsite, usersbusiness.binstagram, usersbusiness.bfacebook ,invoices.id
      FROM invoices
      JOIN usersbusiness ON usersbusiness.user_id = users.id
      ORDER BY users.id DESC
      LIMIT 5`;

    const Businesses = data.rows.map((businesses) => ({
      ...businesses,
    }));
    return Businesses;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetcsh the latest invoices.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getBusinessByUserid(id: string) {
  try {
    const data = await sql<Business>`
      SELECT
        userbusiness.id,
        userbusiness.user_id,
        userbusiness.bname,
        userbusiness.blocation,
        userbusiness.bgender,
        userbusiness.bservices,
        userbusiness.bwebsite,
        userbusiness.binstagram,
        userbusiness.bfacebook,
      FROM usersbusiness
      WHERE userbusiness.id = ${id};
    `;

    const business = data.rows.map((business) => ({
      ...business,
      // Convert amount from cents to dollars
    }));

    return business[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}
