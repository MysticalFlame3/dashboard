import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCards from './components/StatCards';
import SalesProgress from './components/SalesProgress';
import PlatformStats from './components/PlatformStats';
import ReferrerChart from './components/ReferrerChart';
import SalesLeaderboard from './components/SalesLeaderboard';

function App() {
  return (
    <div className="flex w-full min-h-screen bg-[#F5F5F4] overflow-hidden">
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8 relative">
        <div className="max-w-[1600px] mx-auto">
          <Header />
          <StatCards />
          <SalesProgress />
          
          {/* Bottom Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto xl:h-[600px]">
            {/* Column 1: Platform Stats (Approx 3/12 width on large screens) */}
            <div className="lg:col-span-4 xl:col-span-3">
              <PlatformStats />
            </div>

            {/* Column 2: Referrer Chart (Approx 3/12 width) */}
            <div className="lg:col-span-4 xl:col-span-3">
              <ReferrerChart />
            </div>

            {/* Column 3: Leaderboard (Approx 6/12 width) */}
            <div className="lg:col-span-4 xl:col-span-6">
              <SalesLeaderboard />
            </div>
          </div>
          
          {/* Bottom padding for scrolling */}
          <div className="h-10"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
