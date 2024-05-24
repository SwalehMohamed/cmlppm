import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import LatestOrders from '@/app/ui/dashboard/latest-invoices';
 
export const metadata: Metadata = {
  title: 'Dashboard',
};
export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
        { <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestOrders /> </Suspense> }
      
    </main>
  );
}