import { useCallback, useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMsg(null);
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(
          "در هنگام دریافت داده ها مشکلی پیش آمده است، لطفا دوباره تلاش کنید",
        );

      const data = await res.json();
      setData(data);
    } catch (error) {
      // اگر درخواست لغو شد، خطا را نادیده بگیر
      if (error.name === "AbortError") return;
      const isNetworkError =
        error.name === "TypeError" ||
        error.message === "Failed to fetch" ||
        error.message ===
          "NetworkError when attempting to fetch resource.";

      if (isNetworkError) {
        setErrorMsg("خطا در برقراری ارتباط با سرور");
      } else {
        // پیام دلخواه برای سایر خطاها
        setErrorMsg(
          "خطای نامشخصی رخ داده است، لطفاً دوباره تلاش کنید.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) getData();
  }, [url, getData]);

  return { data, isLoading, errorMsg, refetch: getData };
}
