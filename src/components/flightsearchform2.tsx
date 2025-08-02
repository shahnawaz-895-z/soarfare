import React, { useState } from 'react';
import { ArrowLeftRight, Search, MapPin, Plane, ChevronDown, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import airports from '@/data/airports';

const FlightSearchComponent = () => {
  const [fromLocation, setFromLocation] = useState('Origin');
  const [toLocation, setToLocation] = useState('Destination');
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const [selectedFromAirport, setSelectedFromAirport] = useState(null);
  const [selectedToAirport, setSelectedToAirport] = useState(null);
  const [isFromInputMode, setIsFromInputMode] = useState(false);
  const [isToInputMode, setIsToInputMode] = useState(false);
  const [travelDate, setTravelDate] = useState('mm/dd/yyyy');
  const [returnDate, setReturnDate] = useState('mm/dd/yyyy');
  const [seatsClass, setSeatsClass] = useState('Economy');
  const [travelType, setTravelType] = useState('Round Trip');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showSeatsDropdown, setShowSeatsDropdown] = useState(false);
  const [showTravelTypeDropdown, setShowTravelTypeDropdown] = useState(false);
  const [showTravelDateCalendar, setShowTravelDateCalendar] = useState(false);
  const [showReturnDateCalendar, setShowReturnDateCalendar] = useState(false);

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Filter airports based on input
  const filterAirports = (input) => {
    if (!input || input.length < 1) return [];
    
    return airports.filter(airport => 
      airport.name.toLowerCase().includes(input.toLowerCase()) ||
      airport.city.toLowerCase().includes(input.toLowerCase()) ||
      airport.country.toLowerCase().includes(input.toLowerCase()) ||
      airport.iata.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 10); // Limit to 10 suggestions
  };

  const getFilteredFromAirports = () => filterAirports(fromInput);
  const getFilteredToAirports = () => filterAirports(toInput);

  // Helper function to get airport display info
  const getDisplayText = (airport, isSelected = false) => {
    if (!airport) return '';
    return isSelected ? airport.city : `${airport.city} (${airport.iata})`;
  };

  const seatClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];
  const travelTypes = [
    { id: 'roundtrip', label: 'Round Trip' },
    { id: 'oneway', label: 'One Way' },
    { id: 'multicity', label: 'Multi-city' }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const closeAllDropdowns = () => {
    setShowFromDropdown(false);
    setShowToDropdown(false);
    setShowSeatsDropdown(false);
    setShowTravelTypeDropdown(false);
    setShowTravelDateCalendar(false);
    setShowReturnDateCalendar(false);
  };

  const swapLocations = () => {
    // Swap selected airports
    const tempFromAirport = selectedFromAirport;
    const tempToAirport = selectedToAirport;
    setSelectedFromAirport(tempToAirport);
    setSelectedToAirport(tempFromAirport);
    
    // Swap display locations
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
    
    // Clear input modes
    setIsFromInputMode(false);
    setIsToInputMode(false);
    setFromInput('');
    setToInput('');
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (day, month, year) => {
    return `${String(month + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;
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
          onClick={() => {
            const formattedDate = formatDate(day, currentMonth, currentYear);
            if (isReturnDate) {
              setReturnDate(formattedDate);
              setShowReturnDateCalendar(false);
            } else {
              setTravelDate(formattedDate);
              setShowTravelDateCalendar(false);
            }
          }}
          className="p-2 text-center hover:bg-blue-100 rounded transition-colors text-sm"
        >
          {day}
        </button>
      );
    }

    return (
      <div className="bg-white text-black rounded-lg shadow-xl border p-3 sm:p-4 w-[320px] sm:w-96 max-w-[calc(100vw-1rem)] z-[2147483647]">
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
          <div className="font-semibold text-sm sm:text-base">
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
            <div key={day} className="p-1 sm:p-2 text-center text-xs font-medium text-gray-500">
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

  return (
    <div className="w-full bg-transparent text-white relative" style={{zIndex: 999999, position: 'relative', isolation: 'isolate'}}>
      {/* Search Bar Container */}
      <div className="bg-transparent p-3 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center bg-[#081C3A] rounded-2xl shadow-2xl">
            
            {/* From Section */}
            <div className="relative flex-1">
              <div className="p-4 ">
                <div className="text-sm text-gray-300 mb-1">From</div>
                {isFromInputMode ? (
                  <input
                    type="text"
                    value={fromInput}
                    onChange={(e) => {
                      setFromInput(e.target.value);
                      setShowFromDropdown(true);
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        if (!selectedFromAirport && fromInput) {
                          setIsFromInputMode(false);
                          setFromInput('');
                        }
                      }, 200);
                    }}
                    placeholder="Search airports, cities..."
                    className="bg-transparent text-white text-left w-full border-none outline-none placeholder-gray-400"
                    autoFocus
                  />
                ) : (
                  <button
                    onClick={() => {
                      closeAllDropdowns();
                      setIsFromInputMode(true);
                      setShowFromDropdown(true);
                    }}
                    className="text-white text-left w-full hover:text-gray-300 transition-colors"
                  >
                    {selectedFromAirport ? getDisplayText(selectedFromAirport, true) : fromLocation}
                  </button>
                )}
              </div>
              
              {/* From Dropdown - Desktop */}
              {showFromDropdown && isFromInputMode && (
                <div className="absolute top-full left-0 mt-2 w-80 xl:w-96 bg-white text-black rounded-lg shadow-xl border max-h-60 overflow-y-auto z-[2147483647]">
                  {getFilteredFromAirports().length > 0 ? (
                    getFilteredFromAirports().map((airport, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedFromAirport(airport);
                          setFromLocation(getDisplayText(airport, true));
                          setIsFromInputMode(false);
                          setFromInput('');
                          setShowFromDropdown(false);
                        }}
                        className="w-full p-4 text-left hover:bg-gray-100 transition-colors flex items-center space-x-3 border-b border-gray-200 last:border-b-0"
                      >
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <Plane className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{airport.city}</div>
                          <div className="text-sm text-gray-500">{airport.name} ({airport.iata}) - {airport.country}</div>
                        </div>
                      </button>
                    ))
                  ) : fromInput.length >= 1 ? (
                    <div className="p-4 text-gray-500 text-center">No airports found</div>
                  ) : (
                    <div ></div>
                  )}
                </div>
              )}
            </div>

            {/* Swap Button */}
            <div className="px-7">
              <button
                onClick={swapLocations}
                className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
              >
                <ArrowLeftRight className="w-5 h-5 text-orange-500" />
              </button>
            </div>

            {/* To Section */}
            <div className="relative flex-1">
              <div className="p-4 ">
                <div className="text-sm text-gray-300 mb-1">To</div>
                {isToInputMode ? (
                  <input
                    type="text"
                    value={toInput}
                    onChange={(e) => {
                      setToInput(e.target.value);
                      setShowToDropdown(true);
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        if (!selectedToAirport && toInput) {
                          setIsToInputMode(false);
                          setToInput('');
                        }
                      }, 200);
                    }}
                    placeholder="Search airports, cities..."
                    className="bg-transparent text-white text-left w-full border-none outline-none placeholder-gray-400"
                    autoFocus
                  />
                ) : (
                  <button
                    onClick={() => {
                      closeAllDropdowns();
                      setIsToInputMode(true);
                      setShowToDropdown(true);
                    }}
                    className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between"
                  >
                    {selectedToAirport ? getDisplayText(selectedToAirport, true) : toLocation}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>

              {/* To Dropdown - Desktop */}
              {showToDropdown && isToInputMode && (
                <div className="absolute top-full left-0 mt-2 w-80 xl:w-96 bg-white text-black rounded-lg shadow-xl border max-h-60 overflow-y-auto z-[2147483647]">
                  {getFilteredToAirports().length > 0 ? (
                    getFilteredToAirports().map((airport, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedToAirport(airport);
                          setToLocation(getDisplayText(airport, true));
                          setIsToInputMode(false);
                          setToInput('');
                          setShowToDropdown(false);
                        }}
                        className="w-full p-4 text-left hover:bg-gray-100 transition-colors flex items-center space-x-3 border-b border-gray-200 last:border-b-0"
                      >
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <Plane className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{airport.city}</div>
                          <div className="text-sm text-gray-500">{airport.name} ({airport.iata}) - {airport.country}</div>
                        </div>
                      </button>
                    ))
                  ) : toInput.length >= 2 ? (
                    <div className="p-4 text-gray-500 text-center">No airports found</div>
                  ) : (
                    <div ></div>
                  )}
                </div>
              )}
            </div>

            {/* Travel Date */}
            <div className="relative p-4 border-r border-gray-600 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Travel Date</div>
              <button 
                onClick={() => {
                  closeAllDropdowns();
                  setShowTravelDateCalendar(true);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center"
              >
                {travelDate}
                <Calendar className="w-4 h-4 ml-2" />
              </button>

              {/* Travel Date Calendar */}
              {showTravelDateCalendar && (
                <div className="absolute top-full left-0 z-[2147483647] mt-2">
                  {renderCalendar(false)}
                </div>
              )}
            </div>

            {/* Return Date */}
            {travelType !== "One Way" && (<div className="relative p-4 border-r border-gray-600 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Return Date</div>
              <button 
                onClick={() => {
                  closeAllDropdowns();
                  setShowReturnDateCalendar(true);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center"
              >
                {returnDate}
                <Calendar className="w-4 h-4 ml-2" />
              </button>

              {/* Return Date Calendar */}
              {showReturnDateCalendar && (
                <div className="absolute top-full left-0 z-[2147483647] mt-2">
                  {renderCalendar(true)}
                </div>
              )}
            </div>)}

            {/* Seats & Classes */}
            <div className="relative p-4 border-r border-gray-600 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Seats & Classes</div>
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setShowSeatsDropdown(true);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between"
              >
                {seatsClass}
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>

              {/* Seats Dropdown - Desktop */}
              {showSeatsDropdown && (
                <div className="absolute top-full left-0 z-[2147483647] mt-2 w-64 bg-white text-black rounded-lg shadow-xl border">
                  <div className="p-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                      <select 
                        value={seatsClass}
                        onChange={(e) => setSeatsClass(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {seatClasses.map((seatClass, index) => (
                          <option key={index} value={seatClass}>{seatClass}</option>
                        ))}
                      </select>
                    </div>
                    
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
                  </div>
                </div>
              )}
            </div>

            {/* Travel Type */}
            <div className="relative p-4 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Travel Type</div>
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setShowTravelTypeDropdown(true);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between"
              >
                {travelType}
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>

              {/* Travel Type Dropdown - Desktop */}
              {showTravelTypeDropdown && (
                <div className="relative top-full left-0 z-[2147483647] mt-2 w-48 bg-white text-black rounded-lg shadow-xl border">
                  <div className="p-4 space-y-3">
                    {travelTypes.map((type, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="travelType"
                          value={type.label}
                          checked={travelType === type.label}
                          onChange={() => setTravelType(type.label)}
                          className="w-4 h-4 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-700">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="p-2">
              <button className="w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                <Search className="w-6 h-6 text-orange-500" />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden bg-[#081C3A] rounded-2xl shadow-2xl">
            {/* Row 1: From, Swap, To */}
            <div className="flex items-center relative">
              {/* From Section */}
              <div className="flex-1 relative">
                <div className="p-3 ">
                  <div className="text-xs text-gray-300 mb-1">From</div>
                  {isFromInputMode ? (
                    <input
                      type="text"
                      value={fromInput}
                      onChange={(e) => {
                        setFromInput(e.target.value);
                        setShowFromDropdown(true);
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          if (!selectedFromAirport && fromInput) {
                            setIsFromInputMode(false);
                            setFromInput('');
                          }
                        }, 200);
                      }}
                      placeholder="Search airports..."
                      className="bg-transparent text-white text-left w-full border-none outline-none placeholder-gray-400 text-sm"
                      autoFocus
                    />
                  ) : (
                    <button
                      onClick={() => {
                        closeAllDropdowns();
                        setIsFromInputMode(true);
                        setShowFromDropdown(true);
                      }}
                      className="text-white text-left w-full hover:text-gray-300 transition-colors text-sm truncate"
                    >
                      {selectedFromAirport ? getDisplayText(selectedFromAirport, true) : fromLocation}
                    </button>
                  )}
                </div>

                {/* From Dropdown - Mobile */}
                {showFromDropdown && isFromInputMode && (
                  <div className="absolute top-full left-0 right-0 mt-2 mx-2 sm:mx-3 z-[2147483647]">
                    <div className="bg-white text-black rounded-lg shadow-xl border max-w-sm mx-auto max-h-60 overflow-y-auto">
                      {getFilteredFromAirports().length > 0 ? (
                        getFilteredFromAirports().map((airport, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedFromAirport(airport);
                              setFromLocation(getDisplayText(airport, true));
                              setIsFromInputMode(false);
                              setFromInput('');
                              setShowFromDropdown(false);
                            }}
                            className="w-full p-3 text-left hover:bg-gray-100 transition-colors flex items-center space-x-2 border-b border-gray-200 last:border-b-0"
                          >
                            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <Plane className="w-3 h-3 text-gray-600" />
                            </div>
                            <div className="min-w-0">
                              <div className="font-medium text-gray-900 text-sm truncate">{airport.city}</div>
                              <div className="text-xs text-gray-500 truncate">{airport.name} ({airport.iata}) - {airport.country}</div>
                            </div>
                          </button>
                        ))
                      ) : fromInput.length >= 2 ? (
                        <div className="p-3 text-gray-500 text-center text-sm">No airports found</div>
                      ) : (
                        <div className="p-3 text-gray-500 text-center text-sm">Type at least 2 characters</div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Swap Button */}
              <div className="px-1">
                <button
                  onClick={swapLocations}
                  className="w-8 h-8 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowLeftRight className="w-4 h-4 text-orange-500" />
                </button>
              </div>

              {/* To Section */}
              <div className="flex-1 relative">
                <div className="p-3">
                  <div className="text-xs text-gray-300 mb-1">To</div>
                  {isToInputMode ? (
                    <input
                      type="text"
                      value={toInput}
                      onChange={(e) => {
                        setToInput(e.target.value);
                        setShowToDropdown(true);
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          if (!selectedToAirport && toInput) {
                            setIsToInputMode(false);
                            setToInput('');
                          }
                        }, 200);
                      }}
                      placeholder="Search airports..."
                      className="bg-transparent text-white text-left w-full border-none outline-none placeholder-gray-400 text-sm"
                      autoFocus
                    />
                  ) : (
                    <button
                      onClick={() => {
                        closeAllDropdowns();
                        setIsToInputMode(true);
                        setShowToDropdown(true);
                      }}
                      className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between text-sm"
                    >
                      <span className="truncate">{selectedToAirport ? getDisplayText(selectedToAirport, true) : toLocation}</span>
                      <ChevronDown className="w-3 h-3 ml-1 flex-shrink-0" />
                    </button>
                  )}
                </div>

                {/* To Dropdown - Mobile */}
                {showToDropdown && isToInputMode && (
                  <div className="absolute top-full left-0 right-0 mt-2 mx-2 sm:mx-3 z-[2147483647]">
                    <div className="bg-white text-black rounded-lg shadow-xl border max-w-sm mx-auto max-h-60 overflow-y-auto">
                      {getFilteredToAirports().length > 0 ? (
                        getFilteredToAirports().map((airport, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedToAirport(airport);
                              setToLocation(getDisplayText(airport, true));
                              setIsToInputMode(false);
                              setToInput('');
                              setShowToDropdown(false);
                            }}
                            className="w-full p-3 text-left hover:bg-gray-100 transition-colors flex items-center space-x-2 border-b border-gray-200 last:border-b-0"
                          >
                            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <Plane className="w-3 h-3 text-gray-600" />
                            </div>
                            <div className="min-w-0">
                              <div className="font-medium text-gray-900 text-sm truncate">{airport.city}</div>
                              <div className="text-xs text-gray-500 truncate">{airport.name} ({airport.iata}) - {airport.country}</div>
                            </div>
                          </button>
                        ))
                      ) : toInput.length >= 2 ? (
                        <div className="p-3 text-gray-500 text-center text-sm">No airports found</div>
                      ) : (
                        <div className="p-3 text-gray-500 text-center text-sm">Type at least 2 characters</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Row 2: Travel Date, Return Date */}
            <div className="flex relative">
              <div className="flex-1 p-3 border-r border-gray-600 relative">
                <div className="text-xs text-gray-300 mb-1">Travel Date</div>
                <button 
                  onClick={() => {
                    closeAllDropdowns();
                    setShowTravelDateCalendar(true);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center text-sm"
                >
                  <span className="truncate">{travelDate}</span>
                  <Calendar className="w-3 h-3 ml-1 flex-shrink-0" />
                </button>

                {/* Travel Date Calendar - Mobile */}
                {showTravelDateCalendar && (
                  <div className="absolute top-full left-0 right-0 z-100
                   mt-2 px-1">
                    <div className="flex justify-center">
                      {renderCalendar(false)}
                    </div>
                  </div>
                )}
              </div>
              {travelType !== "One Way" && (
  <div className="flex-1 p-3 relative">
    <div className="text-xs text-gray-300 mb-1">Return Date</div>
    <button 
      onClick={() => {
        closeAllDropdowns();
        setShowReturnDateCalendar(true);
      }}
      className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center text-sm"
    >
      <span className="truncate">{returnDate}</span>
      <Calendar className="w-3 h-3 ml-1 flex-shrink-0" />
    </button>

    {/* Return Date Calendar - Mobile */}
    {showReturnDateCalendar && (
      <div className="absolute top-full left-0 right-0 z-100 mt-2 px-1">
        <div className="flex justify-center">
          {renderCalendar(true)}
        </div>
      </div>
    )}
  </div>
)}

            </div>

            {/* Row 3: Seats & Classes, Travel Type, Search */}
            <div className="flex items-center relative">
              {/* Seats & Classes */}
              <div className="flex-1 p-3 border-r border-gray-600 relative">
                <div className="text-xs text-gray-300 mb-1">Class</div>
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setShowSeatsDropdown(true);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between text-sm"
                >
                  <span className="truncate">{seatsClass}</span>
                  <ChevronDown className="w-3 h-3 ml-1 flex-shrink-0" />
                </button>

                {/* Seats Dropdown - Mobile */}
                {showSeatsDropdown && (
  <div className="absolute top-full left-0 right-0 z-[2147483647] mt-2 px-2 sm:px-4">
    <div className="bg-white text-black rounded-lg shadow-2xl border w-full max-w-3xl mx-auto">
      <div className="p-4 space-y-6 max-h-[70vh] overflow-y-auto">
        {/* Class Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
          <select 
            value={seatsClass}
            onChange={(e) => setSeatsClass(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {seatClasses.map((seatClass, index) => (
              <option key={index} value={seatClass}>{seatClass}</option>
            ))}
          </select>
        </div>

        {/* Passenger Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Adults (12+ Years)", value: adults, setValue: setAdults, min: 1 },
            { label: "Children (2 - 11 Years)", value: children, setValue: setChildren, min: 0 },
            { label: "Infants (0 - 23 Months)", value: infants, setValue: setInfants, min: 0 }
          ].map(({ label, value, setValue, min }, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-700">{label}</span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setValue(Math.max(min, value - 1))}
                  className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <span className="text-lg font-bold">−</span>
                </button>
                <span className="text-center font-medium text-base min-w-[24px]">{value}</span>
                <button
                  onClick={() => setValue(value + 1)}
                  className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <span className="text-lg font-bold">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Done Button */}
        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={() => setShowSeatsDropdown(false)}
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors text-sm font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
)}

              </div>

              {/* Travel Type */}
              <div className="flex-1 p-3 border-r border-gray-600 relative">
                <div className="text-xs text-gray-300 mb-1">Type</div>
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setShowTravelTypeDropdown(true);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between text-sm"
                >
                  <span className="truncate">{travelType}</span>
                  <ChevronDown className="w-3 h-3 ml-1 flex-shrink-0" />
                </button>

                {/* Travel Type Dropdown - Mobile */}
                {showTravelTypeDropdown && (
                  <div className="absolute top-full left-0 right-0 z-[2147483647] mt-2 mx-2 sm:mx-3">
                    <div className="bg-white text-black rounded-lg shadow-xl border max-w-xs mx-auto">
                      <div className="p-3 sm:p-4 space-y-3">
                        {travelTypes.map((type, index) => (
                          <label key={index} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="travelTypeMobile"
                              value={type.label}
                              checked={travelType === type.label}
                              onChange={() => {
                                setTravelType(type.label);
                                setShowTravelTypeDropdown(false);
                              }}
                              className="w-4 h-4 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm font-medium text-gray-700">{type.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="p-3">
                <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop to close dropdowns when clicking outside */}
      {(showFromDropdown || showToDropdown || showSeatsDropdown || showTravelTypeDropdown || showTravelDateCalendar || showReturnDateCalendar) && (
        <div 
          className="fixed inset-0 z-[2147483646] bg-black/20 sm:bg-transparent"
          onClick={closeAllDropdowns}
        />
      )}
    </div>
  );
};

export default FlightSearchComponent;