function FooterItem({ children, title }) {
  return (
    <>
      <div className="pb-3 md:pb-0">
        <h4 className="text-sm md:text-base  mb-5 2xl:mb-6 3xl:mb-7 text-primary dark:text-secondary font-bold">
          {title}
        </h4>
        <ul className="flex flex-col text-xs sm:text-sm space-y-3 lg:space-y-3.5 text-accent child:flex child:items-center child:gap-2 child:hover:-translate-x-2 child:duration-200 child:cursor-pointer font-semibold">
          {children}
        </ul>
      </div>
    </>
  );
}

export default FooterItem;
