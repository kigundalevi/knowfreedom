'use client'

import { useAuth } from '@/context/AuthContext';
import { StatCard } from '@/components/ui/stat-card';
import { ActivityCard } from '@/components/ui/activity-card';
import { Button } from '@/components/ui/button';
import { mockStats, mockActivities } from '@/lib/mock-data';
import { Clock, Medal, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 px-6 pb-6 rounded-b-2xl" style={{ backgroundColor: '#F3F6FF' }}>

      <section className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<Clock className="h-10 w-10 text-[#078cbc]  bg-[#F3F6FF] p-1 rounded-xl" />}
            title="Volunteer Hours This Week"
            value={mockStats.volunteerHoursThisWeek}
            subtitle="Last 7 days"
          />
          <StatCard
            icon={<Medal className="h-10 w-10 text-[#078cbc] bg-[#F3F6FF] p-1 rounded-xl" />}
            title="SERV Rewards Earned"
            value={mockStats.servRewardsEarned.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
            subtitle="Total lifetime rewards"
          />
          <StatCard
            icon={<Calendar className="h-10 w-10 text-[#078cbc] bg-[#F3F6FF] p-1 rounded-xl" />}
            title="Events Participated"
            value={mockStats.eventsParticipated}
            subtitle="Total events"
          />
        </div>
      </section>

      <section className="mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[#3F5363]">Recent Activities</h2>
          <Link href="/activity">
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {mockActivities.slice(0, 3).map((activity) => (
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

      <section className="border border-border rounded-xl p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4 text-[#3F5363]">Service Opportunity Announcements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="h-40 bg-blue-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-[#3F5363]">Community Clean-Up Drive</h3>
              <p className="text-sm text-muted-foreground mb-4">Join the local clean-up crew to restore parks and public spaces.</p>
              <Button size="sm" variant="outline">Learn more</Button>
            </div>
          </div>
          
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="h-40 bg-green-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-[#3F5363]">Elder Care Volunteering</h3>
              <p className="text-sm text-muted-foreground mb-4">Spend time assisting with activities and care for seniors.</p>
              <Button size="sm" variant="outline">Learn more</Button>
            </div>
          </div>
          
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="h-40 bg-amber-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-[#3F5363]">Food Bank Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Help sort and package food for families in need.</p>
              <Button size="sm" variant="outline">Learn more</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}