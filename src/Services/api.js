import { API_KEY } from "../Config/apiConfig";

export const newsFetch = async (params) => {
  const url = `https://gnews.io/api/v4/search?category=technology&lang=en&in=title,description&q=${params}&apikey=${API_KEY}`;


   const res = await fetch(url);
   const data = await res.json();
   const news = data.articles
   return news;

};
