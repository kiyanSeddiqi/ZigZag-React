import Spinner from "./Spinner";

function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col gap-y-2 items-center justify-center text-xl font-bold text-primary">
      در حال بارگذاری...
      <Spinner />
    </div>
  );
}
export default PageLoader;
