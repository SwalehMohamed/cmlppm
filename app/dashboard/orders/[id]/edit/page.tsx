import Form from '@/app/ui/orders/edit-form';
import Breadcrumbs from '@/app/ui/orders/breadcrumbs';
import { fetchOrdersByMO } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit',
};
 
export default async function Page({ params }: { params: { mo: string } }) {
    const mo = params.mo;
    const [orders] = await Promise.all([
        fetchOrdersByMO(mo),
      ]);
      if (!orders) {
        notFound();
      }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Orders', href: '/dashboard/orders' },
          {
            label: 'Edit Orders',
            href: `/dashboard/orders/${mo}/edit`,
            active: true,
          },
        ]}
      />
      <Form orders={orders} />
    </main>
  );
}