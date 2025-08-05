"use client";
const Sidebar = ({ activeTab, setActiveTab }) => {
  const sidebarItems = [
    { id: 'dashboard', label: 'My Dashboard', icon: '⊞' },
    { id: 'bookings', label: 'My Bookings', icon: '✈' },
    { id: 'invoices', label: 'My Invoices', icon: '📄' },
    { id: 'account', label: 'Account Info', icon: '👤' },
    { id: 'transfer', label: 'Transfer Points', icon: '🔄' },
  ];

  return (
    <div className="lg:w-64 bg-white shadow-sm border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <span className="text-2xl font-bold">
            <span className="text-blue-400">Soar</span>
            <span className="text-orange-500">Fare</span>
          </span>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;