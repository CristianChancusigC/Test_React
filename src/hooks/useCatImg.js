import { useState, useEffect } from "react";

export function useCatImg({ fact }) {
  const [imgeUrl, setImgeUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    const firstThreeWord = fact.split(" ").slice(0, 3).join(" "); // first 3 words
    fetch(
      `https://cataas.com/cat/says/${firstThreeWord}?fontSize=50&fontColor=red`
    ).then((response) => {
      const { url } = response;
      setImgeUrl(url);
    });
  }, [fact]);
  return { imgeUrl };
}
