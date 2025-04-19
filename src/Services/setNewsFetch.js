import { API_KEY } from "../Config/apiConfig";
import { checkLocalStorage, setStorage } from "./setLocalStorage";
import { mapNews } from "../Utils/mapNews";
import { SetQuery } from "./SetQuery";

export const newsFetch = async (topic) => {
  
  const check = checkLocalStorage(topic);

  if (check) {
    return check.results;
  }

  const query = SetQuery(topic);

  // const url = `https://gnews.io/api/v4/top-headlines?&category=technology&lang=en&q=${query}&apikey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const news = data.articles;
  const results = mapNews(news);
  setStorage({ topic, results });
  return results;
};
