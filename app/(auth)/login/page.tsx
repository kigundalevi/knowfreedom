'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { login } from '@/lib/auth';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login: authLogin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await login(email, password);
      authLogin(user);
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col w-full md:w-1/2 p-8">
        <div className="flex justify-start mb-8 ml-4"> {/* Replace with your actual logo path - you mentioned you have it locally */}
          <div className="w-20 h-20 relative">
           
            <Image 
              src="/images/logos/logo.png" 
              alt="Know Freedom Logo" 
              fill 
              style={{ objectFit: 'contain' }} 
            />
           
            <div className="w-full h-full rounded-full border border-blue-200 flex items-center justify-center bg-blue-50">
              <span className="text-blue-600 font-bold text-xs">KNOW FREEDOM</span>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">Welcome Back!</h1>
          <p className="text-center text-gray-500 mb-8">Please enter your credentials to access your account.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 p-3 rounded-md text-red-600 text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-md px-4 py-2 border-gray-200"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <Link 
                  href="#" 
                  className="text-sm text-blue-600 hover:text-blue-800 font-normal"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-md px-4 py-2 border-gray-200"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md" 
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
              Get started!
            </Link>
          </p>
        </div>
      </div>

      <div 
  className="hidden md:block md:w-1/2 p-12 text-white relative overflow-hidden" 
  style={{ 
    backgroundImage: `linear-gradient(rgba(45 91 122 / 0), rgba(45 91 122 / 0)), url('/images/logos/backlog.png')`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' 
  }}
>
  <div className="h-full flex flex-col justify-center relative z-10">
    <h2 className="text-3xl font-bold mb-6">Empowering Service<br />Through Innovation</h2>
    <p className="text-lg mb-8">
      Discover the Know Freedom blockchain and the SERV<br />token - tools for inspiring service in a modern world.
    </p>
    <div className="mt-8">
      <div className="relative max-w-md mx-auto">
        <Image 
          src="/images/logos/sidelogo.png" 
          alt="Dashboard Illustration" 
          width={300} 
          height={300} 
          priority
          style={{ objectFit: 'contain' }} 
        />
      </div>
    </div>
  </div>
</div>
    </div>
  );
}