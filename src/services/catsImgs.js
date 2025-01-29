export const catsFactImg = async (fact) => {
  const firstThreeWord = fact.split(" ").slice(0, 3).join(" "); // first 3 words
  const response = await fetch(
    `https://cataas.com/cat/says/${firstThreeWord}?fontSize=50&fontColor=red`
  );
  const { url } = response;
  return url;
};
