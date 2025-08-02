import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TestimonialCard() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get('/api/api/testimonials')
      .then((res) => {
        if (res.data && res.data.testimonials && res.data.testimonials.length > 0) {
          setTestimonials(res.data.testimonials);
        }
      })
      .catch((err) => console.error('Failed to fetch testimonials:', err));
  }, []);

  const testimonial = testimonials[current];

  return (
    <section
      className="w-full py-6 px-6 flex justify-center items-center font-poppins"
      style={{
        background: 'linear-gradient(180deg, #0C2442 0%, #142C4B 100%)',
      }}
    >
      <div
        className="bg-[#081C3A] max-w-6xl w-full flex flex-col md:flex-row rounded-3xl overflow-hidden text-white"
        style={{
          background: 'linear-gradient(180deg, #0C2442 0%, #142C4B 100%)',
        }}
      >
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 h-[430px] relative">
          <img
            src="/image 26.png"
            alt="Happy Customers"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <p className="text-sm text-[#85A9D0] font-semibold uppercase mb-1">
              Testimonial
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              What Our Customer Say Us
            </h2>
            <p className="text-sm font-semibold mb-2">Most Attractive Packages!</p>

            <div className="flex space-x-1 text-[#FEC84B] mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-6 leading-relaxed font-barlow">
              {testimonial ? testimonial.content : 'Loading...'}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center">
                <img
                  src={
                    testimonial
                      ? `/api${testimonial.image}`
                      : '/default-avatar.png'
                  }
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">
                  {testimonial ? testimonial.title : '...'}
                </p>
                <p className="text-xs text-gray-400">Guest Review</p>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="text-[#6DB1FF] text-3xl font-bold">
              {/* SVG remains unchanged */}
              <svg
                width="60"
                height="60"
                viewBox="0 0 85 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.6107 7.28906H10.1801C7.48111 7.28906 5.18743 8.23368 3.298 10.1224C1.40947 12.0115 0.464844 14.3052 0.464844 17.0044V36.4341C0.464844 39.1331 1.40894 41.4265 3.298 43.3152C5.18725 45.2038 7.48165 46.1487 10.1801 46.1487H21.5144C22.8633 46.1487 24.0104 46.6212 24.9551 47.5655C25.8996 48.5092 26.3718 49.6568 26.3718 51.0067V52.625C26.3718 56.2009 25.1065 59.2528 22.5769 61.7832C20.0469 64.3124 16.9943 65.5775 13.4181 65.5775H10.1801C9.30248 65.5775 8.54378 65.8988 7.90256 66.5393C7.26188 67.1799 6.94128 67.939 6.94128 68.8161V75.2937C6.94128 76.1693 7.26188 76.9301 7.90256 77.5707C8.5443 78.211 9.30231 78.5325 10.1801 78.5325H13.4183C16.9269 78.5325 20.2749 77.8484 23.4628 76.4827C26.6507 75.1167 29.4081 73.2694 31.7358 70.9417C34.063 68.6138 35.9101 65.8568 37.2761 62.6688C38.642 59.481 39.3252 56.1333 39.3252 52.6252V17.0036C39.3252 14.3044 38.3806 12.0109 36.4918 10.1222C34.6031 8.2335 32.309 7.28906 29.6107 7.28906Z"
                  fill="#85C1E9"
                />
                <path
                  d="M81.8301 10.1224C79.9416 8.23368 77.6477 7.28906 74.9486 7.28906H55.5188C52.8199 7.28906 50.5261 8.23368 48.6374 10.1224C46.7488 12.0117 45.8047 14.3052 45.8047 17.0044V36.4341C45.8047 39.1331 46.7488 41.4265 48.6374 43.3152C50.5261 45.2038 52.82 46.1487 55.5188 46.1487H66.8531C68.202 46.1487 69.35 46.6212 70.2946 47.5655C71.2381 48.5098 71.7112 49.6568 71.7112 51.0067V52.625C71.7112 56.2009 70.446 59.2528 67.9157 61.7832C65.386 64.3124 62.3342 65.5775 58.7575 65.5775H55.5188C54.642 65.5775 53.8825 65.8988 53.242 66.5393C52.601 67.1799 52.28 67.939 52.28 68.8161V75.2937C52.28 76.1693 52.601 76.9301 53.242 77.5707C53.8823 78.211 54.6417 78.5325 55.5188 78.5325H58.7575C62.2656 78.5325 65.6134 77.8484 68.8017 76.4827C71.989 75.1167 74.7461 73.2694 77.074 70.9417C79.4017 68.6138 81.2498 65.856 82.6151 62.6688C83.9807 59.4818 84.6643 56.1333 84.6643 52.6252V17.0036C84.6638 14.3044 83.72 12.0109 81.8301 10.1224Z"
                  fill="#85C1E9"
                />
              </svg>
            </div>
          </div>
      {/* Navigation Dots */}
      <div className="mt-6 flex space-x-2 justify-left">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-[#6DB1FF] border-[#6DB1FF]' : 'bg-white border-[#6DB1FF]'} transition`}
            onClick={() => setCurrent(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
        </div>
      </div>
      </div>
    </section>
  );
}
