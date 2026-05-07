'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type UserData = {
  id: number;
  name?: string;
  email: string;
};

export default function ProfilePage() {
  const params = useParams<{ id: string }>();
  const userId = params?.id;

  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/user/profile/${userId}`);
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to fetch user');
        }
        const data = await res.json();
        setUserData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // re‑fetch if userId changes

  if (loading) return <div className="p-8 text-center">Loading profile...</div>;
  if (error) return <div className="p-8 text-red-500 text-center">Error: {error}</div>;
  if (!userData) return <div className="p-8 text-center">No user found.</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">User Profile</h1>
      <div className="space-y-4">
        <div className="flex border-b pb-2">
          <span className="font-semibold w-24 text-gray-600">ID:</span> 
          <span className="text-gray-900">{userData.id}</span>
        </div>
       
        <div className="flex border-b pb-2">
          <span className="font-semibold w-24 text-gray-600">Email:</span> 
          <span className="text-gray-900">{userData.email}</span>
        </div>
      </div>
    </div>
  );
}