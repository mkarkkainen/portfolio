'use client';

import { useEffect } from 'react';

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Went off the rails..</p>
    </div>
  );
}
