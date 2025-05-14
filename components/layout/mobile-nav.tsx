'use client'

import { useAuth } from '@/context/AuthContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Menu,
  LayoutDashboard, 
  Award, 
  Activity, 
  ShoppingBag, 
  Wallet, 
  HelpCircle, 
  LogOut, 
  BarChart4
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Activity', href: '/activity', icon: Activity },
  { name: 'Rewards', href: '/rewards', icon: Award },
  { name: 'Market', href: '/market', icon: ShoppingBag },
  { name: 'Wallet', href: '/wallet', icon: Wallet },
  { name: 'Impact', href: '/impact', icon: BarChart4 },
  { name: 'Support', href: '/support', icon: HelpCircle }
];

export function MobileNav() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        {/* Logo Section */}
        <div className="p-6 flex justify-center border-b border-gray-200">
          <Link href="/dashboard" className="flex items-center justify-center" onClick={() => setOpen(false)}>
            <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-gray-100">
              <Image 
                src="/images/logos/logo.png" 
                alt="Know Freedom Logo" 
                width={300} 
                height={300} 
                style={{ objectFit: 'contain' }} 
                priority
              />
            </div>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-2">
            {navItems.map((item) => {
              // Check if the current path starts with the nav item's href
              const isActive = pathname.includes(item.href);
              
              return (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-cyan-50 text-cyan-600 border-l-4 border-cyan-500" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className={cn("h-5 w-5", isActive ? "text-cyan-600" : "text-gray-500")} />
                    <span>{item.name}</span>
                    {isActive && item.name === "Rewards" && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-cyan-500"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={() => {
              logout();
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 hover:bg-gray-50"
          >
            <LogOut className="h-5 w-5 text-gray-500" />
            <span>Logout</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}