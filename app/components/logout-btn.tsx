'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  const router = useRouter();

  // 🔒 YOUR EXACT AUTH LOGIC – UNCHANGED
  const handleLogout = async () => {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    if (res.ok) {
      router.push('/auth/login');
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-white hover:bg-red-600 dark:hover:bg-red-600 transition-all duration-200"
      aria-label="Logout"
    >
      <LogOut className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span>Logout</span>
    </button>
  );
}