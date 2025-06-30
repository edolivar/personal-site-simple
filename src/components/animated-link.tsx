import React from "react";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

type linkProps = {
  href: string;
  text: string;
};

const AnimatedLink = (props: linkProps) => {
  return (
    <Link className="flex items-center accent-link group" href={props.href}>
      {props.text}
      <HiArrowUpRight className="ml-2 animate-arrow-float" />
    </Link>
  );
};

export default AnimatedLink;
