import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OrderComment({ comment }: { comment: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': comment === 'On Hold',
          'bg-green-500 text-white': comment === 'Processing',
        },
      )}
    >
      {comment === 'On Hold' ? (
        <>
          On Hold
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {comment === 'Processing' ? (
        <>
          Processing
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
