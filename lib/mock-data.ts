import { VolunteerActivity, Reward, User, RewardHistory, Stats } from './types';

export const mockUser: User = {
  id: '1',
  firstName: 'Levi',
  lastName: 'Kigunda',
  email: 'levi.kigunda@gmail.com',
  avatarUrl: '/avatar.png'
};

export const mockStats: Stats = {
  volunteerHoursTotal: 304,
  volunteerHoursThisWeek: 25,
  servRewardsEarned: 47035.9356,
  eventsParticipated: 32,
  walletValue: 35035.00
};

export const mockActivities: VolunteerActivity[] = [
  {
    id: '1',
    date: '2024-03-15',
    organization: 'Community Clean-Up Drive',
    hoursServed: 4,
    badgeEarned: 'Environmental Hero',
    description: 'Helped clean up local parks and public spaces'
  },
  {
    id: '2',
    date: '2024-03-10',
    organization: 'Food Bank Support',
    hoursServed: 6,
    badgeEarned: 'Community Provider',
    description: 'Sorted and packaged food for families in need'
  },
  {
    id: '3',
    date: '2024-03-05',
    organization: 'Elder Care Volunteering',
    hoursServed: 3,
    badgeEarned: 'Compassion Champion',
    description: 'Spent time assisting with activities and care for seniors'
  },
  {
    id: '4',
    date: '2024-02-28',
    organization: 'Youth Mentorship Program',
    hoursServed: 8,
    badgeEarned: 'Mentor Star',
    description: 'Provided guidance and support to at-risk youth'
  },
  {
    id: '5',
    date: '2024-02-20',
    organization: 'Disaster Relief Effort',
    hoursServed: 10,
    badgeEarned: 'Crisis Responder',
    description: 'Assisted with emergency relief operations'
  }
];

export const mockRewards: Reward[] = [
  {
    id: '1',
    name: '$25 Amazon Gift Card',
    description: 'Redeem for a $25 Amazon gift card',
    points: 2500,
    category: 'Gift Cards',
    imageUrl: 'https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: '$50 Target Gift Card',
    description: 'Redeem for a $50 Target gift card',
    points: 5000,
    category: 'Gift Cards',
    imageUrl: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    name: 'Donate to Clean Water Initiative',
    description: 'Donate your points to help provide clean water',
    points: 3000,
    category: 'Donations',
    imageUrl: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    name: 'Know Freedom T-Shirt',
    description: 'Stylish Know Freedom branded t-shirt',
    points: 1500,
    category: 'Merch',
    imageUrl: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    name: 'Reusable Water Bottle',
    description: 'Eco-friendly Know Freedom water bottle',
    points: 1000,
    category: 'Merch',
    imageUrl: 'https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    name: 'Donate to Animal Shelter',
    description: 'Help animals in need with your points',
    points: 2000,
    category: 'Donations',
    imageUrl: 'https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const mockRewardHistory: RewardHistory[] = [
  {
    id: '1',
    date: '03-11-2024',
    points: 20000,
    rank: 105,
    reward: '47,035.936 SERV',
    status: 'Distributed'
  },
  {
    id: '2',
    date: '01-28-2024',
    points: 20000,
    rank: 105,
    reward: '47,035.936 SERV',
    status: 'Pending'
  },
  {
    id: '3',
    date: '01-15-2024',
    points: 20000,
    rank: 105,
    reward: '47,035.936 SERV',
    status: 'Distributed'
  },
  {
    id: '4',
    date: '03-26-2024',
    points: 20000,
    rank: 105,
    reward: '47,035.936 SERV',
    status: 'Distributed'
  },
  {
    id: '5',
    date: '01-01-2024',
    points: 20000,
    rank: 105,
    reward: '47,035.936 SERV',
    status: 'Distributed'
  },
  {
    id: '6',
    date: '04-23-2024',
    points: 20000,
    rank: 105,
    reward: '47,035.936 SERV',
    status: 'Distributed'
  },
  {
    id: '7',
    date: '04-07-2024',
    points: 20000,
    rank: 105,
    reward: '47,035.936 SERV',
    status: 'Pending'
  },
  {
    id: '8',
    date: '04-28-2024',
    points: 20000,
    rank: 105,
    reward: '47,035.936 SERV',
    status: 'Pending'
  },
  {
    id: '9',
    date: '05-15-2024',
    points: 20000,
    rank: 105,
    reward: '47,035.936 SERV',
    status: 'Pending'
  }
];