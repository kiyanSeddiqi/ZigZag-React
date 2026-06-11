import { Link } from "react-router-dom";
import { footerSections } from "../../../data/footerSections";
import { imgSource } from "../../../data/imgSource";
import FooterItem from "./FooterItem";
import Container from "../../ui/Container";
import { IoChevronUp } from "react-icons/io5";

const brandImgUrls = [
  imgSource.skrill_logo,
  imgSource.jcb_logo,
  imgSource.paypal_logo,
  imgSource.visa_logo,
  imgSource.mastercard_logo,
];

function Footer() {
  function scrollTopHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <footer className="footer mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2 mb-14 border-t border-brdr-clr bg-paper lg:mb-0 relative">
        <button
          aria-label="دکمه بازگشت به بالای صفحه"
          onClick={scrollTopHandler}
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-primary lg:-translate-y-1/2 -translate-y-7  rounded-full lg:size-12 size-9 cursor-pointer "
        >
          <IoChevronUp className="lg:size-6 size-5 text-paper" />
        </button>
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 xl:gap-6 py-5 md:py-10 lg:py-14 2xl:py-16 3xl:py-20">
            {footerSections.map(({ title, items }, index) => (
              <FooterItem key={index} title={title}>
                {items.map((item, i) => (
                  <li key={i}>
                    {item.icon && <item.icon className="size-4" />}
                    <Link
                      className="rounded px-1 focus-visible:ring focus-visible:ring-brdr-clr"
                      to={item.url}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </FooterItem>
            ))}
          </div>
          <div className="border-t border-brdr-clr py-5">
            <div className="flex flex-col-reverse md:flex-row text-center md:justify-between">
              <p className="text-xs lg:text-sm leading-6 text-muted">
                حق نشر &copy; 2026 REDQ کلیه حقوق محفوظ است
              </p>
              <ul
                className="flex-wrap items-center justify-center hidden mx-auto mb-1 md:flex gap-x-4 xs:gap-x-5 lg:gap-x-7 md:mb-0 md:mx-0 gap-y-2 md:gap-y-0 child:hover:opacity-80 child:duration-200"
                dir="ltr"
              >
                {brandImgUrls.map((imgSrc, i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      target="_blank"
                      className="focus-visible:ring focus-visible:ring-brdr-clr block rounded"
                    >
                      <img
                        src={imgSrc}
                        alt="تصویر برند تجاری"
                        className="h-5 aspect-auto"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
