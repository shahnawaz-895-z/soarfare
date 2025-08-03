import { Link } from "react-router-dom";
const Whysoarfare3 = () => {
  return (
    <div className="relative w-[97%] sm:w-3/4 max-w-screen-xl mx-auto mb-4 rounded-2xl sm:rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[350px]">
      {/* Background Image with Overlay inside constrained width */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <img
            src="/Rectangle 3 (1).png"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      <div className="relative z-10 pt-8 sm:pt-12 lg:pt-16 pb-6">
        <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-4 h-full text-white">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col gap-y-3 sm:gap-y-4 justify-start text-center sm:text-left ml-2 sm:ml-6">
  <h2 className="text-sm sm:text-sm lg:text-sm font-poppins">
  Contact Us
  </h2>
  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold">
     We are , <br />Always Ready, <br />To Help You
  </h3>
  <div className="flex justify-center sm:justify-start">
    <Link to="/login">
      <button className="mt-2 bg-orange-500 text-white font-light font-poppins text-sm px-4 sm:px-5 py-2 rounded-md hover:bg-white hover:text-orange-500 transition w-fit">
        Subscribe Now
      </button>
    </Link>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Whysoarfare3;