export const SearchFetch = async (params) => {
  const apiKey = "7f3054217762260e72da5c2e9f323a08";

  const url = `https://gnews.io/api/v4/search?category=technology&q=${params}&lang=en&in=title,description&apikey=`;

  try {
    const resp = await fetch(url + apiKey);
    const datos = await resp.json(); // Asegúrate de usar `await` aquí
    return datos.articles; // Devuelve los artículos directamente
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
    throw error; // Lanza el error para manejarlo en el lugar donde se llame
  }
};
