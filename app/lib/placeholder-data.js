// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: '410544b3-4011-4272-9955-fec4b6a6442a',
    name: 'Swaleh',
    email: 'elbusaidyswaleh@gmail.com',
    password: '3452409',
  },
];

const orders = [
  {
    id: '4058dc9e-722f-4477-86e9-fdc4b6a6452a',
    mo: '00001',
    so: '00001',
    product: 'Tent',
    canvas: 'Stitching',
    frame: 'Welding',
    worker: 'John',
    doc: '26/05/2024',
    comment: 'Processing',
  },
  {
    id: '4068dc9e-732f-4487-86e7-fdc5b6a6452a',
    mo: '000002',
    so: '00002',
    product: 'Tarp',
    canvas: 'Stitching',
    frame: 'N/A',
    worker: 'Mark',
    doc: '26/05/2024',
    comment: 'Onhold',
  },
];
module.exports = {
  users,
  orders,
};
