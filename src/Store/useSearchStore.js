import { create } from "zustand";
import { newsFetch } from "../Services/setNewsFetch";
import { mapNews } from "../Services/mapNews";
import { checkLocalStorage } from "../Services/setLocalStorage";


const useSearchStore = create((set) => ({
  news: null,
  events:null,
  repashody:null,
  loading: true,
  error: false,



  SearchHeadlines: async (topic) => {
    try {
      const noticias = await newsFetch(topic);
     
      set({
        news: noticias,
        loading: false,
        error: false,
      });
    } catch {
      set({
        error: true,
        loading: false,
      });
    }
  },
  SearchRapsodhy: async () => {
    const topic = "rapshody"
    const check = checkLocalStorage(topic);
   
     if (check) {
      
       set({
         events: check.results,
         loading: false,
         error: false,
       });
     }
  
    try {
      const noticias = await newsFetch(topic);
       
      set({
        rapshody: noticias,
        loading: false,
        error: false,
      });
    } catch {
      set({
        error: true,
        loading: false,
      });
    }
  },
  SearchEvents: async () => {
    try {
       const topic = "fair OR event"
       const check = checkLocalStorage(topic);
      
        if (check) {
         
          set({
            events: check.results,
            loading: false,
            error: false,
          });
        }
     
      const resp = await fetch( `https://gnews.io/api/v4/top-headlines?apikey=7f3054217762260e72da5c2e9f323a08&category=technology&lang=en&q=${topic}%20OR%20meeting&in=title,description`)
     const data = await resp.json()
     const noticias = data.articles
     const results = mapNews(noticias)
    //  setStorage({ topic, results })
     

      set({
        events: results,
        loading: false,
        error: false,
      });
    } catch {
      set({
        error: true,
        loading: false,
      });
    }
  },
  SingleNew: (noticia) => {
    set(() => ({
      singleNew: noticia,
    }));
  },
}));

export default useSearchStore;
