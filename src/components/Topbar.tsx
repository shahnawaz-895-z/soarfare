"use client";
import { ChevronDown } from 'lucide-react';
const Topbar = ({ activeTab }) => (
  <div className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center space-x-4">
        {activeTab !== 'dashboard' && (
          <>
            <h1 className="text-2xl font-medium text-gray-800">Hello Jane!</h1>
            <p className="text-gray-500">24th October, 2021</p>
          </>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm flex items-center">
          <span className="mr-2">⚠</span>
          You are not subscribed to a subscription yet.
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          Subscribe
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            JS
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Jane Smith</p>
            <p className="text-xs text-gray-500">Jane Smith</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;