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
    id: '410544b3-4002-4272-9856-fec4b6a6442a',
    name: 'Swaleh Mohamed',
    email: 'swaleh@nextmail.com',
    password: '3452409',
  },
];

const orders =[
{
  mo:'001',
  so:'001',
  canvas:'Cutting',
  frame:'N/A',
  worker:'John',
  doc:'2024-05-26',
  comment:'Processing',
},
{
  mo:'002',
  so:'002',
  canvas:'PVC Welding',
  frame:'Welding',
  worker:'Mark',
  doc:'2024-05-26',
  comment:'On Hold',
},
{
  mo:'003',
  so:'003',
  canvas:'Stitching',
  frame:'N/A',
  worker:'Ali',
  doc:'2024-05-26',
  comment:'Processing',
},
{
  mo:'004',
  so:'004',
  canvas:'Approval',
  frame:'N/A',
  worker:'Mary',
  doc:'2024-05-30',
  comment:'Processing',
},
{
  mo:'005',
  so:'005',
  canvas:'Store',
  frame:'Cutting',
  worker:'Mary',
  doc:'2024-05-30',
  comment:'Processing',
},
];

module.exports = {
  users,
  orders,
};
