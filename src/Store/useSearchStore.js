import { create } from "zustand";
import { newsFetch } from "../Services/setNewsFetch";


const useSearchStore = create((set) => ({
  news: null,
  loading: true,
  error: false,
  singleNew: null,

  SearchHeadlines: async (query) => {
    try {
      console.log(query)
      const noticias = await newsFetch(query);

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
  SingleNew: (noticia) => {
    set(() => ({
      singleNew: noticia,
    }));
  },
}));

export default useSearchStore;
