import Scramble from "@/components/scramble";
import NavBar from "./nav-bar";
type headerProps = {
  title: string;
};
export default function Header(props: headerProps) {
  return (
    <div>
      <NavBar />
      <div className="text-3xl font-bold">
        <span className="text-lavender">{"* "}</span>
        <Scramble title={props.title} />
      </div>
    </div>
  );
}
