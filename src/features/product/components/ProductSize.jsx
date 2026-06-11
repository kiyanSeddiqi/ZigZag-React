import Button from "../../../components/ui/Button";

function ProductSize({ sizeData, sizeValue, onChangeSize }) {
  return (
    <>
      <div className="lg:mb-4 flex flex-col">
        <h3 className="sm:text-base md:text-lg text-sm mb-2.5 ">
          سایز :<span className="mr-2">{sizeValue}</span>
        </h3>
        <ul className="inline-flex flex-wrap sm:gap-x-3 gap-x-2 gap-y-3">
          {sizeData?.map((size, i) => (
            <li key={i} onClick={() => onChangeSize(size)}>
              <Button
                type={sizeValue === size ? "secondary" : "primary"}
                className={
                  "font-open hover:translate-y-0 hover:shadow-md sm:text-base text-sm 2xs:py-2! 2xs:px-4! py-1.5! px-3!"
                }
              >
                {size}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductSize;
