'use client'

import { useState } from 'react';
import { mockRewards } from '@/lib/mock-data';
import { RewardCard } from '@/components/ui/reward-card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type RewardCategory = 'All' | 'Gift Cards' | 'Donations' | 'Merch';

export default function MarketPage() {
  const [category, setCategory] = useState<RewardCategory>('All');
  
  const filteredRewards = category === 'All' 
    ? mockRewards 
    : mockRewards.filter(reward => reward.category === category);

  return (
    <div className="space-y-8 px-6 pb-6" style={{ backgroundColor: '#F3F6FF' }}>

      <section className="mt-6">
        <Tabs defaultValue="All" onValueChange={(value) => setCategory(value as RewardCategory)}>
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="All">All Rewards</TabsTrigger>
              <TabsTrigger value="Gift Cards">Gift Cards</TabsTrigger>
              <TabsTrigger value="Donations">Donations</TabsTrigger>
              <TabsTrigger value="Merch">Merchandise</TabsTrigger>
            </TabsList>
            
            <Button variant="outline" className="text-sm">
              Points Available: {(47035.9356).toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </Button>
          </div>
          
          <TabsContent value="All" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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