import { useState } from "react";
import { BASE_URL } from "../libs/constants";
import axios from "axios";

const useAsync = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const run = (data, searchParams = "") => {
    return new Promise((resolve, reject) => {
      axios({ url: BASE_URL + url + searchParams, data, method })
        .then((data) => {
          setData(data);
          setError(null);
          setLoading(false);
          resolve(data);
        })
        .catch((err) => {
          setData(null);
          setError(err);
          setLoading(false);
          reject(err);
        });
    });
  };

  return { data, loading, error, run };
};

export default useAsync;
