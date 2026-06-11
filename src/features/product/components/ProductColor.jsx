function ProductColor({ colorData, colorValue, onChangeColor }) {
  return (
    <>
      <div className="lg:mb-4 flex flex-col">
        <h3 className="sm:text-base md:text-lg text-sm mb-2.5">
          رنگ :<span className="mr-2">{colorValue.title}</span>
        </h3>
        <ul className="inline-flex flex-wrap sm:gap-x-3 gap-x-2 gap-y-3">
          {colorData?.map((color) => (
            <li
              key={color.title}
              onClick={() => onChangeColor(color)}
              className={`rounded-sm border-2 border-brdr-clr p-0.5 flex items-center justify-center 2xs:w-10 w-8 2xs:h-10 h-8 text-sm duration-300 cursor-pointer hover:border-primary ${color.title === colorValue.title ? "dark:border-secondary border-primary hover:border-secondary" : ""}`}
            >
              <span className={`${color.clr_code} size-full rounded-sm`}></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductColor;
