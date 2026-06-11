import { IoChevronDown } from "react-icons/io5";

function ProductAccordion({ onToggle, title, isOpen, children }) {
  return (
    <>
      <div className="2xs:py-7 py-4 text-heading overflow-hidden not-last-of-type:border-b border-b-brdr-clr font-semibold">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={onToggle}
        >
          <h2 className="md:text-base lg:text-lg text-sm">{title}</h2>
          <IoChevronDown
            className={`md:size-6 2xs:size-5 size-4 duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}
          />
        </div>

        <div
          className={`grid overflow-hidden duration-300 transition-all ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="min-h-0">
            <div className="text-muted md:text-base 2xs:text-sm text-xs 2xs:mt-7 mt-4 lg:leading-8 leading-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductAccordion;
