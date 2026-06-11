function Spinner({ size = "h-10 w-10", className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${size} border-2 border-primary border-t-transparent rounded-full animate-spin`}
      />
    </div>
  );
}

export default Spinner;
