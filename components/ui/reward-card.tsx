'use client'

import { Reward } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

interface RewardCardProps {
  reward: Reward;
  className?: string;
}

export function RewardCard({ reward, className }: RewardCardProps) {
  const [isRedeeming, setIsRedeeming] = useState(false);

  const handleRedeem = () => {
    setIsRedeeming(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsRedeeming(false);
      alert(`You've redeemed: ${reward.name}`);
    }, 1000);
  };

  return (
    <div className={cn("flex flex-col bg-white rounded-xl shadow-sm overflow-hidden border border-border", className)}>
      <div className="relative h-40 w-full">
        <Image 
          src={reward.imageUrl}
          alt={reward.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-1">{reward.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{reward.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-primary">{reward.points.toLocaleString()} points</span>
          <Button 
            size="sm" 
            onClick={handleRedeem}
            disabled={isRedeeming}
          >
            {isRedeeming ? 'Processing...' : 'Redeem'}
          </Button>
        </div>
      </div>
    </div>
  );
}