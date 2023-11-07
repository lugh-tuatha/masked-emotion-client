import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url).then(response => {
      response.json().then(data => {
        setData(data);
        setLoading(false);
      });
    });
  }, [url]);
  // whenever url changes its gonna re run this function

  return{ data, loading }
}

export default useFetch;