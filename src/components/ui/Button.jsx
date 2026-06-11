function Button({
  children,
  onClick,
  isDisable = false,
  type = "primary",
  className,
}) {
  const baseStyles = `rounded cursor-pointer flex items-center justify-center font-semibold py-2 px-4 duration-300 disabled:cursor-not-allowed gap-2 ${className}`;

  const typeStyles =
    type === "normal"
      ? "text-heading hover:bg-primary hover:text-white h-full hover:shadow-none dark:hover:text-paper"
      : type === "secondary"
        ? "bg-secondary text-primary-dark  hover:bg-secondary-hover"
        : "bg-primary text-paper hover:bg-primary-hover";

  return (
    <>
      <button
        className={`${baseStyles} ${typeStyles}`}
        onClick={onClick}
        disabled={isDisable}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
