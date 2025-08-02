import { Check, CheckCircle } from "lucide-react";

const MiddleComponent = () => {
  return (
    <section className="w-full py-16 px-6 bg-white flex justify-center">
      <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl font-poppins font-semibold text-[#0C2545] leading-snug">
            Your Journey Starts Here <br />
            <span className="text-[#0C2545]">Easy as Save, Book, Fly!</span>
          </h2>

          {/* Checkpoints */}
          <ul className="flex flex-col gap-4 mt-4">
            {[
              "Pick your monthly budget by selecting a subscription plan.",
              "Watch your points grow each month.",
              "When you are ready to book a flight, log in to your account and search for your preferred flight.",
              "Use the points you have saved to book!",
              "If you haven't saved up quite enough points when you're ready to book, you can add what you need right then through instant points!",
              "You can raise, lower, or freeze your plan at any time.",
              "If you want to gift or transfer points, You can send any points you have to any other SoarFare user at no additional cost.",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="min-w-[36px] min-h-[36px] bg-white border-2 border-grey-300 rounded-full flex items-center justify-center shadow-sm">
                  <svg width="15" height="15" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.89632 13.704C4.42038 13.7053 3.95454 13.8413 3.55271 14.0964C3.15088 14.3514 2.82946 14.715 2.62563 15.1451C2.42182 15.5752 2.34393 16.0542 2.40099 16.5267C2.45806 16.9992 2.64774 17.4459 2.94807 17.8151L9.35066 25.6583C9.57894 25.9418 9.87156 26.1666 10.2042 26.3143C10.5369 26.4619 10.9 26.5281 11.2633 26.5072C12.0404 26.4655 12.7421 26.0498 13.1894 25.3662L26.4892 3.94697C26.4914 3.94342 26.4937 3.93987 26.496 3.93637C26.6208 3.74477 26.5803 3.36506 26.3227 3.12652C26.2519 3.06101 26.1685 3.01069 26.0776 2.97864C25.9866 2.94659 25.8901 2.9335 25.7939 2.94017C25.6978 2.94685 25.6039 2.97314 25.5183 3.01743C25.4326 3.06173 25.357 3.1231 25.2959 3.19774C25.2911 3.20361 25.2862 3.20939 25.2811 3.21508L11.8682 18.3698C11.8171 18.4274 11.7551 18.4744 11.6858 18.5079C11.6164 18.5414 11.5411 18.5608 11.4642 18.565C11.3874 18.5691 11.3104 18.558 11.2378 18.5321C11.1653 18.5063 11.0986 18.4663 11.0416 18.4145L6.59012 14.3636C6.12779 13.9398 5.52351 13.7045 4.89632 13.704Z" fill="#10B981"/>
</svg>

                </div>
                <span className="text-[#0C2545] text-sm font-poppins font-medium leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-[360px] h-[450px] rounded-2xl overflow-hidden mt-10">
  <img
    src="/Screenshot 2025-07-27 011047.png"
    alt="Flight booking visual"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>

      </div>
    </section>
  );
};

export default MiddleComponent;
