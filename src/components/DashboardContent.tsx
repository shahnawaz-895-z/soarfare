"use client";
const DashboardContent = () => (
  <>
    <div className="mb-8">
      <h1 className="text-2xl font-medium text-gray-800 mb-1">Hello Jane!</h1>
      <p className="text-gray-500">24th October, 2021</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center">
          <div className="bg-orange-100 p-3 rounded-lg mr-4">
            <div className="w-6 h-6 bg-orange-500 rounded"></div>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Current Points</p>
            <p className="text-3xl font-bold text-orange-500">343</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center">
          <div className="bg-orange-100 p-3 rounded-lg mr-4">
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Total Altitude Reward Points Earned</p>
            <p className="text-3xl font-bold text-orange-500">233</p>
          </div>
        </div>
      </div>
    </div>

    {/* Simplified for brevity: insert Flight Search form here as-is */}
    <div className="bg-slate-800 rounded-2xl p-8 text-white">[Flight Search Form here]</div>
  </>
);

export default DashboardContent;