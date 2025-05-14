'use client'

// This is the main layout for all dashboard pages
// It provides the sidebar, header with page titles, and user dropdown
// The layout wraps all dashboard routes under /app/(dashboard)/*

import { Sidebar } from '@/components/layout/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

// Page titles and subtitles for each route
// This allows us to display consistent headers across all pages
// The key is the pathname, and the value contains the title and subtitle
const pageTitles: Record<string, { title: string, subtitle: string }> = {
  '/dashboard': { 
    title: 'Dashboard', 
    subtitle: 'Here\'s an overview of your volunteer impact and rewards.' 
  },
  '/activity': { 
    title: 'Activity Feed', 
    subtitle: 'Track your volunteer activities and progress.' 
  },
  '/rewards': { 
    title: 'Rewards', 
    subtitle: 'Redeem your points for exciting rewards.' 
  },
  '/market': { 
    title: 'Market', 
    subtitle: 'Browse and redeem rewards with your points.' 
  },
  '/wallet': { 
    title: 'Wallet', 
    subtitle: 'Manage your points and transactions.' 
  },
  '/impact': { 
    title: 'Impact', 
    subtitle: 'See the difference you\'re making.' 
  },
  '/support': { 
    title: 'Support', 
    subtitle: 'Get help with any questions or issues.' 
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen bg-white p-4">
      <Sidebar />
      
     
        
        <main className="flex-1 overflow-y-auto bg-white rounded-xl  ml-4">
        <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar with page title and user dropdown */}
        {/* Header bar with page title and user info */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#f3f6ff] relative border--200 rounded-t-2xl">
          {/* Left side: Page title and mobile menu */}
          <div className="flex items-center">
            {/* Mobile navigation - only visible on small screens */}
            <div className="block md:hidden mr-4">
              <MobileNav />
            </div>
            {/* Page title and subtitle */}
            <div className="flex flex-col justify-center">
              {pathname && pageTitles[pathname] ? (
                <>
                  <h1 className="text-2xl font-bold mb-1">
                    {/* Special welcome message for dashboard, otherwise use the page title */}
                    {user && pathname === '/dashboard' ? `Welcome back, ${user.firstName}!` : pageTitles[pathname].title}
                  </h1>
                  <p className="opacity-90 text-[#078CBC] text-sm">
                    {pageTitles[pathname].subtitle}
                  </p>
                </>
              ) : null}
            </div>
          </div>
          {/* Right side: User profile dropdown */}
          <div className="bg-white rounded-full p-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 p-0">
                  {/* User avatar with initials */}
                  <div className="w-12 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-medium">
                    {user?.firstName?.[0]}{user?.lastName?.[0] || 'JD'}
                  </div>
                  {/* User name - hidden on very small screens */}
                  <span className="hidden sm:inline-block">{user?.firstName} {user?.lastName || 'John Doe'}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={logout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
          {children}
        </div>
        </main>
    </div>
  );
}