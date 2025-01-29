import { useState, useEffect } from "react";
import "./app.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`;

export function App() {
  const [fact, setFact] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // Get the first three words of the fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;
    const firstThreeWord = fact.split(" ").slice(0, 3).join(" "); // first 3 words
    console.log(firstThreeWord);
    fetch(
      `https://cataas.com/cat/says/${firstThreeWord}?fontSize=50&fontColor=red`
    )
      //   .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImgUrl(url);
      });
  }, [fact]);

  return (
    <main>
      <h1>Cat's App</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imgUrl && (
          <img
            src={imgUrl}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
    </main>
  );
}
