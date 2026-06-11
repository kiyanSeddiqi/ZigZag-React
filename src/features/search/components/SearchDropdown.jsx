import { Link } from "react-router-dom";
import ImageOptimizer from "../../../components/ui/ImageOptimizer";
import { IoStar } from "react-icons/io5";
import { optimizedImgs } from "../../../library/imageLoader";

function SearchDropdown({ filteredData, onClose }) {
  return (
    <>
      <div className="absolute mt-3 left-4 right-4 mx-auto bg-paper shadow-lg rounded z-50 p-2">
        <div className="max-h-96 overflow-y-auto p-1 custom-scroll">
          <div className="flex flex-col space-y-3 text-primary font-semibold">
            {filteredData?.map((item) => (
              <Link to={`details/${item.id}`} key={item.id}>
                <div
                  className="flex p-2 rounded border border-brdr-clr sm:gap-x-5 gap-x-3 duration-300 cursor-pointer hover:shadow-md"
                  onClick={onClose}
                >
                  <div className="img-container 2xs:size-25 size-20 shrink-0 bg-gray-200 rounded hidden 2xs:block">
                    <ImageOptimizer
                      image={optimizedImgs[item.images[0]]}
                      alt={`تصویر ${item.title}`}
                      className="size-full object-cover rounded"
                      sizes="(max-width: 768px) 400px, 800px"
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5 w-full">
                    <div className="flex items-center gap-x-3">
                      <h2 className="2xl:text-base text-sm text-heading line-clamp-1">
                        {item.title}
                      </h2>
                      <div className="font-heading flex items-center gap-1">
                        <p className=" mt-1 text-sm">{item.rating}</p>
                        <IoStar className="size-4 text-amber-400" />
                      </div>
                    </div>
                    <p className="text-muted line-clamp-1 2xs:text-sm text-xs ">
                      {item.description}
                    </p>
                    <p className="2xs:text-sm text-xs">برند {item.brand}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDropdown;
