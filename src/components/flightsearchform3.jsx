import React, { useState } from 'react';
import { ArrowLeftRight, Search, MapPin, Plane, ChevronDown, Calendar, ChevronLeft, ChevronRight, User, Tag } from 'lucide-react';

// Mock airports data since we don't have the actual data
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
  const [travelType, setTravelType] = useState('One Way');
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
    ).slice(0, 10);
  };

  const getFilteredFromAirports = () => filterAirports(fromInput);
  const getFilteredToAirports = () => filterAirports(toInput);

  const getDisplayText = (airport, isSelected = false) => {
    if (!airport) return '';
    return isSelected ? airport.city : `${airport.city} (${airport.iata})`;
  };

  const seatClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];
  const travelTypes = [
    { id: 'oneway', label: 'One Way' },
    { id: 'roundtrip', label: 'Round Trip' },
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
    const tempFromAirport = selectedFromAirport;
    const tempToAirport = selectedToAirport;
    setSelectedFromAirport(tempToAirport);
    setSelectedToAirport(tempFromAirport);
    
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
    
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

  const getTotalPassengers = () => {
    return adults + children + infants;
  };

  const getPassengerText = () => {
    const total = getTotalPassengers();
    if (total === 1) return '1 Adult';
    return `${total} Passengers`;
  };

  const renderCalendar = (isReturnDate = false) => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

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
      <div className="bg-white text-black rounded-lg shadow-xl border p-3 sm:p-4 w-[320px] sm:w-96 max-w-[calc(100vw-1rem)]">
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

        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="p-1 sm:p-2 text-center text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-4 relative">
      <div className="w-full">
        {/* Top Controls */}
        <div className="flex flex-wrap items-center justify-start gap-4 mb-6 text-white">
          {/* Travel Type */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeAllDropdowns();
                setShowTravelTypeDropdown(!showTravelTypeDropdown);
              }}
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
            >
              <Plane className="w-5 h-5" />
              <span className="text-sm font-medium">{travelType}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showTravelTypeDropdown && (
              <div className="absolute top-full left-0 z-50 mt-2 w-48 bg-white text-black rounded-lg shadow-xl border">
                <div className="p-4 space-y-3">
                  {travelTypes.map((type, index) => (
                    <label key={index} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="travelType"
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
            )}
          </div>

          {/* Passengers */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeAllDropdowns();
                setShowSeatsDropdown(!showSeatsDropdown);
              }}
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">{getPassengerText()}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showSeatsDropdown && (
              <div className="absolute top-full left-0 z-50 mt-2 w-80 bg-white text-black rounded-lg shadow-xl border">
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

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setShowSeatsDropdown(false)}
                      className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors text-sm font-medium"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Class */}
          <div className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
            <Tag className="w-5 h-5" />
            <span className="text-sm font-medium">{seatsClass}</span>
          </div>
        </div>

        {/* Main Search Container */}
        <div className="bg-transparent rounded-2xl ">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center">
            {/* From Section */}
            <div className="relative flex-1 border-r border-blue-700">
              <div className="p-6">
                <div className="text-sm text-white mb-2 font-medium font-poppins">From</div>
                {isFromInputMode ? (
                  <input
                    type="text"
                    value={fromInput}
                    onChange={(e) => {
                      setFromInput(e.target.value);
                      setShowFromDropdown(true);
                    }}
                    onBlur={(e) => {
                      // Only close if clicking outside the dropdown
                      if (!e.relatedTarget || !e.relatedTarget.closest('.airport-dropdown')) {
                        setTimeout(() => {
                          if (!selectedFromAirport && fromInput) {
                            setIsFromInputMode(false);
                            setFromInput('');
                          }
                          setShowFromDropdown(false);
                        }, 150);
                      }
                    }}
                    placeholder="Search airports, cities..."
                    className="bg-transparent text-white text-left w-full border-none outline-none placeholder-blue-300 text-lg font-medium"
                    autoFocus
                  />
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeAllDropdowns();
                      setIsFromInputMode(true);
                      setShowFromDropdown(true);
                    }}
                    className="text-white text-left w-full hover:text-blue-200 transition-colors flex items-center justify-between text-lg font-medium font-barlow"
                  >
                    <span>{selectedFromAirport ? getDisplayText(selectedFromAirport, true) : fromLocation}</span>
                    <ChevronDown className="w-5 h-5 ml-2 text-blue-300" />
                  </button>
                )}
              </div>
              
              {showFromDropdown && (
                <div className="airport-dropdown absolute top-full left-0 z-50 mt-2 w-80 xl:w-96 bg-white text-black rounded-lg shadow-xl border max-h-60 overflow-y-auto">
                  {isFromInputMode && getFilteredFromAirports().length > 0 ? (
                    getFilteredFromAirports().map((airport, index) => (
                      <button
                        key={index}
                        onMouseDown={(e) => e.preventDefault()} // Prevent blur
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
                  ) : isFromInputMode && fromInput.length >= 1 ? (
                    <div className="p-4 text-gray-500 text-center">No airports found</div>
                  ) : (
                    !isFromInputMode && (
                      <div className="p-4 text-gray-500 text-center">Start typing to search airports</div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Swap Button */}
            <div className="px-4">
              <button
                onClick={swapLocations}
                className="w-10 h-10 bg-white hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ArrowLeftRight className="w-5 h-5 text-orange-500 hover:text-white" />
              </button>
            </div>

            {/* To Section */}
            <div className="relative flex-1 border-r border-blue-700">
              <div className="p-6">
                <div className="text-sm text-white mb-2 font-medium">To</div>
                {isToInputMode ? (
                  <input
                    type="text"
                    value={toInput}
                    onChange={(e) => {
                      setToInput(e.target.value);
                      setShowToDropdown(true);
                    }}
                    onBlur={(e) => {
                      if (!e.relatedTarget || !e.relatedTarget.closest('.airport-dropdown')) {
                        setTimeout(() => {
                          if (!selectedToAirport && toInput) {
                            setIsToInputMode(false);
                            setToInput('');
                          }
                          setShowToDropdown(false);
                        }, 150);
                      }
                    }}
                    placeholder="Search airports, cities..."
                    className="bg-transparent text-white text-left w-full border-none outline-none placeholder-blue-300 text-lg font-medium"
                    autoFocus
                  />
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeAllDropdowns();
                      setIsToInputMode(true);
                      setShowToDropdown(true);
                    }}
                    className="text-white text-left w-full hover:text-blue-200 transition-colors flex items-center justify-between text-lg font-medium font-barlow"
                  >
                    <span>{selectedToAirport ? getDisplayText(selectedToAirport, true) : toLocation}</span>
                    <ChevronDown className="w-5 h-5 ml-2 text-blue-300" />
                  </button>
                )}
              </div>

              {showToDropdown && (
                <div className="airport-dropdown absolute top-full left-0 mt-2 w-80 xl:w-96 bg-white text-black rounded-lg shadow-xl border max-h-60 overflow-y-auto z-50">
                  {isToInputMode && getFilteredToAirports().length > 0 ? (
                    getFilteredToAirports().map((airport, index) => (
                      <button
                        key={index}
                        onMouseDown={(e) => e.preventDefault()}
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
                  ) : isToInputMode && toInput.length >= 1 ? (
                    <div className="p-4 text-gray-500 text-center">No airports found</div>
                  ) : (
                    !isToInputMode && (
                      <div className="p-4 text-gray-500 text-center">Start typing to search airports</div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Travel Date */}
            <div className="relative p-6 border-r border-blue-700 min-w-48">
              <div className="text-sm text-white mb-2 font-medium font-poppins">Travel Date</div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeAllDropdowns();
                  setShowTravelDateCalendar(!showTravelDateCalendar);
                }}
                className="text-white text-left w-full hover:text-blue-200 transition-colors flex items-center justify-between text-lg font-medium font-barlow"
              >
                <span>{travelDate}</span>
                <Calendar className="w-5 h-5 ml-2 text-blue-300" />
              </button>

              {showTravelDateCalendar && (
                <div className="absolute top-full left-0 z-50 mt-2">
                  {renderCalendar(false)}
                </div>
              )}
            </div>

            {/* Return Date */}
            {travelType !== "One Way" && (
              <div className="relative p-6 border-r border-blue-700 min-w-48">
                <div className="text-sm text-white mb-2 font-medium font-poppins">Return Date</div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    closeAllDropdowns();
                    setShowReturnDateCalendar(!showReturnDateCalendar);
                  }}
                  className="text-white text-left w-full hover:text-blue-200 transition-colors flex items-center justify-between text-lg font-medium font-barlow"
                >
                  <span>{returnDate}</span>
                  <Calendar className="w-5 h-5 ml-2 text-blue-300" />
                </button>

                {showReturnDateCalendar && (
                  <div className="absolute top-full left-0 z-50 mt-2">
                    {renderCalendar(true)}
                  </div>
                )}
              </div>
            )}

            {/* Search Button */}
            <div className="p-6">
              <button className="w-12 h-12 bg-white hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Search className="w-6 h-6 text-orange-500 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Row 1: From, Swap, To */}
            <div className="flex items-center relative">
              <div className="flex-1 relative">
                <div className="p-4">
                  <div className="text-xs text-blue-200 mb-1 font-medium font-poppins">From</div>
                  {isFromInputMode ? (
                    <input
                      type="text"
                      value={fromInput}
                      onChange={(e) => {
                        setFromInput(e.target.value);
                        setShowFromDropdown(true);
                      }}
                      onBlur={(e) => {
                        if (!e.relatedTarget || !e.relatedTarget.closest('.airport-dropdown')) {
                          setTimeout(() => {
                            if (!selectedFromAirport && fromInput) {
                              setIsFromInputMode(false);
                              setFromInput('');
                            }
                            setShowFromDropdown(false);
                          }, 150);
                        }
                      }}
                      placeholder="Search airports..."
                      className="bg-transparent text-white text-left w-full border-none outline-none placeholder-blue-300 text-sm font-medium"
                      autoFocus
                    />
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeAllDropdowns();
                        setIsFromInputMode(true);
                        setShowFromDropdown(true);
                      }}
                      className="text-white text-left w-full hover:text-blue-200 transition-colors text-sm font-medium font-barlow truncate flex items-center justify-between"
                    >
                      <span className="truncate">{selectedFromAirport ? getDisplayText(selectedFromAirport, true) : fromLocation}</span>
                      <ChevronDown className="w-4 h-4 ml-1 text-blue-300 flex-shrink-0" />
                    </button>
                  )}
                </div>

                {showFromDropdown && (
                  <div className="airport-dropdown absolute top-full left-0 right-0 mt-2 mx-2 z-50">
                    <div className="bg-white text-black rounded-lg shadow-xl border max-w-sm mx-auto max-h-60 overflow-y-auto">
                      {isFromInputMode && getFilteredFromAirports().length > 0 ? (
                        getFilteredFromAirports().map((airport, index) => (
                          <button
                            key={index}
                            onMouseDown={(e) => e.preventDefault()}
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
                      ) : isFromInputMode && fromInput.length >= 1 ? (
                        <div className="p-3 text-gray-500 text-center text-sm">No airports found</div>
                      ) : (
                        !isFromInputMode && (
                          <div className="p-3 text-gray-500 text-center text-sm">Start typing to search</div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="px-2">
                <button
                  onClick={swapLocations}
                  className="w-8 h-8 bg-white hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowLeftRight className="w-4 h-4 text-orange-500 hover:text-white" />
                </button>
              </div>

              <div className="flex-1 relative">
                <div className="p-4">
                  <div className="text-xs text-blue-200 mb-1 font-medium">To</div>
                  {isToInputMode ? (
                    <input
                      type="text"
                      value={toInput}
                      onChange={(e) => {
                        setToInput(e.target.value);
                        setShowToDropdown(true);
                      }}
                      onBlur={(e) => {
                        if (!e.relatedTarget || !e.relatedTarget.closest('.airport-dropdown')) {
                          setTimeout(() => {
                            if (!selectedToAirport && toInput) {
                              setIsToInputMode(false);
                              setToInput('');
                            }
                            setShowToDropdown(false);
                          }, 150);
                        }
                      }}
                      placeholder="Search airports..."
                      className="bg-transparent text-white text-left w-full border-none outline-none placeholder-blue-300 text-sm font-medium"
                      autoFocus
                    />
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeAllDropdowns();
                        setIsToInputMode(true);
                        setShowToDropdown(true);
                      }}
                      className="text-white text-left w-full hover:text-blue-200 transition-colors text-sm font-medium flex items-center justify-between font-barlow"
                    >
                      <span className="truncate">{selectedToAirport ? getDisplayText(selectedToAirport, true) : toLocation}</span>
                      <ChevronDown className="w-4 h-4 ml-1 text-blue-300 flex-shrink-0" />
                    </button>
                  )}
                </div>

                {showToDropdown && (
                  <div className="airport-dropdown absolute top-full left-0 right-0 mt-2 mx-2 z-50">
                    <div className="bg-white text-black rounded-lg shadow-xl border max-w-sm mx-auto max-h-60 overflow-y-auto">
                      {isToInputMode && getFilteredToAirports().length > 0 ? (
                        getFilteredToAirports().map((airport, index) => (
                          <button
                            key={index}
                            onMouseDown={(e) => e.preventDefault()}
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
                      ) : isToInputMode && toInput.length >= 1 ? (
                        <div className="p-3 text-gray-500 text-center text-sm">No airports found</div>
                      ) : (
                        !isToInputMode && (
                          <div className="p-3 text-gray-500 text-center text-sm">Start typing to search</div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Row 2: Travel Date, Return Date */}
            <div className="flex relative border-t border-blue-700">
              <div className="flex-1 p-4 border-r border-blue-700 relative">
                <div className="text-xs text-white mb-1 font-medium font-poppins">Travel Date</div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    closeAllDropdowns();
                    setShowTravelDateCalendar(!showTravelDateCalendar);
                  }}
                  className="text-white text-left w-full hover:text-blue-200 transition-colors flex items-center text-sm font-medium"
                >
                  <span className="truncate">{travelDate}</span>
                  <Calendar className="w-4 h-4 ml-1 text-blue-300 flex-shrink-0" />
                </button>

                {showTravelDateCalendar && (
                  <div className="absolute top-full left-0 right-0 z-50 mt-2 px-1">
                    <div className="flex justify-center">
                      {renderCalendar(false)}
                    </div>
                  </div>
                )}
              </div>
              
              {travelType !== "One Way" && (
                <div className="flex-1 p-4 relative">
                  <div className="text-xs text-White mb-1 font-medium font-poppins">Return Date</div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      closeAllDropdowns();
                      setShowReturnDateCalendar(!showReturnDateCalendar);
                    }}
                    className="text-white text-left w-full hover:text-blue-200 transition-colors flex items-center text-sm font-medium font-barlow"
                  >
                    <span className="truncate">{returnDate}</span>
                    <Calendar className="w-4 h-4 ml-1 text-blue-300 flex-shrink-0" />
                  </button>

                  {showReturnDateCalendar && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-2 px-1">
                      <div className="flex justify-center">
                        {renderCalendar(true)}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Row 3: Search Button */}
            <div className="flex justify-center p-4 border-t border-blue-700">
              <button className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                <Search className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop to close dropdowns when clicking outside */}
      {(showFromDropdown || showToDropdown || showSeatsDropdown || showTravelTypeDropdown || showTravelDateCalendar || showReturnDateCalendar) && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 sm:bg-transparent"
          onClick={closeAllDropdowns}
        />
      )}
    </div>
  );
};

export default FlightSearchComponent;