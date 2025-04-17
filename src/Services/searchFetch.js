export const SearchFetch = async (params) => {
  
  const apiKey = "7f3054217762260e72da5c2e9f323a08";

  const url = `https://gnews.io/api/v4/search?category=technology&q=${params}&lang=en&in=title,description&apikey=`;

  try {
    const resp = await fetch(url + apiKey);
    const datos = await resp.json(); 

    const noticias = datos.articles?.map((noticia)=>{
      const New = {
             titulo: noticia.title,
             desc:noticia.description,
             conten:noticia.content,
             img:noticia.image,
             fecha:new Date(noticia.publishedAt),
        }
        return New
      })  
      return noticias
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
    throw error; 
  }
};
