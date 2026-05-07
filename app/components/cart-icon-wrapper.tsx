// app/components/CartIconWrapper.tsx (server)
import { cookies } from 'next/headers';
import CartIconClient from './cart-icon-client';

export default async function CartIconWrapper() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  const isAuthenticated = !!token;

  return <CartIconClient isAuthenticated={isAuthenticated} />;
}