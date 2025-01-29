import { useEffect, useState } from "react";
import { handleNewSearch } from "../services/facts.js";

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    handleNewSearch().then((newFact) => setFact(newFact));
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
