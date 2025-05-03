'use client';

import React, { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useAnalytics } from '@/lib/useAnalytics';
import { useServiceWorker } from '@/lib/useServiceWorker';
import { usePerformanceMonitoring } from '@/lib/usePerformanceMonitoring';
import { useErrorTracking } from '@/lib/useErrorTracking';

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  useAnalytics();
  useServiceWorker();
  usePerformanceMonitoring();
  useErrorTracking();

  return (
    <>
      {children}
      <Analytics />
    </>
  );
}

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RootLayoutContent>{children}</RootLayoutContent>
    </Suspense>
  );
}