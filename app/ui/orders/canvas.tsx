import clsx from 'clsx';

export default function OrderCanvas({ canvas }: { canvas: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-400 text-white': canvas === 'Store',
          'bg-gray-500 text-white': canvas === 'Approval',
          'bg-gray-600 text-white': canvas === 'Cutting',
          'bg-gray-700 text-white': canvas === 'PVC Welding',
          'bg-gray-800 text-white': canvas === 'Stitching',
          'bg-green-300 text-white': canvas === 'Branding',
          'bg-green-500 text-white': canvas === 'Half-Complete',
          'bg-green-800 text-white': canvas === 'Complete',
          'bg-gray-900 text-white': canvas === 'N/A',
        },
      )}
    >
      {canvas === 'Store' ? (
        <p>
          Store
        </p>
      ) : null}
      {canvas === 'Approval' ? (
        <p>
          Waiting For Approval
        </p>
      ) : null}
       {canvas === 'Cutting' ? (
        <p>
          Cutting
        </p>
      ) : null}
       {canvas === 'PVC Welding' ? (
        <p>
          PVC Welding
        </p>
      ) : null}
       {canvas === 'Stitching' ? (
        <p>
          Stitching
        </p>
      ) : null}
       {canvas === 'Branding' ? (
        <p>
          Branding
        </p>
      ) : null}
       {canvas === 'Half Complete' ? (
        <p>
          Frame Set Up At Location
        </p>
      ) : null}
       {canvas === 'Complete' ? (
        <p>
          Order Complete
        </p>
      ) : null}
       {canvas === 'N/A' ? (
        <p>
          Not Applicable
        </p>
      ) : null}
    </span>
  );
}