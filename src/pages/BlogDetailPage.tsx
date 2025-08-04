import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/footer';

type Blog = {
  id: number;
  title: string;
  content: string;
  image: string;
  created_at: string;
};

type BlogData = {
  blog: Blog;
  others: Array<{
    title: string;
    image: string;
    slug: string;
    created_at: string;
  }>;
};

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`/api/api/blog/${encodeURIComponent(slug || '')}`);
        const data = await response.json();
        setBlogData(data);
      } catch (err) {
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlogData();
  }, [slug]);

  if (loading || !blogData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const { blog, others } = blogData;

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="bg-[#081C3A]">
        <Navigation />
      </div>
      
      <main className="flex-1 bg-white pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
         
          
          <img src={`/api${blog.image}`} alt={blog.title} className="w-full h-auto mb-8 rounded-lg" />
          <div className="flex items-center text-gray-600 text-sm mb-8">
            <CalendarDays className="w-4 h-4 mr-1" />
            {new Date(blog.created_at).toLocaleDateString()}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {others && others.length > 0 && (
            <div className="mt-16">
              <h6 className="text-sm font-semibold text-blue-400 mb-2 text-center">Recent</h6>
              <h2 className="text-2xl font-bold mb-8 text-center font-barlow">Recent Blogs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((other, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 duration-300 flex flex-col"
                  >
                    <div className="relative aspect-[16/11] w-full overflow-hidden">
                      <img
                        src={`/api${other.image}`}
                        alt={other.title}
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

                      <h3 className="text-lg font-semibold font-barlow text-gray-800 mb-2">{other.title}</h3>

                      <p className="text-sm font-barlow text-gray-500 mb-4 line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod.
                      </p>

                      <div className="mt-auto pt-3 border-t">
                        <div className="flex justify-between items-center text-sm font-barlow text-gray-600">
                          <Link 
                            to={`/blog/${encodeURIComponent(other.slug)}`}
                            className="text-blue-500 font-medium hover:underline flex items-center gap-1"
                          >
                            Read More →
                          </Link>
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            <span>{new Date(other.created_at).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
     
    </div>
  );
};

export default BlogDetailPage;
