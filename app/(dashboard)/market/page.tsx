'use client'

// Market page - displays available rewards that users can redeem with their points
// Includes filtering by category and shows available points balance
// Each reward is displayed as a card with image, title, description and point cost

import { useState } from 'react';
import { mockRewards } from '@/lib/mock-data';
import { RewardCard } from '@/components/ui/reward-card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type RewardCategory = 'All' | 'Gift Cards' | 'Donations' | 'Merch';

export default function MarketPage() {
  // State to track the currently selected reward category
  const [category, setCategory] = useState<RewardCategory>('All');
  
  // Filter rewards based on selected category
  // If 'All' is selected, show all rewards, otherwise filter by category
  const filteredRewards = category === 'All' 
    ? mockRewards 
    : mockRewards.filter(reward => reward.category === category);

  return (
    <div className="space-y-8 px-6 pb-6" style={{ backgroundColor: '#F3F6FF' }}>

      {/* Category tabs for filtering rewards */}
      <section className="mt-6">
        <Tabs defaultValue="All" onValueChange={(value) => setCategory(value as RewardCategory)}>
          <div className="flex items-center justify-between mb-6">
            {/* Category filter tabs */}
            <TabsList>
              <TabsTrigger value="All">All Rewards</TabsTrigger>
              <TabsTrigger value="Gift Cards">Gift Cards</TabsTrigger>
              <TabsTrigger value="Donations">Donations</TabsTrigger>
              <TabsTrigger value="Merch">Merchandise</TabsTrigger>
            </TabsList>
            
            {/* User's available points display */}
            <Button variant="outline" className="text-sm">
              Points Available: {(47035.9356).toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </Button>
          </div>
          
          {/* Reward cards grid - responsive layout with 1-3 columns based on screen size */}
          <TabsContent value="All" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Map through filtered rewards and render a card for each */}
              {filteredRewards.map((reward) => (
                <RewardCard key={reward.id} reward={reward} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="Gift Cards" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRewards.map((reward) => (
                <RewardCard key={reward.id} reward={reward} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="Donations" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRewards.map((reward) => (
                <RewardCard key={reward.id} reward={reward} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="Merch" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRewards.map((reward) => (
                <RewardCard key={reward.id} reward={reward} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}