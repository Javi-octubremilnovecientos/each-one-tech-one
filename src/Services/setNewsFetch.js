import { API_KEY } from "../Config/apiConfig";
import { checkLocalStorage, setStorage } from "./setLocalStorage";
import { mapNews } from "./mapNews";
import { SetQuery } from "./SetQuery";
import { today } from "../Utils/formatter";

export const newsFetch = async (topic) => {
  
  const check = checkLocalStorage(topic);

  if (check) {
    return check.results;
  }

  const query = SetQuery(topic);
 const dia =   today()

   

  // const url = `https://gnews.io/api/v4/search?&lang=en&q=${query}&max=70&sortby=publishedAt&from=2025-04-06T00:10:10Z&apikey=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const news = data.articles;
  const results = mapNews(news);
  setStorage({ topic, results });
  return results;
};
