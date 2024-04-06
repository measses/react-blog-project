import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

function BlogDetail() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return <div className="text-white">Blog bulunamadı!</div>;
  }

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="w-full max-w-2xl mx-auto">
          <header className="mb-4 lg:mb-6">
            <address className="flex items-center mb-6 not-italic">
              <img
                className="mr-4 w-16 h-16 rounded-full"
                src="https://avatars.githubusercontent.com/u/67739721?s=400&u=081dee096b77cd22472afe6a5da3c96e8b8e9795&v=4"
                alt="Mert Araz"
              />
              <div>
                <a
                  href="https://github.com/measses"
                  target="_blank"
                  rel="author"
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Mert Araz
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Junior Frontend Developer
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  <time
                    pubdate="true"
                    dateTime="2024-04-06"
                    title="6th April 2024"
                  >
                    6 Nisan 2024
                  </time>
                </p>
              </div>
            </address>
            <div className="flex justify-center"></div>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {blog.title}
            </h1>
            <img
              className="mb-8 rounded-lg shadow-lg w-[600px] h-[400px] object-cover"
              src={blog.photo}
              alt={blog.title}
            />
          </header>
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="space-y-4 text-lg text-white dark:text-gray-300"
          ></div>
        </article>
      </div>
    </main>
  );
}

export default BlogDetail;
