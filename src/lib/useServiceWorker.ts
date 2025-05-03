'use client';

import { useEffect } from 'react';
import { useErrorTracking } from './useErrorTracking';

interface Workbox {
  register(): Promise<void>;
  addEventListener(event: string, callback: () => void): void;
  [key: string]: unknown;
}

declare global {
  interface Window {
    workbox: Workbox;
  }
}

export const useServiceWorker = () => {
  const { trackError } = useErrorTracking();

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update prompt
                  if (window.confirm('New content is available! Would you like to reload to see the updates?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        } catch (error) {
          trackError(error, { context: 'Service Worker Registration' });
          console.error('Service worker registration failed:', error);
        }
      };

      registerServiceWorker();
    }
  }, [trackError]);
};