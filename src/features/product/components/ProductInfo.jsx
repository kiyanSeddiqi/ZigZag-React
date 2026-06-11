import { useState } from "react";
import ProductAccordion from "./ProductAccordion";
import ProductInfoGallery from "./ProductInfoGallery";
import ProductInfoMeta from "./ProductInfoMeta";
import ProductInfoOptions from "./ProductInfoOptions";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductReviewForm from "./ProductReviewForm";

function ProductInfo({ productData }) {
  const [accordion, setAccordion] = useState("reviews");

  return (
    <>
      <div className="product-info__container flex items-start flex-col xl:gap-x-12 md:gap-x-6 md:flex-row mb-10">
        <ProductInfoGallery
          imgGallery={productData?.images}
          stock={productData?.stock}
        />
        <div className="prodcut-info__text lg:w-1/2">
          <ProductInfoPrice productData={productData} />
          <ProductInfoOptions productData={productData} />
          <ProductInfoMeta productData={productData} />
          <ProductAccordion
            title="جزییات محصول"
            isOpen={accordion === "details"}
            onToggle={() =>
              accordion === "details"
                ? setAccordion(null)
                : setAccordion("details")
            }
          >
            {productData?.description}
          </ProductAccordion>
          <ProductAccordion
            title="اطلاعات تکمیلی"
            isOpen={accordion === "info"}
            onToggle={() =>
              accordion === "info" ? setAccordion(null) : setAccordion("info")
            }
          >
            لطفاً مستندات را با دقت مطالعه کنید. ما همچنین برخی آموزش‌های
            ویدیویی آنلاین در مورد این مسئله داریم. اگر مشکل همچنان باقی است،
            لطفاً یک تیکت در انجمن پشتیبانی باز کنید
          </ProductAccordion>
          <ProductAccordion
            title="نظرات مشتریان"
            isOpen={accordion === "reviews"}
            onToggle={() =>
              accordion === "reviews"
                ? setAccordion(null)
                : setAccordion("reviews")
            }
          >
            نظر خود را درباره این محصول با ما به اشتراک بگذارید.
            <ProductReviewForm id={productData?.id} />
          </ProductAccordion>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
