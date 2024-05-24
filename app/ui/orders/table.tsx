import { UpdateOrder } from '@/app/ui/orders/buttons';
import { fetchFilteredOrders } from '@/app/lib/data';
import { orders } from '@/app/lib/placeholder-data';
import OrderComment from './comment';
import OrderCanvas from './canvas';
import OrderFrame from './frame';

export default async function LatestOrders({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredOrders(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {orders?.map((orders) => (
              <div key={orders.mo} className="mb-2 w-full rounded-md bg-white p-4">
                  <div className="flex justify-end gap-2">
                    <UpdateOrder mo={orders.mo} />
                  </div>
                </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Manufacturing Order
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sales Order
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Canvas
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Frame
                </th>
                <th scope="col" className="px-3 py-5 font-small">
                  Person Working On It
                </th>
                <th scope="col" className="px-3 py-5 font-small">
                  Approx. Date Of Copmletion
                </th>
                <th scope="col" className="px-3 py-5 font-small">
                  Comment
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders?.map((orders) => (
                <tr key={orders.mo} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{orders.mo}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {orders.so}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <OrderCanvas canvas={orders.canvas} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <OrderFrame frame={orders.frame} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {orders.worker}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {orders.doc}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <OrderComment comment={orders.comment} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateOrder mo={orders.mo} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
