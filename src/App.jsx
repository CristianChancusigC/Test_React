import "./app.css";
import { useCatImg } from "./hooks/useCatImg";
import { useCatFact } from "./hooks/useCatFact";

// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`;

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imgeUrl } = useCatImg({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Cat's App</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imgeUrl && (
          <img
            src={imgeUrl}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
      <button onClick={handleClick}>New Search</button>
    </main>
  );
}
