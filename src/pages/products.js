import React, { useEffect, useState } from "react";
import "./products.css";
import useAsync from "../hooks/useAsync";
import ProductItem from "../components/productItem";
import useFilter from "../hooks/useFilter";
import Input from "../components/input";
import { debounce } from "lodash";

export default function Products() {
  const { run, data, loading } = useAsync("products");
  const [range, setRange] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const { onChangeFilter, parseUrl } = useFilter();

  useEffect(() => {
    onChangeFilter("price_min", 1);
    const initRange = parseUrl(window.location.search);
    setRange(initRange["price_max"]);
  }, []);
  useEffect(() => {
    setSearchData(data?.data);
  }, [data]);
  const handleChangeRange = debounce((e) => {
    onChangeFilter("price_max", e.target.value);
  }, 500);
  useEffect(() => {
    run(undefined, "/" + window.location.search);
  }, [window.location.search]);

  return (
    <div>
      <div className="flex justify-center my-12">
        {/* <Input
          onChange={(e) => {
            setSearchData(
              data?.data.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
              )
            );
          }}
        /> */}
        <div className="w-[500px] flex flex-col items-center">
          {/* <span>data = {myData}</span>         */}

          <div className=" flex justify-between w-full">
            <span className="mx-2">0</span>
            <input
              type="range"
              min={0}
              max="1000"
              className="range "
              value={range}
              onChange={(e) => {
                setRange(e.target.value);
                handleChangeRange(e);
                // myFunc()
              }}
            />
            <span className="mx-2">1,000</span>
          </div>
          <span>{range} $</span>
        </div>
      </div>

      <section className="products my-8 mx-2 flex justify-around flex-wrap">
        {searchData?.map((item) => {
          return (
            <div className="w-[300px] ">
              <ProductItem item={item} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
