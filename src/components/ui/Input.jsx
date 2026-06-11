function Input({
  type = "text",
  placeHolder = "",
  className = "",
  id = "",
  name = "",
  value,
  onChange,
  hasError = false,
  inputMode,
}) {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        autoComplete="off"
        className={`font-normal sm:text-base text-sm placeholder:2xs:text-sm
           rounded lg:h-12 h-10 px-3 py-2 focus:outline-none placeholder:text-muted text-heading transition ${hasError ? "border-error ring-2 ring-error focus:ring-error hover:ring-error" : "border border-brdr-clr dark:border-brdr-clr focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary"} ${className} `}
      />
    </>
  );
}

export default Input;
