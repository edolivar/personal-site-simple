import Header from "@/components/header";
import { profile } from "@/data/data";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import Work from "@/components/work";
import Project from "@/components/project";
import Blogs from "@/components/blog";
import Links from "@/components/links";

export default function Home() {
  return (
    <div>
      <Header title={profile.name} />
      <div className="profile-item text-light-grey flex items-center">
        <IoLocationOutline className="mr-2" />
        {profile.location}
      </div>
      <div className="profile-item text-light-grey flex items-center">
        <HiOutlineComputerDesktop className="mr-2" />
        {profile.current}
      </div>
      <div className="profile-item">{profile.desc}</div>
      <div className="mt-12 ">
        <Work />
      </div>
      <div className="mt-12 ">
        <Project />
      </div>
      <div className="mt-12 ">
        <Blogs />
      </div>
      <div className="mt-12 ">
        <Links />
      </div>
    </div>
  );
}
