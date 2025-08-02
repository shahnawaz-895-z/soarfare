import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const FlightSearchForm = () => {
  return (
    <div className="bg-[#0C2545] rounded-lg p-4 w-full">
      <div className="flex flex-col md:flex-row items-end gap-4">
        {/* To Destination */}
        <div className="w-full md:w-40">
          <label className="text-white text-sm font-medium block mb-1">To</label>
          <div className="relative">
            <Select>
              <SelectTrigger className="border-gray-300 bg-white pl-3 pr-8 py-2 w-full text-left">
                <SelectValue placeholder="Destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nyc">New York</SelectItem>
                <SelectItem value="lax">Los Angeles</SelectItem>
                <SelectItem value="chi">Chicago</SelectItem>
              </SelectContent>
            </Select>
            <span className="absolute right-2 top-2.5 text-gray-500 pointer-events-none">v</span>
          </div>
        </div>

        {/* Travel Date */}
        <div className="w-full md:w-40">
          <label className="text-white text-sm font-medium block mb-1">Travel Date</label>
          <div className="relative">
            <Input
              className="border-gray-300 bg-white pl-3 pr-8 py-2 w-full"
              placeholder="mm/dd/yyyy"
            />
            <span className="absolute right-2 top-2.5 text-gray-500">©</span>
          </div>
        </div>

        {/* Return Date */}
        <div className="w-full md:w-40">
          <label className="text-white text-sm font-medium block mb-1">Return Date</label>
          <div className="relative">
            <Input
              className="border-gray-300 bg-white pl-3 pr-8 py-2 w-full"
              placeholder="mm/dd/yyyy"
            />
            <span className="absolute right-2 top-2.5 text-gray-500">口</span>
          </div>
        </div>

        {/* Seats & Classes */}
        <div className="w-full md:w-40">
          <label className="text-white text-sm font-medium block mb-1">Seats & Classes</label>
          <div className="relative">
            <Select>
              <SelectTrigger className="border-gray-300 bg-white pl-3 pr-8 py-2 w-full text-left">
                <SelectValue placeholder="Economy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="first">First Class</SelectItem>
              </SelectContent>
            </Select>
            <span className="absolute right-2 top-2.5 text-gray-500 pointer-events-none">¥</span>
          </div>
        </div>

        {/* Travel Type */}
        <div className="w-full md:w-40">
          <label className="text-white text-sm font-medium block mb-1">Travel Type</label>
          <div className="relative">
            <Select>
              <SelectTrigger className="border-gray-300 bg-white pl-3 pr-8 py-2 w-full text-left">
                <SelectValue placeholder="One Way" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="oneway">One Way</SelectItem>
                <SelectItem value="roundtrip">Round Trip</SelectItem>
              </SelectContent>
            </Select>
            <span className="absolute right-2 top-2.5 text-gray-500 pointer-events-none">~</span>
          </div>
        </div>

       {/* Search Button */}
<div className="w-full md:w-auto">
  <button className="bg-white hover:bg-gray-100 text-orange-500 border border-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out">
    <Search className="w-5 h-5" />
  </button>
</div>
      </div>
    </div>
  );
};

export default FlightSearchForm;