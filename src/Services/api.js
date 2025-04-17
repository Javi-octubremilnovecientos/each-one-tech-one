import { API_KEY } from "../Config/apiConfig";

export const newsFetch = async (params) => {

  
  const url = `https://gnews.io/api/v4/top-headlines?&category=technology&lang=en&q=${params}&apikey=${API_KEY}`;


   const res = await fetch(url);
   const data = await res.json();
   const news = data.articles
   return news;

};
