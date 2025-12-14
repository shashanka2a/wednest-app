import { HomePage } from '@/components/HomePage';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-rose-50/30 overflow-x-hidden">
      <Header />
      <HomePage />
    </div>
  );
}

