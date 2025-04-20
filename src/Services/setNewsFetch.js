
import { API_KEY } from "../Config/apiConfig";

import { mapNews } from "../Utils/mapNews";


export const newsFetch = async (query) => {
  


  const url = `https://gnews.io/api/v4/top-headlines?&category=technology&lang=en&q=${query}&apikey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const news = data.articles;
  const results = mapNews(news);

 

  return results;
};
