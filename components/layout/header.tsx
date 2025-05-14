// 'use client'

// import { useAuth } from '@/context/AuthContext';
// import { MobileNav } from './mobile-nav';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Button } from '@/components/ui/button';
// import { ChevronDown } from 'lucide-react';

// interface HeaderProps {
//   title?: string;
// }

// export function Header({ title }: HeaderProps) {
//   const { user, logout } = useAuth();

//   return (
//     <header className="bg-[#078CBC]" >
//       <div className="flex justify-between items-center border-2 border-gray-300">
//         <div className="flex items-center gap-4">
//           <MobileNav />
//           {title && <h1 className="text-xl font-semibold">{title}</h1>}
//         </div>
        
//         <div className="flex items-center gap-2">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center gap-2">
//                 <div className="relative w-8 h-8 overflow-hidden rounded-full bg-gray-100">
//                   <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
//                     {user?.firstName?.[0]}{user?.lastName?.[0]}
//                   </div>
//                 </div>
//                 <span className="hidden sm:inline-block">{user?.firstName} {user?.lastName}</span>
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem onClick={logout}>
//                 Logout
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </header>
//   );
// }