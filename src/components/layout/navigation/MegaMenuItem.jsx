import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

function MegaMenuItem({ itemData }) {
  return (
    <>
      <li className="nav-item group py-5 ">
        <Link
          to={itemData.link}
          className="nav-link relative flex items-center py-2 xl:px-4 px-3 gap-2 rounded focus-visible:ring focus-visible:ring-brdr-clr"
        >
          {itemData.title}
          {itemData.children && (
            <IoChevronDown className="nav-icon duration-300 group-hover:rotate-180 size-4" />
          )}
        </Link>
        {itemData.children && <SubMenu menuData={itemData} />}
      </li>
    </>
  );
}

export default MegaMenuItem;
