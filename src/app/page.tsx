import Header from "@/components/header";
import { profile } from "@/data/data";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

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
    </div>
  );
}
