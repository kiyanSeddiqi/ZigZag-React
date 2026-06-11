import { toast } from "react-toastify";
import Button from "../../../components/ui/Button";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { addComma } from "../../../utils/Helpers";

function QuantitySelector({ value, onChange, min = 1, max = 10, stockNumber }) {
  function decrease() {
    if (value > min) onChange(value - 1);
  }
  function increase() {
    if (value === stockNumber)
      toast.warning(`تنها ${addComma(stockNumber)} عدد در انبار موجود است`, {
        toastId: "cart-toast",
      });
    if (value < max && value < stockNumber) onChange(value + 1);
  }
  return (
    <>
      <div className="flex items-center rounded border border-brdr-clr box-content sm:h-12 h-10 2xs:w-auto w-full">
        <Button onClick={increase} type="normal" className={"rounded-l-none"}>
          <IoMdAdd className="sm:size-4.5 size-4" />
        </Button>
        <span className="flex items-center justify-center 2xs:w-12 sm:w-16 w-full border-x border-x-brdr-clr h-full font-heading lg:text-lg sm:text-base text-sm pt-1">
          {value}
        </span>
        <Button onClick={decrease} type="normal" className={"rounded-r-none"}>
          <IoMdRemove className="sm:size-4.5 size-4" />
        </Button>
      </div>
    </>
  );
}

export default QuantitySelector;
