import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchuserBusinessProfile } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchuserBusinessProfile(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Business Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Business Location
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Gender Catered for
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Services
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Website
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Instagram
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Facebook
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{invoice.bname}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.blocation}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.bservices}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.bwebsite}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.binstagram}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.bfacebook}
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
