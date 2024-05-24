'use client';

import { Orders, OrdersField } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateOrder } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function EditOrderForm({orders}: { orders:OrdersField}) {

  const initialState = { message: null, errors: {} };
  const updateOrderByMO = updateOrder.bind(null);
  const [state, dispatch] = useFormState(updateOrderByMO, initialState);

  return <form action={dispatch}>
  <div className="rounded-md bg-gray-50 p-4 md:p-6">
  <div className="mb-4">
      <label htmlFor="mo" className="mb-2 block text-sm font-medium">
        Add MO Number
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id="mo"
            name="mo"
            type="string"
            placeholder="Enter Manufacturing Order Number"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-describedby="mo-error"
          />
        </div>
      </div>
      <div id="mo-error" aria-live="polite" aria-atomic="true">
    {state.errors?.mo &&
      state.errors.mo.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
  </div>
    </div>
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
  <div className="mb-4">
      <label htmlFor="so" className="mb-2 block text-sm font-medium">
        Add SO Number
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id="so"
            name="so"
            type="string"
            placeholder="Enter Sales Order Number"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-describedby="so-error"
          />
        </div>
      </div>
      <div id="so-error" aria-live="polite" aria-atomic="true">
    {state.errors?.so &&
      state.errors.so.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
  </div>
    </div>
    <div className="mb-4">
      <label htmlFor="canvas" className="mb-2 block text-sm font-medium">
        Choose Canvas Status
      </label>
      <div className="relative">
        <select
          id="canvas"
          name="canvas"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          aria-describedby="canvas-error"
        >
          <option value="" disabled>
            Select a Status
          </option>
          {orders.map((order) => (
            <option key={order.canvas} value={order.canvas}>
              {order.canvas}
            </option>
          ))}
        </select>
      </div>
      <div id="canvas-error" aria-live="polite" aria-atomic="true">
    {state.errors?.canvas &&
      state.errors.canvas.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
  </div>
    </div>

    <div className="mb-4">
      <label htmlFor="frame" className="mb-2 block text-sm font-medium">
        Choose Frame Status
      </label>
      <div className="relative">
        <select
          id="frame"
          name="frame"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          aria-describedby="frame-error"
        >
          <option value="" disabled>
            Select a Status
          </option>
          {orders.map((order) => (
            <option key={order.frame} value={order.frame}>
              {order.frame}
            </option>
          ))}
        </select>
      </div>
      <div id="frame-error" aria-live="polite" aria-atomic="true">
    {state.errors?.frame &&
      state.errors.frame.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
  </div>
    </div>
    <div className="mb-4">
      <label htmlFor="worker" className="mb-2 block text-sm font-medium">
        Add Who Is Working On It
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id="worker"
            name="worker"
            type="string"
            placeholder="Enter Worker Name"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-describedby="worker-error" />
        </div>
      </div>
      <div id="worker-error" aria-live="polite" aria-atomic="true">
    {state.errors?.worker &&
      state.errors.worker.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
  </div>
    </div>
    <div className="mb-4">
      <label htmlFor="doc" className="mb-2 block text-sm font-medium">
        Add Approximate Date of Completion
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id="doc"
            name="doc"
            type="string"
            placeholder="Enter Approx. Date Of Completion (yyyy-mm-dd)"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-describedby="doc-error"
          />
        </div>
      </div>
      <div id="doc-error" aria-live="polite" aria-atomic="true">
    {state.errors?.doc &&
      state.errors.doc.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
      </div>
    </div>
    <fieldset>
      <legend className="mb-2 block text-sm font-medium">
        Select Status Of MO
      </legend>
      <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
        <div className="flex gap-4">
          <div className="flex items-center">
            <input
              id="on hold"
              name="comment"
              type="radio"
              value="on hold"
              className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              required
            />
            <label
              htmlFor="on hold"
              className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
            >
              On Hold <ClockIcon className="h-4 w-4" />
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="processing"
              name="comment"
              type="radio"
              value="processing"
              className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              
           />
            <label
              htmlFor="processing"
              className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
            >
              Processing <CheckIcon className="h-4 w-4" />
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
  <div className="mt-6 flex justify-end gap-4">
    <Link
      href="/dashboard/orders"
      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
      Cancel
    </Link>
    <Button type="submit" >Create MO</Button>
  </div>
  </div>
</form>
  ;
}
