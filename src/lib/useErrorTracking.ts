'use client';

import { useEffect } from 'react';
import { analytics } from './firebase';
import { AnalyticsCallOptions, logEvent } from 'firebase/analytics';

interface ErrorWithMessage {
  message: string;
  name: string;
  stack?: string;
}

interface ErrorEventParams {
  error_name: string;
  error_message: string;
  error_stack?: string;
  url: string;
  timestamp: string;
  context?: Record<string, unknown>;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    'name' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}

export const useErrorTracking = () => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const error = toErrorWithMessage(event.error);
      
      if (analytics) {
        logEvent(analytics, 'error', {
          error_name: error.name,
          error_message: error.message,
          error_stack: error.stack,
          url: window.location.href,
          timestamp: new Date().toISOString()
        } as ErrorEventParams);
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = toErrorWithMessage(event.reason);
      
      if (analytics) {
        logEvent(analytics, 'unhandled_promise_rejection', {
          error_name: error.name,
          error_message: error.message,
          error_stack: error.stack,
          url: window.location.href,
          timestamp: new Date().toISOString()
        } as ErrorEventParams);
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const trackError = (
    error: unknown, 
    context?: Record<string, unknown>,
    options?: AnalyticsCallOptions
  ) => {
    const errorWithMessage = toErrorWithMessage(error);

    if (analytics) {
      logEvent(analytics, 'tracked_error', {
        error_name: errorWithMessage.name,
        error_message: errorWithMessage.message,
        error_stack: errorWithMessage.stack,
        context,
        url: window.location.href,
        timestamp: new Date().toISOString()
      } as ErrorEventParams, 
      options);
    }
  };

  return { trackError };
};