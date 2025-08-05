"use client";
import { Search } from "lucide-react";
const BookingsContent = ({ currentPage, setCurrentPage }) => {
  const bookingsData = new Array(8).fill(null).map((_, i) => ({
    number: `0${i + 1}`,
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    points: 349
  }));

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-medium text-gray-800">My Bookings</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm flex items-center">
            <span className="mr-2">⚠</span>
            No data available in table
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search........"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Number</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">Points Used</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookingsData.map((booking, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.number}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 max-w-md">{booking.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{booking.points} Points</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <button className="text-gray-400 hover:text-gray-600 disabled:opacity-50" disabled={currentPage === 1}>← Previous</button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${currentPage === page ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg">Next →</button>
        </div>
      </div>
    </>
  );
};


export default BookingsContent;