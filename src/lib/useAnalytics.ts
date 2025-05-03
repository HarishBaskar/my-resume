'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analytics } from './firebase';
import { AnalyticsCallOptions, logEvent } from 'firebase/analytics';

interface CustomEventParams extends Record<string, string | number | boolean | null | undefined> {
  page_path?: string;
  page_search?: string;
  page_location?: string;
}

export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && analytics) {
      logEvent(analytics, 'page_view', {
        page_path: pathname,
        page_search: searchParams?.toString(),
        page_location: window.location.href
      });
    }
  }, [pathname, searchParams]);

  const trackEvent = (
    eventName: string, 
    eventParams: CustomEventParams = {}, 
    options?: AnalyticsCallOptions
  ) => {
    if (analytics) {
      logEvent(analytics, eventName, eventParams, options);
    }
  };

  return { trackEvent };
};