import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const fetchBlogList = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_KEY);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };
  useEffect(() => {
    fetchBlogList();
  }, []);

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
            <a href="#" className="z-10">
              <img
                className="w-full h-48 object-cover"
                src={blog.photo}
                alt=""
              />
            </a>
            <div className="p-4 flex flex-col flex-grow z-10">
              <a href="#">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </a>
              <p className="mb-3 flex-grow text-sm font-normal text-gray-700 dark:text-gray-400">
                {blog.content}
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

              <a
                href="#"
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
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
