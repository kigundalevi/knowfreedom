'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to login page on component mount
    router.push('/login');
  }, [router]);

  // This component won't actually render anything visible
  // as it will immediately redirect
  return null;
}
