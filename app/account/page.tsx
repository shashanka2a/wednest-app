import { AccountView } from '@/components/AccountView';
import { Header } from '@/components/Header';

export default function AccountPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-rose-50/30 overflow-x-hidden">
      <Header />
      <AccountView />
    </div>
  );
}

