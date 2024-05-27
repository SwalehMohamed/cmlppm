'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom'
import { createOrder } from '@/app/lib/actions';
import { Orders } from '@/app/lib/definitions';

export default function Form({orders}:{orders:Orders[]}) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createOrder, initialState);
 
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
              <option value="" disabled> Select a Status </option>
              <option value="N/A" > Not Applicable </option>
              <option value="Store" > Store </option>
              <option value="Approval" > Approval </option>
              <option value="Cutting" > Cutting </option>
              <option value="PVC Welding">PVC Welding </option>
              <option value="Stiching" > Stiching </option>
              <option value="Branding" > Branding </option>
              <option value="Half Copmlete" > Half Copmlete </option>
              <option value= "Complete" >  Complete </option>
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
              <option value="" disabled> Select a Status </option>
              <option value='N/A' > Not Applicable </option>
              <option value='Cutting' > Cutting </option>
              <option value='Setting' > Setting </option>
              <option value='Welding' > Welding </option>
              <option value='Grinding' > Grinding </option>
              <option value='Filler' > Filler </option>
              <option value='Sanding' > Sanding </option>
              <option value='Painting' > Painting </option>
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
        <Create/>
      </div>
      </div>
    </form>
  ;
}

export function Create({ }) {
  const { pending } = useFormStatus();

  return (
      <Button className={clsx(
          'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
        )} aria-disabled={pending}>
      Add MO 
    </Button>
      
  );
}