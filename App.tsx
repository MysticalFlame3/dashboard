import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ReportHeader from './components/ReportHeader';
import StatCards from './components/StatCards';
import SalesProgress from './components/SalesProgress';
import PlatformList from './components/PlatformList';
import PlatformValue from './components/PlatformValue';
import ReferrerChart from './components/ReferrerChart';
import SalesLeaderboard from './components/SalesLeaderboard';

function App() {
  return (
    <div className="flex w-full min-h-screen bg-[#F5F5F4] overflow-hidden">
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8 relative">
        <div className="max-w-[1600px] mx-auto flex flex-col h-full">
          {/* Top Search & Profile Area - On Gray Background */}
          <TopBar />

          {/* New White Container for Dashboard Content */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm h-full overflow-y-auto no-scrollbar">
            <ReportHeader />
            <StatCards />
            <SalesProgress />

            {/* Bottom Grid Layout - Custom Split */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 h-auto min-h-[600px]">

              {/* LEFT SIDE: Platform Stats & Charts (Span 6) */}
              <div className="xl:col-span-6 flex flex-col gap-6">
                {/* Top Row: List & Bar Chart */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:min-h-[340px]">
                  <div className="h-full">
                    <PlatformList />
                  </div>
                  <div className="h-full">
                    <ReferrerChart />
                  </div>
                </div>

                {/* Bottom Row: Platform Value Card */}
                <div className="flex-1 min-h-[280px]">
                  <PlatformValue />
                </div>
              </div>

              {/* RIGHT SIDE: Leaderboard (Span 6) */}
              <div className="xl:col-span-6 h-full min-h-[600px]">
                <SalesLeaderboard />
              </div>
            </div>

            {/* Bottom padding for scrolling */}
            <div className="h-10"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
