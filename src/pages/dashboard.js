import React, { useState } from 'react';

import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import DashboardCard04 from './partials/dashboard/DashboardCard04';

import Banner from './partials/Banner';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

          Actions
                
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">        
              {/* Bar chart (Direct vs Indirect) */}
             <DashboardCard04 />
              
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;
