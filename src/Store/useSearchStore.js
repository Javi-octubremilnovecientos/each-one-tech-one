import React from "react";
import { create } from "zustand";
import { SearchFetch } from "../Services/searchFetch";

const useSearchStore = create((set) => ({
  news: null,
  loading: true,
  error: false,
  singleNew:null,

  setSearchApp: async () => {
    const params = "app OR software OR microsoft OR Aple OR develop";

    try {
      const noticias = await SearchFetch(params);

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
  setSearchCell: async () => {
    const params = "iphone OR xiaomi OR honor OR huawei";

    try {
      const noticias = await SearchFetch(params);
      set({
        news: noticias,
        loading: false,
      });
    } catch {
      set({
        error: true,
      });
    }
  },
  setSearchGadg: async () => {
    const { fetchNews } = SearchFetch();
    const params = "gadget OR review OR release";

    try {
      const noticias = await fetchNews({ params });
      set({
        news: noticias,
        loading: false,
      });
    } catch {
      set({
        error: true,
      });
    }
  },
  setSearchAI: async () => {
    const { fetchNews } = SearchFetch();
    const params = "AI OR 'A.I.' OR artificial intelligence";

    try {
      const noticias = await fetchNews({ params });
      set({
        news: noticias,
        loading: false,
      });
    } catch {
      set({
        error: true,
      });
    }
  },
  SingleNew: (noticia) => {
    const New = {
        titulo: noticia.title,
        imagen: noticia.image,
        descripcion: noticia.description,
        contenido:noticia.content

    }
   set({
    singleNew: New
   })
}
}));

export default useSearchStore;
