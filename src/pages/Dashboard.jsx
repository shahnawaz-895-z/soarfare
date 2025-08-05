import React, { useState,useEffect } from 'react';
import { Search, ChevronDown, User, Eye, EyeOff,Menu, X } from 'lucide-react';
import FlightSearchComponent from '../components/flightsearchform3'

const SoarFareDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentPage, setCurrentPage] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  const bookingsData = [
    { number: '01', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '02', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '03', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '04', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '05', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '06', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '07', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '08', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '09', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '10', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '11', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '12', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '13', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '14', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '15', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
    { number: '16', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', points: 349 },
];

  const invoicesData = [
    { number: '01', title: 'Invoice Title', date: 'November 7, 2017', amount: '$455' },
    { number: '02', title: 'Invoice Title', date: 'May 12, 2019', amount: '$434' },
    { number: '03', title: 'Invoice Title', date: 'August 2, 2013', amount: '$345' },
    { number: '04', title: 'Invoice Title', date: 'July 14, 2015', amount: '$455' },
    { number: '05', title: 'Invoice Title', date: 'September 9, 2013', amount: '$434' },
    { number: '06', title: 'Invoice Title', date: 'October 25, 2019', amount: '$455' },
    { number: '07', title: 'Invoice Title', date: 'April 28, 2016', amount: '$434' },
    { number: '08', title: 'Invoice Title', date: 'May 6, 2012', amount: '$455' },
     { number: '09', title: 'Invoice Title', date: 'November 7, 2017', amount: '$455' },
    { number: '10', title: 'Invoice Title', date: 'May 12, 2019', amount: '$434' },
    { number: '11', title: 'Invoice Title', date: 'August 2, 2013', amount: '$345' },
    { number: '12', title: 'Invoice Title', date: 'July 14, 2015', amount: '$455' },
    { number: '13', title: 'Invoice Title', date: 'September 9, 2013', amount: '$434' },
    { number: '14', title: 'Invoice Title', date: 'October 25, 2019', amount: '$455' },
    { number: '15', title: 'Invoice Title', date: 'April 28, 2016', amount: '$434' },
    { number: '16', title: 'Invoice Title', date: 'May 6, 2012', amount: '$455' },
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'My Dashboard', icon: '⊞' },
    { id: 'bookings', label: 'My Bookings', icon: '✈' },
    { id: 'invoices', label: 'My Invoices', icon: '📄' },
    { id: 'account', label: 'Account Info', icon: '👤' },
    { id: 'transfer', label: 'Transfer Points', icon: '🔄' },
  ];

  const pointsData = [
    { number: '01', user: 'User Name', type: 'Type Here', date: 'November 7, 2017', points: '455 Points' },
    { number: '02', user: 'User Name', type: 'Type Here', date: 'May 12, 2019', points: '434 Points' },
    { number: '03', user: 'User Name', type: 'Type Here', date: 'August 2, 2013', points: '345 Points' },
    { number: '04', user: 'User Name', type: 'Type Here', date: 'July 14, 2015', points: '455 Points' },
    { number: '05', user: 'User Name', type: 'Type Here', date: 'September 9, 2013', points: '434 Points' },
    { number: '06', user: 'User Name', type: 'Type Here', date: 'October 25, 2019', points: '455 Points' },
    { number: '07', user: 'User Name', type: 'Type Here', date: 'April 28, 2016', points: '434 Points' },
    { number: '08', user: 'User Name', type: 'Type Here', date: 'May 6, 2012', points: '455 Points' },
    { number: '09', user: 'User Name', type: 'Type Here', date: 'November 7, 2017', points: '455 Points' },
    { number: '10', user: 'User Name', type: 'Type Here', date: 'May 12, 2019', points: '434 Points' },
    { number: '11', user: 'User Name', type: 'Type Here', date: 'August 2, 2013', points: '345 Points' },
    { number: '12', user: 'User Name', type: 'Type Here', date: 'July 14, 2015', points: '455 Points' },
    { number: '13', user: 'User Name', type: 'Type Here', date: 'September 9, 2013', points: '434 Points' },
    { number: '14', user: 'User Name', type: 'Type Here', date: 'October 25, 2019', points: '455 Points' },
    { number: '15', user: 'User Name', type: 'Type Here', date: 'April 28, 2016', points: '434 Points' },
    { number: '16', user: 'User Name', type: 'Type Here', date: 'May 6, 2012', points: '455 Points' },
  ];

const renderDashboard = () => (
  <div className="h-full flex flex-col">
    {/* Stats Cards */}
    <div className="grid grid-cols-2 gap-6 mb-4">
      <div className="bg-white rounded-2xl p-6 border border-[#E6E6E6]">
        <div className="flex items-center">
          <div className="bg-[#F4F7FE] p-3 rounded-full mr-4">
            <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5997 18.531C14.9027 18.531 18.3909 15.0428 18.3909 10.7399C18.3909 6.43694 14.9027 2.94873 10.5997 2.94873C6.2968 2.94873 2.80859 6.43694 2.80859 10.7399C2.80859 15.0428 6.2968 18.531 10.5997 18.531Z" stroke="#F27709" strokeWidth="2.59705" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23.7003 13.8174C24.9278 14.275 26.0201 15.0348 26.8761 16.0264C27.7322 17.0181 28.3244 18.2096 28.598 19.4907C28.8715 20.7719 28.8176 22.1013 28.4412 23.3561C28.0649 24.6109 27.3781 25.7506 26.4446 26.6697C25.5111 27.5887 24.3609 28.2576 23.1003 28.6143C21.8398 28.9711 20.5097 29.0043 19.2329 28.7107C17.9562 28.4172 16.7741 27.8065 15.7959 26.9351C14.8178 26.0636 14.0751 24.9596 13.6367 23.7251" stroke="#F27709" strokeWidth="2.59705" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.30078 8.14258H10.5993V13.3367" stroke="#F27709" strokeWidth="2.59705" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.9091 18.375L22.8181 19.297L19.1562 22.9588" stroke="#F27709" strokeWidth="2.59705" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[#252525] font-poppins font-medium text-sm mb-1">Current Points</p>
            <p className="text-3xl font-semibold text-orange-500 font-poppins">343</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 border border-[#E6E6E6]">
        <div className="flex items-center">
          <div className="bg-[#F4F7FE] p-3 rounded-lg mr-4">
            <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4962 4.24707L15.6903 14.6353L22.1829 8.14264L28.6755 27.6205H2.70508L10.4962 4.24707Z" stroke="#F27709" strokeWidth="2.59705" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[#252525] font-poppins font-medium text-sm mb-1">Total Altitude Reward Points Earned</p>
            <p className="text-3xl font-semibold text-orange-500 font-poppins">233</p>
          </div>
        </div>
      </div>
    </div>

    {/* Compact Flight Search */}
    <div className="bg-[#0C2545] rounded-2xl w-full z-[200] relative overflow-visible">
      <div className="w-full">
        <FlightSearchComponent />
      </div>
    </div>
  </div>
);

const renderBookings = () => {
  const itemsPerPage = 9;
  const totalPages = Math.ceil(bookingsData.length / itemsPerPage);
  const currentItems = bookingsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="h-full flex flex-col p-2 sm:p-4">
      <div className="bg-white rounded-2xl p-4 flex-1 flex flex-col border-2 border-blue-300 min-h-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 flex-shrink-0">
          <h1 className="text-xl font-semibold text-gray-800">My Bookings</h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
           <div className="flex items-center text-sm bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg w-full sm:w-auto whitespace-nowrap">
  <span className="mr-2">
    {/* Icon */}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F27709" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16V12" stroke="#F27709" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8H12.01" stroke="#F27709" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
  {bookingsData.length === 0 ? 'No data available in table' : `${bookingsData.length} bookings found`}
</div>

            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search........" 
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-xl overflow-hidden flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead className="bg-gray-100 text-[#1B2430] tracking-wider sticky top-0 font-poppins">
                  <tr>
                    <th className="px-4 py-3 text-left w-16">Number</th>
                    <th className="px-4 py-3 text-left">Description</th>
                    <th className="px-4 py-3 text-right w-24 whitespace-nowrap">Points Used</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                  {currentItems.length > 0 ? (
                    currentItems.map((booking, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">{booking.number}</td>
                        <td className="px-4 py-3">{booking.description}</td>
                        <td className="px-4 py-3 text-right font-medium text-gray-900">{booking.points} Points</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="px-4 py-6 text-center text-gray-500">
                        No bookings available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {bookingsData.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 sm:gap-0 flex-shrink-0">
            <button 
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              &lt; Previous
            </button>

            <div className="flex flex-wrap justify-center gap-1">
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 text-sm rounded-md ${
                      currentPage === pageNum
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Next &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};




const renderInvoices = () => {
  const itemsPerPage = 9;
  const totalPages = Math.ceil(invoicesData.length / itemsPerPage);
  const currentItems = invoicesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="h-full flex flex-col p-2 sm:p-4">
      <div className="bg-white rounded-2xl p-4 flex-1 flex flex-col border-2 border-blue-300 min-h-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 flex-shrink-0">
          <h1 className="text-xl font-semibold text-gray-800">My Invoices</h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
           <div className="flex items-center text-sm bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg w-full sm:w-auto whitespace-nowrap">
  <span className="mr-2">
    {/* Icon */}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F27709" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16V12" stroke="#F27709" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8H12.01" stroke="#F27709" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
  {bookingsData.length === 0 ? 'No data available in table' : `${invoicesData.length} invoices found`}
</div>

            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search........" 
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-xl overflow-hidden flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead className="bg-gray-100 text-[#1B2430] tracking-wider sticky top-0 font-poppins">
                  <tr>
                    <th className="px-4 py-3 text-left w-16">Number</th>
                    <th className="px-4 py-3 text-left">Title</th>
                    <th className="px-4 py-3 text-left w-32">Date</th>
                    <th className="px-4 py-3 text-right w-24">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                  {currentItems.length > 0 ? (
                    currentItems.map((invoice, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">{invoice.number}</td>
                        <td className="px-4 py-3">{invoice.title}</td>
                        <td className="px-4 py-3">{invoice.date}</td>
                        <td className="px-4 py-3 text-right font-medium text-gray-900">{invoice.amount}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                        No invoices available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {invoicesData.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 sm:gap-0 flex-shrink-0">
            <button 
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              &lt; Previous
            </button>

            <div className="flex flex-wrap justify-center gap-1">
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 text-sm rounded-md ${
                      currentPage === pageNum
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Next &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


const renderAccountInfo = () => (
  <div className="h-full flex flex-col">
    <div className="bg-white rounded-2xl p-4 flex-1 flex flex-col border-2 border-blue-300 min-h-0">
      <h1 className="text-xl font-semibold text-gray-800 mb-8">Account Info</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden mb-4">
            <img 
              src="28afccba2bec79207b4fa4f0c3fab9ac5ce88ab4.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="text-orange-500 font-inter text-sm flex items-center">
            {/* SVG icon */}
            <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG path here */}
            </svg>
            Change profile picture
          </button>
        </div>

        {/* Form Section */}
        <div className="flex-1 max-w-2xl w-full font-poppins">
          {/* Name fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full pl-12 pr-4 py-4 bg-[#EEF3F5] border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-[#4D4D4D] font-medium"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full pl-12 pr-4 py-4 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-[#4D4D4D] font-medium"
              />
            </div>
          </div>

          {/* Email field */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">📧</div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full pl-12 pr-4 py-4 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-[#4D4D4D] font-medium"
              />
            </div>
          </div>

          {/* Password fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">🔒</div>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full pl-12 pr-12 py-4 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-[#4D4D4D] font-medium"
              />
              <button 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
              </button>
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">🔒</div>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Confirm Password" 
                className="w-full pl-12 pr-12 py-4 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-[#4D4D4D] font-medium"
              />
              <button 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
              </button>
            </div>
          </div>

          {/* Save button */}
          <div className="flex justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const renderTransferPoints = () => {
  const itemsPerPage = 9;
  const totalPages = Math.ceil(pointsData.length / itemsPerPage);
  const currentItems = pointsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white rounded-2xl p-4 flex-1 flex flex-col border-2 border-blue-300 min-h-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 flex-shrink-0">
          <h1 className="text-xl font-semibold text-gray-800">Transfer Points</h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
           <div className="flex items-center text-sm bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg w-full sm:w-auto whitespace-nowrap">
  <span className="mr-2">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F27709" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16V12" stroke="#F27709" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8H12.01" stroke="#F27709" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
  <span className="hidden sm:inline">You currently do not have any points in your account to refer to friends.</span>
  <span className="sm:hidden">No points available to refer friends.</span>
</div>

            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search........" 
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-xl overflow-hidden flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-sm table-auto min-w-[600px]">
              <thead className="bg-gray-100 text-[#1B2430] tracking-wider sticky top-0 z-10 font-poppins">
                <tr>
                  <th className="px-4 py-3 text-left">Number</th>
                  <th className="px-4 py-3 text-left">User</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Dates</th>
                  <th className="px-4 py-3 text-right">Points</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                {currentItems.length > 0 ? (
                  currentItems.map((booking, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">{booking.number}</td>
                      <td className="px-4 py-3">{booking.user}</td>
                      <td className="px-4 py-3">{booking.type}</td>
                      <td className="px-4 py-3">{booking.date}</td>
                      <td className="px-4 py-3 text-right">{booking.points}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                      No bookings available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {pointsData.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 flex-shrink-0">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              &lt; Previous
            </button>

            <div className="flex gap-1 flex-wrap justify-center">
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 text-sm rounded-md ${
                      currentPage === pageNum
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Next &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};



  const renderContent = () => {
    switch(activeTab) {
      case 'bookings':
        return renderBookings();
      case 'invoices':
        return renderInvoices();
      case 'account':
        return renderAccountInfo();
      case 'transfer':
        return renderTransferPoints();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex overflow-hidden relative">
  {/* Mobile Sidebar Toggle Button */}
  {isMobile && (
    <button
      onClick={toggleSidebar}
      className="fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
    >
      {showSidebar ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  )}

  {/* Sidebar */}
  {(showSidebar || !isMobile) && (
    <div
      className={`w-48 bg-white shadow-sm flex-shrink-0 ${
        isMobile ? 'fixed inset-y-0 left-0 z-40 pt-16' : ''
      }`}
    >
      <div className="px-4">
        <div className="flex items-center justify-center">
          <img
            src="4e8c6399e9117e16c30d8a0a2b25aa785d965b63.png"
            alt="Logo"
            className="h-32"
          />
        </div>

        <nav className="mt-2 space-y-3">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (isMobile) setShowSidebar(false);
              }}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors text-sm ${
                activeTab === item.id
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )}

  {/* Main Content */}
  <div
    className={`flex-1 flex flex-col min-w-0 ${
      isMobile && showSidebar ? 'ml-48' : ''
    }`}
  >
    {/* Top Bar */}
    <div className="bg-[#F4F7FE] px-6 py-4 flex-shrink-0">
      <div className="flex justify-between items-center">
        {/* Greeting Block */}
        <div className={`text-left ${isMobile ? 'pl-12' : 'pl-0'}`}>
          <h1 className="text-xl font-medium font-poppins text-[#1B2430]">Hello Jane!</h1>
          <p className="text-[#1B2430] font-poppins text-sm">24th October, 2021</p>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {!isMobile && (
            <>
              <div className="bg-orange-100 text-[#1B2430] font-poppins px-4 py-2 rounded-lg text-sm flex items-center shadow-2xl">
                <span className="mr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#F27709"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V12"
                      stroke="#F27709"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8H12.01"
                      stroke="#F27709"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                You are not subscribed to a subscription yet.
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm">
                Subscribe
              </button>
            </>
          )}

          {/* Profile Dropdown */}
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-blue-400 w-fit">
            <img
              src="/b940caf9f3a52bcc9317c793ebc094db911b237b.jpg"
              alt="Jane Smith"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-2 mr-2">
              <p className="text-sm font-medium text-[#1B2430] font-poppins leading-none">
                Jane Smith
              </p>
              <p className="text-xs text-[#1B2430] font-poppin leading-none">
                Jane Smith
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600 ml-auto" />
          </div>
        </div>
      </div>
    </div>

    {/* Page Content */}
    <div className="flex-1 p-6 min-h-0 overflow-auto">{renderContent()}</div>
  </div>

  {/* Overlay for mobile */}
  {isMobile && showSidebar && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-30"
      onClick={toggleSidebar}
    />
  )}
</div>

  );
};

export default SoarFareDashboard;