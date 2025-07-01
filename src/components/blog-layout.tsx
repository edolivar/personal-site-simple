import React from "react";
import NavBar from "./nav-bar";

type blogProps = {
  title: string;
  date: string;
  children: React.ReactNode;
};
const BlogLayout = (props: blogProps) => {
  return (
    <div>
      <NavBar />
      <div className="blog-header">
        <span className="text-light-green mr-2">{"*"}</span>
        {props.title}
      </div>
      <div className="blog-date">{props.date}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default BlogLayout;
