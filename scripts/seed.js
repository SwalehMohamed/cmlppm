const { db } = require('@vercel/postgres');
const {
  users,
  orders,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
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
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
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

async function seedOrders(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Orders" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS Orders (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    mo VARCHAR(255) NOT NULL,
    so VARCHAR(255) NOT NULL,
    product VARCHAR(255) NOT NULL,
    canvas VARCHAR(255) NOT NULL,
    frame VARCHAR(255) NOT NULL,
    worker VARCHAR(255) NOT NULL,
    doc DATE NOT NULL,
    comment VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "Orders" table`);

    // Insert data into the "Orders" table
    const insertedOrders = await Promise.all(
      orders.map(
        (orders) => client.sql`
        INSERT INTO orders (id, mo, so, product, canvas, frame, worker, doc, status)
        VALUES (${orders.id},${orders.mo}, ${orders.so}, ${orders.product},${orders.canvas},${orders.frames},${orders.worker},${orders.doc},${orders.status})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedOrders.length} Orders`);

    return {
      createTable,
      orders: insertedOrders,
    };
  } catch (error) {
    console.error('Error seeding orders:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedOrders(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
