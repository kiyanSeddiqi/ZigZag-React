import Button from "./Button";

function CustomToast({ toastMsg, onClick, btnMsg, Icon }) {
  return (
    <>
      <div className="flex items-center justify-between 2xs:gap-3 gap-2 w-full 2xs:text-sm text-xs font-semibold">
        <span>{toastMsg}</span>
        {btnMsg && (
          <Button
            onClick={onClick}
            className=" gap-2 bg-primary-dark dark:bg-primary-dark! group dark:text-white px-3! w-24"
          >
            {btnMsg}
            {Icon && (
              <Icon className="size-4 group-hover:-translate-x-1 duration-300" />
            )}
          </Button>
        )}
      </div>
    </>
  );
}

export default CustomToast;
