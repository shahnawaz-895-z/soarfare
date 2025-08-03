// "use client";
// import { useState, useEffect } from "react";
// import { CalendarDays } from "lucide-react";

// const blogs = [
//   {
//     title: "Maldives Tour Guide",
//     img: "/place.png",
//     rating: "6k+ Rating",
//     date: "25 Oct 2024",
//   },
//   {
//     title: "Top 5 Cheap Travel Locations",
//     img: "/Link.png",
//     rating: "6k+ Rating",
//     date: "25 Oct 2024",
//   },
//   {
//     title: "Mykonos And Santorini Tour",
//     img: "/image 12.png",
//     rating: "6k+ Rating",
//     date: "25 Oct 2024",
//   },
//   {
//     title: "Tropical Paradise Tips",
//     img: "/place.png",
//     rating: "6k+ Rating",
//     date: "25 Oct 2024",
//   },
//   {
//     title: "Budget Getaways 2024",
//     img: "/Link.png",
//     rating: "6k+ Rating",
//     date: "25 Oct 2024",
//   },
//   {
//     title: "Best Greek Islands",
//     img: "/image 12.png",
//     rating: "6k+ Rating",
//     date: "25 Oct 2024",
//   },
//   {
//     title: "Exploring Asia",
//     img: "/place.png",
//     rating: "6k+ Rating",
//     date: "25 Oct 2024",
//   },
//   {
//     title: "Affordable Europe Travel",
//     img: "/Link.png",
//     rating: "6k+ Rating",
//     date: "25 Oct 2024",
//   },
//   {
//     title: "Luxury Tours for Less",
//     img: "/image 12.png",
//     rating: "6k+ Rating",
//     date: "25 Oct 2024",
//   },
// ];

// export default function BlogSection() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(3);

//   useEffect(() => {
//     const updateItemsPerPage = () => {
//       setItemsPerPage(window.innerWidth < 640 ? 1 : 3);
//     };

//     updateItemsPerPage();
//     window.addEventListener("resize", updateItemsPerPage);
//     return () => window.removeEventListener("resize", updateItemsPerPage);
//   }, []);

//   const totalPages = Math.ceil(blogs.length / itemsPerPage);
//   const start = currentPage * itemsPerPage;
//   const visibleBlogs = blogs.slice(start, start + itemsPerPage);

//   return (
//     <section className="bg-white py-12 px-4 w-full">
//       <div className="text-center mb-10">
//         <p className="text-sm font-poppins text-blue-400 font-semibold mb-1">Blogs</p>
//         <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800">Our Blogs</h2>
//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
//         {visibleBlogs.map((blog, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 duration-300 flex flex-col"
//           >
//             <div className="relative aspect-[16/11] w-full overflow-hidden">
//   <img
//     src={blog.img}
//     alt={blog.title}
//     className="object-cover w-full h-full"
//   />
//   <div className="absolute top-3 left-5 bg-white p-1 rounded-full shadow-md">
//     <svg width="20" height="20" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97-4.685-8-7.673-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3.327-3.03 6.315-8 11z" />
//     </svg>
//   </div>
// </div>


//             <div className="p-4 flex-1 flex flex-col">
//               <div className="text-sm text-gray-500 mb-1">
//                 <span className="text-yellow-400 font-barlow">★★★★★</span> ({blog.rating})
//               </div>

//               <h3 className="text-lg font-semibold font-barlow text-gray-800 mb-2">{blog.title}</h3>

//               <p className="text-sm font-barlow text-gray-500 mb-4 line-clamp-3">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod.
//               </p>

//               <div className="mt-auto pt-3 border-t">
//                 <div className="flex justify-between items-center text-sm font-barlow text-gray-600">
//                   <a href="#" className="text-blue-500 font-medium hover:underline flex items-center gap-1">
//                     Read More →
//                   </a>
//                   <div className="flex items-center gap-1">
//                     <CalendarDays className="w-4 h-4" />
//                     <span>{blog.date}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mt-8 gap-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i)}
//             className={`w-3 h-3 rounded-full ${i === currentPage ? "bg-blue-500" : "bg-gray-300"} transition-all`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 3);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const start = currentPage * itemsPerPage;
  const visibleBlogs = blogs.slice(start, start + itemsPerPage);

  return (
    <section className="bg-white py-12 px-4 w-full">
      <div className="text-center mb-10">
        <p className="text-sm font-poppins text-blue-400 font-semibold mb-1">Blogs</p>
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800">Our Blogs</h2>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-300">
        {visibleBlogs.map((blog, idx) => (
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
                  <a href={`/blog/${blog.slug}`} className="text-blue-500 font-medium hover:underline flex items-center gap-1">
                    Read More →
                  </a>
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

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-3 h-3 rounded-full ${i === currentPage ? "bg-blue-500" : "bg-gray-300"} transition-all`}
          ></button>
        ))}
      </div>
    </section>
  );
}
