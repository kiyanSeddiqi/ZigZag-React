import { useContext } from "react";
import { ProductsContext } from "../../features/product/context/ProductsContext";
import Container from "../../components/ui/Container";
import ErrorMessage from "../../components/ui/ErrorMessage";
import BestSellers from "./BestSellers";
import CategorySlider from "./CategorySilder";
import Hero from "./Hero";
import Sale from "./Sale";
import MostVisited from "./MostVisited";
import NestedBanners from "./NestedBanners";
import NewProducts from "./NewProducts";
import CardSkeleton from "../../features/product/components/CardSkeleton";
import DownloadApp from "./DownloadApp";
import Support from "./Support";
import BrandSlider from "./BrandSlider";

function Home() {
  const { products, isLoading, errorMsg, shuffledProducts } =
    useContext(ProductsContext);

  const saleItems = shuffledProducts?.filter((p) => p.tags.includes("sale"));
  const bestSellerItems = products?.filter((p) =>
    p.tags.includes("bestseller"),
  );
  const mostVisitedItems = shuffledProducts?.filter((p) =>
    p.tags.includes("most_visited"),
  );
  const newItems = shuffledProducts?.filter((p) => p.tags.includes("new"));

  if (errorMsg) return <ErrorMessage text={errorMsg} />;
  return (
    <>
      <Container>
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <>
            <Hero />
            <Sale productsData={saleItems} />
            <CategorySlider />
            <BestSellers productsData={bestSellerItems} />
            <BrandSlider />
            <MostVisited productsData={mostVisitedItems} />
            <NestedBanners />
            <NewProducts productsData={newItems} />
            <DownloadApp />
            <Support />
          </>
        )}
      </Container>
    </>
  );
}

export default Home;
