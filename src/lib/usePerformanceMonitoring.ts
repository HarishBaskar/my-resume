'use client';

import { useEffect } from 'react';
import { useAnalytics } from './useAnalytics';

interface PerformanceData {
  value: number;
  startTime?: number;
  duration?: number;
  hadRecentInput?: boolean;
}

export const usePerformanceMonitoring = () => {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create a PerformanceObserver to monitor layout shifts
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries() as PerformanceEntry[];
      let clsValue = 0;
      
      entries.forEach((entry) => {
        const layoutShift = entry as unknown as PerformanceData;
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value;
        }
      });
      
      trackEvent('web_vital', {
        metric_name: 'CLS',
        value: clsValue,
        timestamp: new Date().toISOString()
      });
    });

    // Create a PerformanceObserver for LCP
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      trackEvent('web_vital', {
        metric_name: 'LCP',
        value: lastEntry.startTime,
        timestamp: new Date().toISOString()
      });
    });

    // Create a PerformanceObserver for FID
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        trackEvent('web_vital', {
          metric_name: 'FID',
          value: entry.duration,
          timestamp: new Date().toISOString()
        });
      });
    });

    // Track navigation timing metrics
    const trackNavigationMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        trackEvent('navigation_timing', {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          ttfb: navigation.responseStart - navigation.requestStart,
          download: navigation.responseEnd - navigation.responseStart,
          dom_interactive: navigation.domInteractive,
          dom_complete: navigation.domComplete,
          load_complete: navigation.loadEventEnd,
          timestamp: new Date().toISOString()
        });
      }
    };

    try {
      // Start observing different performance metrics
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Track navigation timing after the page loads
      if (document.readyState === 'complete') {
        trackNavigationMetrics();
      } else {
        window.addEventListener('load', trackNavigationMetrics);
      }
    } catch (error) {
      console.error('Error setting up performance monitoring:', error);
    }

    return () => {
      try {
        clsObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        window.removeEventListener('load', trackNavigationMetrics);
      } catch (error) {
        console.error('Error cleaning up performance observers:', error);
      }
    };
  }, [trackEvent]);
};