import clsx from 'clsx';

export default function OrderFrame({ frame }: { frame: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-300 text-white': frame === 'Cutting',
          'bg-gray-400 text-white': frame === 'Setting',
          'bg-gray-500 text-white': frame === 'Welding',
          'bg-gray-600 text-white': frame === 'Grinding',
          'bg-gray-700 text-white': frame === 'Filler',
          'bg-gray-800 text-white': frame === 'Sanding',
          'bg-green-500 text-white': frame === 'Painting',
          'bg-gray-900 text-white': frame === 'N/A',
        },
      )}
    >
      {frame === 'Cutting' ? (
        <p>
          Cutting
        </p>
      ) : null}
      {frame === 'Setting' ? (
        <p>
          Setting
        </p>
      ) : null}
       {frame === 'Welding' ? (
        <p>
          Welding
        </p>
      ) : null}
       {frame === 'Grinding' ? (
        <p>
          Grinding
        </p>
      ) : null}
       {frame === 'Filler' ? (
        <p>
          Filler
        </p>
      ) : null}
       {frame === 'Sanding' ? (
        <p>
          Sanding
        </p>
      ) : null}
       {frame === 'Painting' ? (
        <p>
          Painting
        </p>
      ) : null}
       {frame === 'N/A' ? (
        <p>
          Not Applicable
        </p>
      ) : null}
    </span>
  );
}