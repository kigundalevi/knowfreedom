# Know Freedom Impact Dashboard

A responsive impact dashboard for Know Freedom, built with Next.js and styled with Tailwind CSS. The platform helps volunteers track their impact, manage rewards, and engage with service opportunities.

## Features

- **Authentication System** - Register and login functionality (mockup only)
- **Dashboard View** - Overview of volunteer hours, rewards earned, and events participated in
- **Activity Feed** - Track recent service activities
- **Rewards Page** - View earned rewards and transaction history
- **Marketplace** - Browse available rewards with category filtering
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Collapsible Sidebar** - Toggle between expanded and collapsed views for better space utilization
- **Consistent Header Layout** - Page titles and subtitles are displayed in a consistent location
- **Service Opportunities** - Browse and sign up for upcoming volunteer opportunities

## Technology Stack

- Next.js 13 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React hooks for state management
- Lucide React for consistent iconography

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js application routes
- `/components` - Reusable UI components
- `/lib` - Utility functions and mock data
- `/context` - React context for global state management

## Assumptions and Trade-offs

- **Mock Authentication** - Uses local storage to simulate user authentication
- **Static Data** - All data is mocked in the frontend with no backend connection
- **Design Decisions** - Used a blue color palette to match the Know Freedom brand
- **Component Library** - Leveraged shadcn/ui for faster development while maintaining a consistent design system
- **Mobile First** - Designed for mobile screens first, then enhanced for larger viewports

## Recent Improvements

- Added collapsible sidebar for better space management
- Implemented consistent header layout across all pages
- Improved spacing and padding for better visual hierarchy
- Enhanced UI with floating elements and subtle shadows
- Optimized layout for different screen sizes

## Future Improvements

- Connect to a real backend API
- Implement actual authentication
- Add more detailed activity analytics
- Enhance the rewards redemption process
- Add user profile management
- Implement dark mode theme option
- Add data visualization for impact metrics