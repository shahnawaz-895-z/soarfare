import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogMainSection from '@/components/blogsMain';
import Navigation from '@/components/Navigation';

const BlogMainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation />
      </div>
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">Latest updates, news, and insights</p>
        </div>
        
        <BlogMainSection />
      </main>
      
    </div>
  );
};

export default BlogMainPage;
