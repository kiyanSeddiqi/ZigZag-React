import { IoCodeSlash, IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

function Breadcrumb({ children, productId }) {
  return (
    <>
      <div className="flex items-center 2xs:justify-between justify-center flex-wrap gap-y-3 gap-x-12 sm:py-8 py-5 font-semibold">
        <div className="">
          <ol className="flex items-center gap-x-3 child:text-muted">
            <li>
              <Link to="/">
                <IoHome className="sm:size-5 size-4 hover:text-primary dark:hover:text-white duration-200" />
              </Link>
            </li>
            <li className="pt-1">/</li>
            <li>جزییات محصول (کد {productId})</li>
          </ol>
        </div>
        {children}
      </div>
    </>
  );
}

export default Breadcrumb;
