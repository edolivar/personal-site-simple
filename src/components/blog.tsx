import React from "react";
import AnimatedLink from "./animated-link";

const Blogs = () => {
  return (
    <div>
      <h3 className="section-heading">
        <span className=" text-light-green">{"* "}</span>blogs
      </h3>
      <div className="blog-details">coming soon...</div>
      <div>
        <AnimatedLink href="/blogs" text="all blogs" />
      </div>
    </div>
  );
};

export default Blogs;
