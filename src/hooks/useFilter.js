import React from "react";
import { useSearchParams } from "react-router-dom";

export default function useFilter() {
  const [search, setSearch] = useSearchParams();

  const AND_SIGN = "&";
  const EQUAL_SIGN = "=";
  const ARRAY_SEPERATOR = "+";

  const parseUrl = (url) => {
    if (!url) return {};
    return url
      ?.slice(1)
      ?.split(AND_SIGN)
      ?.reduce((acc, curr, index) => {
        const seperated = curr?.split(EQUAL_SIGN);
        return {
          ...acc,
          [seperated?.[0]]: seperated?.[1]?.split(ARRAY_SEPERATOR),
        };
      }, {});
  };

  const strigifyUrl = (data) => {
    return Object.entries(data).reduce((acc, curr, index) => {
      const isAtEnd = index + 1 === Object.keys(data)?.length;
      return (
        acc +
        curr[0] +
        EQUAL_SIGN +
        curr[1]?.join(ARRAY_SEPERATOR) +
        (!isAtEnd ? AND_SIGN : "")
      );
    }, "?");
  };

  const onChangeFilter = (name, value) => {
    const url = window.location.search;
    const parsedUrl = parseUrl(url || "");
    if (value !== ""){ parsedUrl[name] = [value];}
    else
    delete parsedUrl[name];
    setSearch(strigifyUrl(parsedUrl));
  };

  return { parseUrl, strigifyUrl, onChangeFilter };
}






// https://api.escuelajs.co/api/v1/products/?price_min=0&price_max=429
// https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000