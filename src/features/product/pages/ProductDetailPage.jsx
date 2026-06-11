import { IoChevronBack, IoHome, IoLink } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Container from "../../../components/ui/Container";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import CardSkeleton from "../components/CardSkeleton";
import ProductInfo from "../components/ProductInfo";
import RelatedProducts from "../components/RelatedProducts";
import Button from "../../../components/ui/Button";

function ProductDetailPage() {
  const { id: urlId } = useParams();
  const productId = Number(urlId);
  const { products, isLoading, errorMsg } = useContext(ProductsContext);

  const foundFromUrl = products?.find((p) => Number(p.id) === productId);
  const relatedCategory = products?.filter(
    (p) => p.category === foundFromUrl.category,
  );

  if (errorMsg) return <ErrorMessage text={errorMsg} />;
  return (
    <>
      <Container>
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <>
            <div className="flex items-center 2xs:justify-between  flex-wrap gap-y-3 gap-x-12 sm:py-8 py-5 font-semibold">
              <ol className="flex items-center 2xs:gap-x-3 gap-x-2 child:text-muted">
                <li>
                  <Link to="/">
                    <IoHome className="sm:size-5 size-4 hover:text-primary dark:hover:text-white duration-200 " />
                  </Link>
                </li>
                <li className="pt-1">/</li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-primary dark:hover:text-white duration-200 2xs:text-base text-sm"
                  >
                    فروشگاه
                  </Link>
                </li>
                <li className="pt-1">/</li>
                <li className="2xs:text-base text-sm">
                  جزییات محصول (کد {productId})
                </li>
              </ol>

              <Button className={"text-sm!"}>
                <Link to="/products" className="flex items-center gap-2 ">
                  مشاهده همه
                  <IoChevronBack className="size-4" />
                </Link>
              </Button>
            </div>
            <ProductInfo productData={foundFromUrl} />
            <RelatedProducts relatedData={relatedCategory} />
          </>
        )}
      </Container>
    </>
  );
}

export default ProductDetailPage;
