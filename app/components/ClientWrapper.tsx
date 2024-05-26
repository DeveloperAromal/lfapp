// components/ClientWrapper.tsx
'use client';

import { useEffect, useState } from 'react';

function useIsStandalone() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const handleMatchMedia = (e: MediaQueryListEvent) => {
      setIsStandalone(e.matches);
    };

    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(display-mode: standalone)');
      setIsStandalone(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleMatchMedia);

      return () => {
        mediaQuery.removeEventListener('change', handleMatchMedia);
      };
    }
  }, []);

  return isStandalone;
}

export default function ClientWrapper({ pwaContent, browserContent }: { pwaContent: React.ReactNode, browserContent: React.ReactNode }) {
  const isStandalone = useIsStandalone();

  return (
    <div>
      {isStandalone ? pwaContent : browserContent}
    </div>
  );
}
