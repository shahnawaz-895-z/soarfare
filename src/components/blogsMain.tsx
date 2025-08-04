"use client";
import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogMainSection() {
  const [blogs, setBlogs] = useState([]);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/api/blog");
        const data = await res.json();
        setBlogs(data.blogs.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();

    // Removed pagination and responsive items per page logic
  }, []);

  // Show all blogs without pagination

  return (
    <section className="bg-white py-12 px-4 w-full">
     
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <img
                src={`/api${blog.image}`}
                alt={blog.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-3 left-5 bg-white p-1 rounded-full shadow-md">
                <svg width="20" height="20" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97-4.685-8-7.673-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3.327-3.03 6.315-8 11z" />
                </svg>
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <div className="text-sm text-gray-500 mb-1">
                <span className="text-yellow-400 font-barlow">★★★★★</span> (6k+ Rating)
              </div>

              <h3 className="text-lg font-semibold font-barlow text-gray-800 mb-2">{blog.title}</h3>

              <p className="text-sm font-barlow text-gray-500 mb-4 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod.
              </p>

              <div className="mt-auto pt-3 border-t">
                <div className="flex justify-between items-center text-sm font-barlow text-gray-600">
                  <Link 
                    to={`/blog/${encodeURIComponent(blog.slug)}`} 
                    className="text-blue-500 font-medium hover:underline flex items-center gap-1"
                  >
                    Read More →
                  </Link>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{new Date(blog.created_at).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </section>
  );
}
