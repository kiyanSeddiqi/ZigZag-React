function Container({ children }) {
  return (
    <>
      <div className="section-container max-w-480 mx-auto 2xl:px-16 lg:px-6 md:px-6 px-3.5">
        {children}
      </div>
    </>
  );
}

export default Container;
