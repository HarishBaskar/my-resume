'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';

function OfflinePageContent() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ marginBottom: '1rem', color: '#333' }}>You&apos;re Offline</h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        It looks like you&apos;ve lost your internet connection. 
        Please check your network and try again.
      </p>
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Retry
        </button>
        <Link 
          href="/"
          style={{
            padding: '10px 20px',
            backgroundColor: '#fff',
            color: '#0070f3',
            border: '1px solid #0070f3',
            borderRadius: '5px',
            textDecoration: 'none'
          }}
        >
          Return Home
        </Link>
      </div>
      <div style={{ color: '#999', fontSize: '0.9rem' }}>
        Some features may be limited while you&apos;re offline
      </div>
    </div>
  );
}

export default function OfflinePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OfflinePageContent />
    </Suspense>
  );
}