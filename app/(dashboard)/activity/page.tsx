'use client'

import { mockActivities } from '@/lib/mock-data';
import { ActivityCard } from '@/components/ui/activity-card';

export default function ActivityPage() {
  return (
    <div className="space-y-6 px-6 pb-6" style={{ backgroundColor: '#F3F6FF' }}>

      <section className="mt-6">
        <div className="grid grid-cols-1 gap-4">
          {mockActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              date={activity.date}
              organization={activity.organization}
              hoursServed={activity.hoursServed}
              badgeEarned={activity.badgeEarned}
              description={activity.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}