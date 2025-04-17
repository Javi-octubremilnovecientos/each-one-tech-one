import { create } from "zustand";
import { newsFetch } from "../Services/api";
import { mapNews } from "../Utils/mapNews";

const useSearchStore = create((set) => ({
  news: null,
  loading: true,
  error: false,
  singleNew: null,
  heading: null,

  setSearchApp: async (params) => {
   

    try {
      const noticias = await newsFetch(params);
      const results = mapNews(noticias);
      set({
        news: results,
        loading: false,
        error: false,
        heading:params
      });
    } catch {
      set({
        heading: params,
        error: true,
        loading: false,
      });
    }
  },
 SingleNew: (noticia) => {
    set(() => ({
      singleNew: noticia
    }));
  },

}));

export default useSearchStore;
