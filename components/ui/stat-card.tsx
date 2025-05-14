import { cn } from '@/lib/utils';
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ title, value, subtitle, icon, className }: StatCardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-sm p-4 flex flex-col", className)}>
      <div className="flex items-center mb-2">
        {icon && <div className="text-primary">{icon}</div>}
        <h3 className="text-sm font-medium text-[#3F5363] pl-2.5">{title}</h3>
      </div>
      
      <div className="flex flex-col mt-auto">
        <p className="text-2xl font-bold text-[#3F5363]">{value}</p>
        {subtitle && <p className="text-xs text-[#3F5363] mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}