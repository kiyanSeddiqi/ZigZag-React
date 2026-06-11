import { useState } from "react";
import Container from "../components/ui/Container";
import ImageOptimizer from "../components/ui/ImageOptimizer";
import { faqData } from "../data/faqSource";
import { optimizedImgs } from "../library/imageLoader";
import { IoChevronDown } from "react-icons/io5";
import Subscribe from "../components/ui/Subscribe";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  function toggleAccordion(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }
  return (
    <>
      <div className="faq-header relative">
        <div className="overlay absolute inset-0 bg-black/50 flex items-center justify-center text-xl md:text-2xl lg:text-3xl text-white">
          <h2>پرسش های متداول</h2>
        </div>
        <ImageOptimizer
          image={optimizedImgs.page_header}
          alt="تصویر رگال لباس"
          className="size-full object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>
      <Container>
        <div className="faq-content py-10 sm:py-16 lg:py-20 max-w-5xl mx-auto space-y-4 font-semibold">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className="faq-accordion bg-paper rounded cursor-pointer transition-all duration-400"
              >
                <div className="faq-title dark:text-secondary text-primary flex justify-between gap-3 md:text-lg sm:text-base text-sm py-4 md:py-6 px-4 md:px-8 lg:px-10 leading-6">
                  <h2> {faq.q} </h2>
                  <IoChevronDown
                    className={`size-5 duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </div>
                <div
                  className={`faq-text text-primary border-t-brdr-clr transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? "max-h-70 border-t " : "max-h-0 border-t-0 "}`}
                >
                  <div className="wrapper py-4 md:py-7 px-6 md:px-8 lg:px-10 md:text-base sm:text-sm text-xs leading-loose font-semibold">
                    {faq.type === "list" ? (
                      <ul className="space-y-2 ">
                        {faq.a.map((item, i) => (
                          <li key={i}>
                            <strong>{item.title} : </strong>
                            {item.items}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{faq.a}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Subscribe />
      </Container>
    </>
  );
}

export default Faq;
