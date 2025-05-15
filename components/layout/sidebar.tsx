'use client'

// This sidebar component is the main navigation for the dashboard
// It includes a collapsible feature to save space when needed

import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { 
  LayoutDashboard, 
  Award, 
  Activity, 
  ShoppingBag, 
  Wallet, 
  HelpCircle, 
  LogOut, 
  BarChart4,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

// Navigation items with their routes and icons
// This makes it easy to add or modify menu items in one place
const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Activity', href: '/activity', icon: Activity },
  { name: 'Rewards', href: '/rewards', icon: Award },
  { name: 'Market', href: '/market', icon: ShoppingBag },
  { name: 'Wallet', href: '/wallet', icon: Wallet },
  { name: 'Impact', href: '/impact', icon: BarChart4 },
  { name: 'Support', href: '/support', icon: HelpCircle }
];

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  // State to track whether sidebar is collapsed or expanded
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn(
      "hidden md:flex flex-col h-screen bg-white transition-all duration-300 relative",
      collapsed ? "w-20" : "w-64"
    )}>
      {/* Toggle button for collapsing/expanding the sidebar */}
      {/* Positioned to overlap the sidebar edge for better visibility */}
      <div className="flex justify-end px-4 mt-6">
      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 bg-white rounded-full p-1 z-10 hover:bg-gray-50 transition-colors"
      >
        {/* Change the arrow direction based on sidebar state */}
        {collapsed ? 
          <ChevronRight className="h-5 w-5 text-gray-600" /> : 
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        }
      </button>

      </div>

      {/* Logo Section */}
      <div className="p-6 flex justify-center">
        <Link href="/dashboard" className="flex items-center justify-center">
          <div className={cn(
            "relative overflow-hidden rounded-full border-2 border-gray-100 transition-all duration-300",
            collapsed ? "w-12 h-12" : "w-20 h-20"
          )}>
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

      {/* Navigation Section */}
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-2">
          {navItems.map((item) => {
            // Check if the current path starts with the nav item's href
            // Check if current path matches this nav item to highlight it
            const isActive = pathname.includes(item.href);
            
            return (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors",
                    isActive 
                      ? "text-cyan-600" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className={cn("h-8 w-8", isActive ? "text-white  bg-[#078CBC] p-1 rounded-xl" : "text-gray-500")} />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="p-4 mt-auto border-t border-gray-200">
        <button 
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 hover:bg-gray-50"
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="h-5 w-5 text-gray-500" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}