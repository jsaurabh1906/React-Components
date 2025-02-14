import React from "react";
import { blogPost as post } from "../../utils/cardsData";
const BlogCard = () => {
  return (
    <div className="bg-sky-100 p-10 md:p-20">
      <h2 className="text-xl font-bold text-sky-800 text-center mb-2">
        Blog Card (News / Blog Websites)
      </h2>
      <p className="text-sm text-sky-600 text-center mb-2">
        Used for listing blog articles on news or blogging platforms.{" "}
      </p>
      <div className="max-w-md mx-auto  rounded-lg shadow-lg shadow-sky-300 overflow-hidden mt-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-sky-800">{post.title}</h3>
          <p className="text-sky-600 text-sm">{post.date}</p>
          <p className="mt-2 text-sky-700">{post.excerpt}</p>
          <a
            href={post.link}
            className="text-sky-500 font-semibold mt-3 inline-block"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
