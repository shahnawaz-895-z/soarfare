import { useState } from "react";

const faqData = [
  {
    question: "How Do I Get A SoarFare Dashboard?",
    answer:
      "Simply register for an account. A subscription isn't required to access your dashboard.",
  },
  {
    question: "Can I Upload A Picture To My Dashboard?",
    answer:
      "Yes! Head to “Account Info” in your dashboard and upload your photo.",
  },
  {
    question: "What If I Need A Receipt For My Subscription?",
    answer:
      'Log in to your dashboard and click “My Invoices” to view your payment history.',
  },
  {
    question: "What If I Need A Receipt For My Subscription?",
    answer:
      'Log in to your dashboard and click “My Invoices” to view your payment history.',
  },
  {
    question: "Can I book a flight from my user Dashboard?",
    answer:
      "Log in to your SoarFare Dashboard, enter your travel details, and search. You’ll see available flights and point values—just choose what works best for you and book!",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-6 px-8 w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-blue-400 font-semibold tracking-wide uppercase mb-1">
            FAQ’s
          </p>
          <h1 className="text-3xl font-bold font-poppins text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 transition-all duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex justify-between items-center w-full text-left group"
                >
                  <span className="text-base font-bold font-poppins text-[#0C2545]">
                    {item.question}
                  </span>
                  <span className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-300 rounded-full font-poppins text-[#0C2545] group-hover:bg-gray-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Animated Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-[16px] text-[#0C2545] font-poppins leading-relaxed pr-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
