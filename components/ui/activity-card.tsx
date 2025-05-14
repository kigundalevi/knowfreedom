import { cn } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface ActivityCardProps {
  date: string;
  organization: string;
  hoursServed: number;
  badgeEarned: string;
  description: string;
  className?: string;
}

export function ActivityCard({
  date,
  organization,
  hoursServed,
  badgeEarned,
  description,
  className,
}: ActivityCardProps) {
  const formattedDate = format(new Date(date), 'MMM dd, yyyy');

  return (
    <div className={cn("bg-white rounded-xl shadow-sm p-5 border border-border", className)}>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-[#3F5363]">{organization}</h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
            {badgeEarned}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm">{description}</p>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {formattedDate}
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {hoursServed} {hoursServed === 1 ? 'hour' : 'hours'}
          </div>
        </div>
      </div>
    </div>
  );
}