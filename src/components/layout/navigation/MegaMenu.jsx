import { Link } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import MegaMenuItem from "./MegaMenuItem";

const API_URL = import.meta.env.VITE_API_URL;

function MegaMenu() {
  const { data: menuData } = useFetchData(`${API_URL}/mega_menu`);
  return (
    <>
      <nav className="navbar-nav lg:flex hidden flex-1 xl:mr-10 mr-6 h-full">
        <ul className="nav-list nav-list flex items-center relative xl:text-lg lg:text-base text-sm child:cursor-pointer font-semibold">
          {menuData?.map((item) => (
            <MegaMenuItem key={item.id} itemData={item} />
          ))}
        </ul>
      </nav>
    </>
  );
}

export default MegaMenu;
