import { AboutView } from '@/components/AboutView';
import { Header } from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-rose-50/30 overflow-x-hidden">
      <Header />
      <AboutView />
    </div>
  );
}

