export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
};

export type VolunteerActivity = {
  id: string;
  date: string;
  organization: string;
  hoursServed: number;
  badgeEarned: string;
  description: string;
};

export type Reward = {
  id: string;
  name: string;
  description: string;
  points: number;
  category: 'Gift Cards' | 'Donations' | 'Merch';
  imageUrl: string;
};

export type RewardHistory = {
  id: string;
  date: string;
  points: number;
  rank: number;
  reward: string;
  status: 'Distributed' | 'Pending';
};

export type Stats = {
  volunteerHoursTotal: number;
  volunteerHoursThisWeek: number;
  servRewardsEarned: number;
  eventsParticipated: number;
  walletValue: number;
};