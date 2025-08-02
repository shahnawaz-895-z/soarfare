import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FAQCategory {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category_id: number;
  status: number;
  sort_order: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface GroupedFAQ {
  [key: string]: FAQItem[];
}

const SoarFareFAQ = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('');
  const [categories, setCategories] = useState<FAQCategory[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [groupedFaqs, setGroupedFaqs] = useState<GroupedFAQ>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch FAQ categories
        const categoriesResponse = await axios.get('/api/api/faqcats');
        const validCategories = categoriesResponse.data.faqcats.filter(
          (cat: FAQCategory) => cat.deleted_at === null
        );
        setCategories(validCategories);
        
        // Fetch FAQ items
        const faqsResponse = await axios.get('/api/api/faqs');
        const validFaqs = faqsResponse.data.faqs.filter(
          (faq: FAQItem) => faq.status === 1 && faq.deleted_at === null
        );
        setFaqs(validFaqs);
        
        // Group FAQs by category name
        const grouped: GroupedFAQ = {};
        validCategories.forEach(category => {
          const categoryFaqs = validFaqs
            .filter(faq => faq.category_id === category.id)
            .sort((a, b) => (a.sort_order || 999) - (b.sort_order || 999));
          grouped[category.name] = categoryFaqs;
        });
        
        setGroupedFaqs(grouped);
        
        // Set active tab to the first category
        if (validCategories.length > 0) {
          setActiveTab(validCategories[0].name);
        }
      } catch (err) {
        setError('Failed to load FAQ data. Please try again later.');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  if (loading) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-10 sm:py-16 bg-white min-h-screen flex justify-center items-center">
        <div className="text-center">
          <p className="text-[#0C2545] font-barlow text-lg">Loading FAQs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-10 sm:py-16 bg-white min-h-screen flex justify-center items-center">
        <div className="text-center">
          <p className="text-red-500 font-barlow text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-10 sm:py-16 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-4xl sm:text-5xl font-poppins font-semibold text-[#0C2545] mb-4">
          FAQ'S
        </h1>
        <p className="text-[#0C2545] font-barlow text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          SoarFare is great for those who love to travel and want to always be building up points for their next adventure.
        </p>
      </div>

      {/* Tabs */}
      {categories.length > 0 && (
        <div className="flex justify-center mb-8 sm:mb-10 px-2">
          <div className="bg-orange-500 rounded-xl p-1 w-full sm:w-auto overflow-x-auto">
            <div className="flex min-w-max sm:min-w-0">
              <div className="flex flex-wrap justify-center items-center gap-2 overflow-hidden w-full">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveTab(category.name);
                      setExpandedItem(null);
                    }}
                    className={`px-4 sm:px-6 py-2 rounded-xl text-sm font-poppins transition-colors whitespace-nowrap ${
                      activeTab === category.name ? 'bg-white text-black' : 'text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Items */}
      <div className="space-y-2">
        {groupedFaqs[activeTab]?.length > 0 ? (
          groupedFaqs[activeTab].map((item, index) => (
            <div key={item.id} className="bg-white border-b border-[#081C3A] transition-all duration-300">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-[#081C3A] font-poppins font-medium text-base sm:text-lg pr-4 leading-snug">
                  {item.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <span className="text-[#081C3A] text-lg font-bold">
                    {expandedItem === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              <div
                className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
                  expandedItem === index ? 'max-h-screen opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
                }`}
              >
                <div 
                  className="text-[#0C2545] font-poppins text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.answer }} 
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-[#0C2545] font-barlow text-lg">
              {activeTab ? `No FAQs available for ${activeTab}` : 'No FAQs available'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoarFareFAQ;