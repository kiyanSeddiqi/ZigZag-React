function Backdrop({ onClick, className = "", isOpen, children }) {
  return (
    <>
      <div
        onClick={onClick}
        className={`backdrop fixed inset-0 p-4 flex items-center justify-center bg-black/70 backdrop-blur-xs z-50 duration-300 transition-opacity ${className} ${isOpen ? "opacity-100 visible " : "opacity-0 invisible"}`}
      >
        {children}
      </div>
    </>
  );
}

export default Backdrop;
