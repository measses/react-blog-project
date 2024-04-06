import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 10;
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const fetchBlogList = async () => {
    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_API_KEY);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setBlogs(data);
      setLoading(false); 
    } catch (error) {
      console.error("Fetch error: ", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <button
          disabled
          type="button"
          className="py-2.5 px-5 text-sm font-medium text-blue-700 bg-white rounded-lg border border-blue-700 hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline mr-3 w-4 h-4 animate-spin text-blue-700 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
          Loading...
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center mt-8 mb-4">
        {currentBlogs.map((blog, index) => (
          <div
            key={index}
            className="relative flex flex-col w-full sm:w-64 border border-gray-700 rounded-lg shadow overflow-hidden dark:border-gray-600"
          >
            <div className="custom-gradient-bg absolute inset-0 z-0"></div>{" "}
            <div href="#" className="z-10">
              <img
                className="w-full h-48 object-cover"
                src={blog.photo}
                alt=""
              />
            </div>
            <div className="p-4 flex flex-col flex-grow z-10">
              <a href="#">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </a>
              <p className="mb-3 flex-grow text-sm font-normal text-gray-700 dark:text-gray-400">
                {blog.content.split(" ").slice(0, 25).join(" ")}...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/blog/${blog.id}`}
                className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white custom-btn-bg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto"
              >
                Daha Fazla
                <svg
                  className="ml-1 w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
