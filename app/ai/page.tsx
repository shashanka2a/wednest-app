import { AIPlannerView } from '@/components/AIPlannerView';
import { Header } from '@/components/Header';

export default function AIPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-rose-50/30 overflow-x-hidden">
      <Header />
      <AIPlannerView />
    </div>
  );
}

