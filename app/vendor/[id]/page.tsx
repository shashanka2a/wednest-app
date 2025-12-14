import { Suspense } from 'react';
import { VendorDetailView } from '@/components/VendorDetailView';
import { Header } from '@/components/Header';

export default async function VendorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-rose-50/30 overflow-x-hidden">
      <Header />
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <VendorDetailView vendorId={id} />
      </Suspense>
    </div>
  );
}

