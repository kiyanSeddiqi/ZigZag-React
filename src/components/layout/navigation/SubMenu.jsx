import { Link } from "react-router-dom";

function SubMenu({ menuData }) {
  return (
    <>
      <div
        className="absolute shadow top-full xl:-right-16 2xl:right-0
       lg:-right-26 xl:w-260 lg:w-242.5 invisible opacity-0 pointer-events-none translate-y-6 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 duration-400 delay-100 text-base rounded"
      >
        <div className="sub-menu__container py-5 grid grid-cols-5 bg-gray-100 dark:bg-primary-dark rounded child:not-last-of-type:border-l child:border-l-brdr-clr border border-brdr-clr">
          {menuData.children &&
            menuData?.children.map((el) => (
              <ul
                key={el.id}
                className="px-3 child:first-of-type:not-[ul]:mb-1.5 child:first-of-type:font-bold dark:child:first-of-type:text-secondary child:first-of-type:text-primary child:text-muted dark:child:text-primary child:hover:text-primary-dark dark:child:first-of-type:hover:text-primary-dark"
              >
                <li>
                  <Link
                    to="products"
                    className="block py-1.5 px-3 dark:hover:bg-primary hover:bg-gray-200 duration-200 rounded focus-visible:ring focus-visible:ring-brdr-clr"
                  >
                    {el.title}
                  </Link>
                </li>
                {el.children &&
                  el.children.map((item, i) => (
                    <li key={i}>
                      <Link
                        to="products"
                        className="block py-1.5 px-3 dark:hover:bg-primary hover:bg-gray-200 duration-200 rounded focus-visible:ring focus-visible:ring-brdr-clr"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                {el.subItems && (
                  <ul className="mt-3.5 pt-3.5 border-t border-t-brdr-clr dark:child:hover:text-btn-primary dark:child:first-of-type:text-secondary child:first-of-type:text-primary child:text-muted dark:child:text-primary child:hover:text-primary-dark dark:child:first-of-type:hover:text-primary-dark">
                    {el.subItems.map((item, i) => (
                      <li key={i}>
                        <Link
                          to="products"
                          className="block py-1.5 px-3 dark:hover:bg-primary hover:bg-gray-200 duration-200 rounded focus-visible:ring focus-visible:ring-brdr-clr"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            ))}
        </div>
      </div>
    </>
  );
}

export default SubMenu;
