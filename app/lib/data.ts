import { sql } from '@vercel/postgres';
import { User, Orders,} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getUser(email: string) {
  noStore();
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
export async function fetchOrders(id: string) {
  noStore();
  try {
    const data = await sql<Orders>`
      SELECT
        orders.id,
        orders.mo,
        orders.so,
        orders.product,
        orders.canvas,
        orders.frame,
        orders.worker,
        orders.doc,
        orders.comment
      FROM orders
      WHERE orders.id = ${id};
    `;

    const orders = data.rows.map((orders) => ({
      ...orders,
    }));
    console.log(orders);
    return orders[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Order');
  }
}
