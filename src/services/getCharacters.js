export const getCharacters = async(currentPage) => {
  return await fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
    .then(res => res.json());
};
