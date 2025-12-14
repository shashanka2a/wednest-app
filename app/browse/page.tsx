import { Suspense } from 'react';
import { BrowseView } from '@/components/BrowseView';
import { Header } from '@/components/Header';

export default function BrowsePage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-rose-50/30 overflow-x-hidden">
      <Header />
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <BrowseView />
      </Suspense>
    </div>
  );
}

