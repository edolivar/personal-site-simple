import React from "react";
import AnimatedLink from "./animated-link";
import { blogs as content } from "@/data/data";
import Link from "next/link";

const Blogs = () => {
  return (
    <div>
      <h3 className="section-heading">
        <span className=" text-light-green">{"* "}</span>blogs
      </h3>

      <div className="my-5">
        {content.slice(0, 2).map((blogItem, id) => (
          <Link href={blogItem.url} key={id}>
            <div className="py-2 flex items-center justify-between group">
              <div className="text-xl group-hover:text-light-green transition-colors duration-400 ease-in-out">
                {blogItem.name}
              </div>
              <div className="text-light-grey">{blogItem.date}</div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <AnimatedLink href="/blogs" text="all blogs" />
      </div>
    </div>
  );
};

export default Blogs;
