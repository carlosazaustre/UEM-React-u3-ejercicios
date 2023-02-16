import { useState, useEffect } from "react";

export function useFetch(apiURL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    throw new Error("A petado!");
    // fetch(apiURL)
    //   .then((response) => response.json())
    //   .then((pokemons) => {
    //     setData(pokemons?.results);
    //     console.log(pokemons?.results);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   }
  }, [apiURL]);

  return { data, loading };
}
