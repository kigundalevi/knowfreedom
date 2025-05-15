'use client'

// Activity page - displays all volunteer activities in chronological order
// This page shows a comprehensive list of all activities, unlike the dashboard
// which only shows the most recent ones

import { mockActivities } from '@/lib/mock-data';
import { ActivityCard } from '@/components/ui/activity-card';

export default function ActivityPage() {
  return (
    <div className="space-y-6 px-6 pb-6 rounded-b-2xl" style={{ backgroundColor: '#F3F6FF' }}>

      {/* Activity feed - displays all activities in a vertical list */}
      {/* Each activity is shown in a card with details like date, organization, hours */}
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