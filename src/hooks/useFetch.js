import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BaseUrl } from "../Utilities";

const useFetch = (token, url, func) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const config = {
      method: "get",
      url: `${BaseUrl}${url}`,
      headers: { Authorization: "Bearer " + token }
    };

    axios(config)
      .then(function (response) {
        func(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return { loading };
};
export default useFetch;
