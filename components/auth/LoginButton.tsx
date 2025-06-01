'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Chrome } from 'lucide-react';
import Button from '../ui/button';

export default function LoginButton() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn('google', { callbackUrl: '/dashboard' });
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      loading={loading}
      size="lg"
      className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-md"
    >
      <Chrome className="mr-3 h-5 w-5 text-primary-600" />
      Continue with Google
    </Button>
  );
}