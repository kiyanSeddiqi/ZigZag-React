import { Link } from "react-router-dom";
import Logo from "../Logo";
import Actionbar from "./Actionbar";
import MegaMenu from "./MegaMenu";

function Navbar({ children }) {
  return (
    <>
      <div className="navbar shadow-lg px-6 lg:h-20 h-16 flex items-center bg-primary-dark text-white">
        <Logo bgDark={true} />
        <MegaMenu />
        {children}
      </div>
    </>
  );
}

export default Navbar;
