import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, X, ChevronDown, ChevronLeft, ChevronRight, Plane } from "lucide-react";
import airports from '@/data/airports';
import Navigation from '@/components/Navigation';

// // Mock airports data
// const airports = [
//   { name: "John F. Kennedy International Airport", city: "New York", country: "United States", iata: "JFK" },
//   { name: "Los Angeles International Airport", city: "Los Angeles", country: "United States", iata: "LAX" },
//   { name: "London Heathrow Airport", city: "London", country: "United Kingdom", iata: "LHR" },
//   { name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", iata: "HND" },
//   { name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates", iata: "DXB" },
//   { name: "Singapore Changi Airport", city: "Singapore", country: "Singapore", iata: "SIN" },
//   { name: "Paris Charles de Gaulle Airport", city: "Paris", country: "France", iata: "CDG" },
//   { name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands", iata: "AMS" },
//   { name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", iata: "FRA" },
//   { name: "Hong Kong International Airport", city: "Hong Kong", country: "Hong Kong", iata: "HKG" }
// ];

const SearchFlights = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [leftThumb, setLeftThumb] = useState(0);
  const [rightThumb, setRightThumb] = useState(100);
  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);

  // State for dropdowns
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const [selectedFromAirport, setSelectedFromAirport] = useState(null);
  const [selectedToAirport, setSelectedToAirport] = useState(null);
  const [travelDate, setTravelDate] = useState('20 July');
  const [returnDate, setReturnDate] = useState('25 July');
  const [travelDay, setTravelDay] = useState('Sunday');
  const [returnDay, setReturnDay] = useState('Friday');
  const [seatsClass, setSeatsClass] = useState('Economy');
  const [travelType, setTravelType] = useState('One Way');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showSeatsDropdown, setShowSeatsDropdown] = useState(false);
  const [showTravelTypeDropdown, setShowTravelTypeDropdown] = useState(false);
  const [showTravelDateCalendar, setShowTravelDateCalendar] = useState(false);
  const [showReturnDateCalendar, setShowReturnDateCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // Separate refs for different dropdowns
  const fromDropdownRef = useRef(null);
  const toDropdownRef = useRef(null);
  const seatsDropdownRef = useRef(null);
  const travelTypeDropdownRef = useRef(null);
  const travelCalendarRef = useRef(null);
  const returnCalendarRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromDropdownRef.current && !fromDropdownRef.current.contains(event.target)) {
        setShowFromDropdown(false);
      }
      if (toDropdownRef.current && !toDropdownRef.current.contains(event.target)) {
        setShowToDropdown(false);
      }
      if (seatsDropdownRef.current && !seatsDropdownRef.current.contains(event.target)) {
        setShowSeatsDropdown(false);
      }
      if (travelTypeDropdownRef.current && !travelTypeDropdownRef.current.contains(event.target)) {
        setShowTravelTypeDropdown(false);
      }
      if (travelCalendarRef.current && !travelCalendarRef.current.contains(event.target)) {
        setShowTravelDateCalendar(false);
      }
      if (returnCalendarRef.current && !returnCalendarRef.current.contains(event.target)) {
        setShowReturnDateCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter airports based on input
  const filterAirports = (input) => {
    if (!input || input.length < 2) return [];
    
    return airports.filter(airport => 
      airport.name.toLowerCase().includes(input.toLowerCase()) ||
      airport.city.toLowerCase().includes(input.toLowerCase()) ||
      airport.country.toLowerCase().includes(input.toLowerCase()) ||
      airport.iata.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 10);
  };

  const getFilteredFromAirports = () => filterAirports(fromInput);
  const getFilteredToAirports = () => filterAirports(toInput);

  const seatClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];
  const travelTypes = ['One Way', 'Round Trip', 'Multi-city'];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleMouseDownLeft = () => {
    setIsDraggingLeft(true);
  };

  const handleMouseDownRight = () => {
    setIsDraggingRight(true);
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingLeft && !isDraggingRight) return;

    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    const clampedPosition = Math.max(0, Math.min(100, position));

    if (isDraggingLeft && clampedPosition < rightThumb) {
      setLeftThumb(clampedPosition);
      setMinPrice(Math.round(0 + (clampedPosition / 100) * 100000));
    }

    if (isDraggingRight && clampedPosition > leftThumb) {
      setRightThumb(clampedPosition);
      setMaxPrice(Math.round(0 + (clampedPosition / 100) * 100000));
    }
  };

  const closeAllDropdowns = () => {
    setShowFromDropdown(false);
    setShowToDropdown(false);
    setShowSeatsDropdown(false);
    setShowTravelTypeDropdown(false);
    setShowTravelDateCalendar(false);
    setShowReturnDateCalendar(false);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (day, month, year) => {
    return `${monthNames[month].substring(0, 3)} ${day}`;
  };

  const handleSelectDate = (day, isReturnDate = false) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = dayNames[date.getDay()];
    const formattedDate = formatDate(day, currentMonth, currentYear);
    
    if (isReturnDate) {
      setReturnDate(formattedDate);
      setReturnDay(dayOfWeek);
      setShowReturnDateCalendar(false);
    } else {
      setTravelDate(formattedDate);
      setTravelDay(dayOfWeek);
      setShowTravelDateCalendar(false);
    }
  };

  const renderCalendar = (isReturnDate = false) => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <button
          key={day}
          onClick={() => handleSelectDate(day, isReturnDate)}
          className="p-2 text-center hover:bg-blue-100 rounded transition-colors text-sm"
        >
          {day}
        </button>
      );
    }

    return (
      <div className="bg-white text-black rounded-lg shadow-xl border p-4 w-80 z-[100]">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="font-semibold">
            {monthNames[currentMonth]} {currentYear}
          </div>
          <button
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Day Names */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="p-2 text-center text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  const FiltersContent = () => (
    <div className="w-80 space-y-6">
      {/* Filter by price */}
      <div className="bg-white rounded-lg p-4 border shadow-xl">
        <h3 className="font-semibold mb-4">Filter by price</h3>

        <div 
          className="mb-6 px-2"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Slider container */}
          <div className="relative top-4 h-2 bg-gray-200 rounded-full mb-6">

            {/* Track */}
            <div 
              className="absolute h-2 bg-orange-500 rounded-full" 
              style={{ left: `${leftThumb}%`, right: `${100 - rightThumb}%` }}
            ></div>

            {/* Left price label */}
            <div 
              className="absolute -top-6 text-xs font-medium text-gray-700" 
              style={{ left: `calc(${leftThumb}% - 12px)` }}
            >
              ${minPrice}
            </div>

            {/* Right price label */}
            <div 
              className="absolute -top-6 text-xs font-medium text-gray-700" 
              style={{ left: `calc(${rightThumb}% - 12px)` }}
            >
              ${maxPrice}
            </div>

            {/* Left Thumb */}
            <div 
              className="absolute h-4 w-4 bg-white rounded-full -top-1 -ml-2 cursor-pointer"
              style={{ 
                left: `${leftThumb}%`, 
                boxShadow: '0.58px 0.58px 2.32px 1.16px #00000052' 
              }}
              onMouseDown={handleMouseDownLeft}
            />

            {/* Right Thumb */}
            <div 
              className="absolute h-4 w-4 bg-white rounded-full -top-1 -ml-2 cursor-pointer"
              style={{ 
                left: `${rightThumb}%`, 
                boxShadow: '0.58px 0.58px 2.32px 1.16px #00000052' 
              }}
              onMouseDown={handleMouseDownRight}
            />
          </div>
        </div>

        <button className="w-1/6 text-orange-500 border border-transparent hover:border-orange-500 rounded px-3 py-1">
          Apply
        </button>
      </div>

      {/* Stops, Class, Airlines, Refundable */}
      {[
        { title: 'Number of stops', options: ['1 stop', '2 stop', '3 stop', 'Non-stop'] },
        { title: 'Flight class', options: ['Economy', 'Business'] },
        { title: 'Airlines', options: ['Qatar Airways', 'Fly Emirates', 'Nova Air', 'Air Asia', 'Singapore Airlines'] },
        { title: 'Refundable', options: ['Yes', 'No', 'As per rules'] }
      ].map(({ title, options }) => (
        <div key={title} className="bg-white rounded-lg p-4 border shadow-xl">
          <h3 className="font-semibold mb-4">{title}</h3>
          <div className="space-y-3">
            {options.map((label, i) => (
              <div key={i} className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <Checkbox />
                  <span>{label}</span>
                </label>
                <span className="text-sm text-gray-500">20</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const FlightCard = () => (
    <div className="bg-white rounded-lg border border-[#DDDDDD] max-w-4xl mx-auto shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-400 hover:scale-[1.01] transform hover:bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left section - Qatar Airways logo and show more */}
        <div className="flex flex-col items-start w-24 md:w-32 p-4 md:p-6">
          <div className="w-20 md:w-24 h-10 md:h-12 bg-gray-200 rounded mb-2 flex items-center justify-center">
            <span className="text-xs text-gray-500">LOGO</span>
          </div>
          <button className="text-xs text-gray-500 hover:underline flex items-center">
            Show more 
            <ChevronDown className="w-3 h-3 ml-1" />
          </button>
        </div>

        {/* Middle section - Flight details */}
        <div className="flex flex-col md:flex-row items-center justify-center flex-1 py-4 md:py-6 px-4">
          {/* From section */}
          <div className="text-left md:text-left text-center min-w-[150px] md:min-w-[180px] mb-4 md:mb-0">
            <div className="text-xs text-gray-500 mb-1">From</div>
            <div className="font-semibold text-xl md:text-2xl text-gray-900 mb-1">New York</div>
            <div className="text-sm text-gray-600">JFK - John F. Kennedy In...</div>
          </div>

          {/* Flight path with arrow */}
          <div className="flex flex-col items-center mx-4 md:mx-8 mb-4 md:mb-0">
            <div
              className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-orange-500 flex items-center justify-center mb-2 border mx-auto shadow-2xl"
              style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 md:w-7 h-6 md:h-7 text-white drop-shadow-md"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">Non-stop</div>
            <div className="text-xs text-gray-500">01h 05minute</div>
          </div>

          {/* To section */}
          <div className="text-left md:text-left text-center min-w-[150px] md:min-w-[180px] mb-4 md:mb-0">
            <div className="text-xs text-gray-500 mb-1">To</div>
            <div className="font-semibold text-xl md:text-2xl text-gray-900 mb-1">London</div>
            <div className="text-sm text-gray-600">LCY, London city airport</div>
          </div>
        </div>

        {/* Right section - Price and booking */}
        <div className="bg-orange-100 text-center w-full md:w-48 flex flex-col justify-center py-6 md:py-8 px-6 md:-mr-px md:-my-px md:rounded-r-lg">
          <div className="font-semi text-xl md:text-2xl mb-4 text-gray-900">300 Points</div>
          <button className="bg-orange-500 hover:bg-white hover:text-orange-500 border hover:border-orange-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation/>
      </div>
      <div className="pt-32 container mx-auto px-6 py-8">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-end">

            {/* From */}
            <div className="flex-1 min-w-[160px] relative" ref={fromDropdownRef}>
              <label className="text-sm font-medium text-gray-700 mb-2 block">From</label>
              <div className="relative">
                <input
                  type="text"
                  value={selectedFromAirport ? `${selectedFromAirport.city} (${selectedFromAirport.iata})` : fromInput}
                  onChange={(e) => {
                    setFromInput(e.target.value);
                    if (selectedFromAirport) setSelectedFromAirport(null);
                    setShowFromDropdown(true);
                  }}
                  onFocus={() => {
                    setShowFromDropdown(true);
                  }}
                  placeholder="Search airports, cities..."
                  className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left font-semibold text-[#0C2545] focus:outline-none focus:ring-2 focus:ring-orange-500"
                  autoComplete="off"
                />
                
                {/* From Dropdown */}
                {showFromDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-full max-w-xs sm:max-w-md bg-white text-black rounded-lg shadow-xl border max-h-80 overflow-y-auto z-[100]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {getFilteredFromAirports().length > 0 ? (
                      getFilteredFromAirports().map((airport, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedFromAirport(airport);
                            setFromInput('');
                            setShowFromDropdown(false);
                          }}
                          className="w-full p-4 text-left hover:bg-gray-100 transition-colors flex items-center space-x-3 border-b border-gray-200 last:border-b-0 cursor-pointer"
                        >
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <Plane className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{airport.city}</div>
                            <div className="text-sm text-gray-500">
                              {airport.name} ({airport.iata}) - {airport.country}
                            </div>
                          </div>
                        </button>
                      ))
                    ) : fromInput.length >= 2 ? (
                      <div className="p-4 text-gray-500 text-center">No airports found</div>
                    ) : (
                      <div className="p-4 text-gray-500 text-center">Type at least 2 characters to search</div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Display full airport info below input when selected */}
              {selectedFromAirport && (
                <div className="text-sm text-[#212529] mt-1 px-3">
                  {selectedFromAirport.name} ({selectedFromAirport.iata})
                </div>
              )}
            </div>

            {/* To */}
            <div className="flex-1 min-w-[160px] relative" ref={toDropdownRef}>
              <label className="text-sm font-medium text-gray-700 mb-2 block">To</label>
              <div className="relative">
                <input
                  type="text"
                  value={selectedToAirport ? `${selectedToAirport.city} (${selectedToAirport.iata})` : toInput}
                  onChange={(e) => {
                    setToInput(e.target.value);
                    if (selectedToAirport) setSelectedToAirport(null);
                    setShowToDropdown(true);
                  }}
                  onFocus={() => {
                    setShowToDropdown(true);
                  }}
                  placeholder="Search airports, cities..."
                  className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left font-semibold text-[#0C2545] focus:outline-none focus:ring-2 focus:ring-orange-500"
                  autoComplete="off"
                />
                
                {/* To Dropdown */}
                {showToDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-full max-w-xs sm:max-w-md bg-white text-black rounded-lg shadow-xl border max-h-80 overflow-y-auto z-[100]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {getFilteredToAirports().length > 0 ? (
                      getFilteredToAirports().map((airport, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedToAirport(airport);
                            setToInput('');
                            setShowToDropdown(false);
                          }}
                          className="w-full p-4 text-left hover:bg-gray-100 transition-colors flex items-center space-x-3 border-b border-gray-200 last:border-b-0 cursor-pointer"
                        >
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <Plane className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{airport.city}</div>
                            <div className="text-sm text-gray-500">
                              {airport.name} ({airport.iata}) - {airport.country}
                            </div>
                          </div>
                        </button>
                      ))
                    ) : toInput.length >= 2 ? (
                      <div className="p-4 text-gray-500 text-center">No airports found</div>
                    ) : (
                      <div className="p-4 text-gray-500 text-center">Type at least 2 characters to search</div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Display full airport info below input when selected */}
              {selectedToAirport && (
                <div className="text-sm text-[#212529] mt-1 px-3">
                  {selectedToAirport.name} ({selectedToAirport.iata})
                </div>
              )}
            </div>

            {/* Travel Date */}
            <div className="min-w-[160px] relative" ref={travelCalendarRef}>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Travel Date</label>
              <button 
                onClick={() => {
                  setShowTravelDateCalendar(!showTravelDateCalendar);
                }}
                className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
              >
                <div className="font-semibold text-[#0C2545]">{travelDate}</div>
                <div className="text-sm text-[#212529]">{travelDay}</div>
              </button>
              
              {/* Travel Date Calendar */}
              {showTravelDateCalendar && (
                <div className="absolute top-full left-0 mt-2 z-[100]">
                  {renderCalendar(false)}
                </div>
              )}
            </div>

            {/* Return Date */}
            <div className="min-w-[160px] relative" ref={returnCalendarRef}>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Return Date</label>
              <button 
                onClick={() => {
                  setShowReturnDateCalendar(!showReturnDateCalendar);
                }}
                className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
              >
                <div className="font-semibold text-[#0C2545]">{returnDate}</div>
                <div className="text-sm text-[#212529]">{returnDay}</div>
              </button>
              
              {/* Return Date Calendar */}
              {showReturnDateCalendar && (
                <div className="absolute top-full left-0 mt-2 z-[100]">
                  {renderCalendar(true)}
                </div>
              )}
            </div>

            {/* Seats & Classes */}
            <div className="min-w-[160px] relative" ref={seatsDropdownRef}>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Seats & Classes</label>
              <button 
                onClick={() => {
                  setShowSeatsDropdown(!showSeatsDropdown);
                }}
                className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
              >
                <div className="font-semibold text-[#0C2545]">{adults + children + infants} Passenger{adults + children + infants > 1 ? 's' : ''}</div>
                <div className="text-sm text-[#212529]">{seatsClass}</div>
              </button>
              
              {/* Seats Dropdown */}
              {showSeatsDropdown && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-xl border z-[100]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Adults (12+ Years)</span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">−</span>
                          </button>
                          <span className="w-8 text-center font-medium">{adults}</span>
                          <button
                            onClick={() => setAdults(adults + 1)}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">+</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Children (2 - 11 Years)</span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">−</span>
                          </button>
                          <span className="w-8 text-center font-medium">{children}</span>
                          <button
                            onClick={() => setChildren(children + 1)}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">+</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Infants (0 - 23 Month)</span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setInfants(Math.max(0, infants - 1))}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">−</span>
                          </button>
                          <span className="w-8 text-center font-medium">{infants}</span>
                          <button
                            onClick={() => setInfants(infants + 1)}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Select Class</h4>
                      <div className="space-y-2">
                        {seatClasses.map((cls) => (
                          <label key={cls} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="seatClass"
                              checked={seatsClass === cls}
                              onChange={() => setSeatsClass(cls)}
                              className="w-4 h-4 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm font-medium text-gray-700">{cls}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Travel Type */}
            <div className="min-w-[160px] relative" ref={travelTypeDropdownRef}>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Travel Type</label>
              <button 
                onClick={() => {
                  setShowTravelTypeDropdown(!showTravelTypeDropdown);
                }}
                className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
              >
                <div className="font-semibold text-[#0C2545]">{travelType}</div>
                <div className="text-sm text-[#212529]">{seatsClass}</div>
              </button>
              
              {/* Travel Type Dropdown */}
              {showTravelTypeDropdown && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-xl border z-[100]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4 space-y-3">
                    {travelTypes.map((type, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="travelType"
                          value={type}
                          checked={travelType === type}
                          onChange={() => setTravelType(type)}
                          className="w-4 h-4 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
          
          {/* Search Button */}
          <div className="mt-6 flex justify-end">
            <Button className="bg-orange-500 hover:bg-white hover:text-orange-500 border hover:border-orange-500 text-white px-8 py-3 text-lg font-semibold">
              <Search className="w-4 h-4 mr-2" /> Search Flights
            </Button>
          </div>
        </div>

        {/* Mobile Filters */}
        <div className="lg:hidden fixed bottom-6 right-6">
          <Button onClick={() => setIsFilterOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 p-0 shadow-lg">
            <Filter className="w-5 h-5" />
          </Button>
        </div>

        {isFilterOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto z-50">
              <div className="p-4 border-b flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4">
                <FiltersContent />
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          <div className="hidden lg:block">
            <FiltersContent />
          </div>

          <div className="flex-1 space-y-4 z-0">
            {[...Array(6)].map((_, i) => <FlightCard key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFlights;