'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { register } from '@/lib/auth';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [ageVerified, setAgeVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!agreeTerms || !ageVerified) {
      setError('You must agree to the terms and confirm you are 18 or older');
      return;
    }

    setIsLoading(true);

    try {
      const user = await register(firstName, lastName, email, password);
      login(user);
      router.push('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-blue-200">
               <Image 
                           src="/images/logos/logo.png" 
                           alt="Know Freedom Logo" 
                           fill
                           style={{ objectFit: 'contain' }}
                           priority
                         />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-[#078CBC]">Join the Movement!</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Be part of a community dedicated to making an impact.
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-sm rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 p-3 rounded-md text-red-600 text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
                  id="first-name"
                  style={{outline: 'none', border: 'none'!}}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input
                className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Must be at least 8 characters, one uppercase and one lowercase letter, and one special character.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative">
                <Input
                className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                className="checked:bg-green-400 checked:text-white"
                  id="age-verification" 
                  checked={ageVerified}
                  onCheckedChange={(checked) => setAgeVerified(checked as boolean)}
                />
                <Label htmlFor="age-verification" className="text-sm">
                  I am 18 years old and above.
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                className="text-blue-600 focus:ring-blue-500"
                  id="terms" 
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm " >
                  I agree to the{' '}
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    Terms & Conditions
                  </Link>
                  .
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#078CBC] hover:bg-[#078CBC]/80"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Continue'}
            </Button>
          </form>
        </div>

        <div className="text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}