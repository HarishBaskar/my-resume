'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Store the scroll position before navigation
      const handleBeforeUnload = () => {
        const scrollPosition = window.scrollY;
        sessionStorage.setItem(
          `scroll_${pathname}${searchParams?.toString() || ''}`,
          scrollPosition.toString()
        );
      };

      // Restore the scroll position after navigation
      const restoreScroll = () => {
        const savedPosition = sessionStorage.getItem(
          `scroll_${pathname}${searchParams?.toString() || ''}`
        );
        
        if (savedPosition) {
          window.scrollTo(0, parseInt(savedPosition));
          sessionStorage.removeItem(
            `scroll_${pathname}${searchParams?.toString() || ''}`
          );
        } else {
          window.scrollTo(0, 0);
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      restoreScroll();

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [pathname, searchParams]);

  return null;
}