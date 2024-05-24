import Form from '@/app/ui/orders/create-form';
import Breadcrumbs from '@/app/ui/orders/breadcrumbs';
import { fetchOrders } from '@/app/lib/data';
import { Metadata } from 'next';
import { CreateOrder } from '@/app/ui/orders/buttons';
import { orders } from '@/app/lib/placeholder-data';
 
export const metadata: Metadata = {
  title: 'Create',
};
 
export default async function Page() {
  const orders = await fetchOrders();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Orders', href: '/dashboard/orders' },
          {
            label: 'Create order',
            href: '/dashboard/orders/create',
            active: true,
          },
        ]}
      />
      <Form orders={orders} />
    </main>
  );
}