// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    fname: 'First name',
    lname: 'Surname',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const usersBusiness = [
  {
    user_id: users[0].id,
    bname: 'Need a web',
    blocation: 'London',
    bgender: 'Him',
    bservices: 'hair wash',
    bwebsite: 'needaweb.co.uk',
    binstagram: 'needaweb',
    bfacebook: 'needaweb',
  },
];

module.exports = {
  usersBusiness,
  users,
};
