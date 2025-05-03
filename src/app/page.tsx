'use client';

import { Suspense } from 'react';
import Resume from '../Components/Resume/Resume';

function HomeContent() {
  return <Resume />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}