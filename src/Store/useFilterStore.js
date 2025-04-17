import React from "react";
import { create } from "zustand";

export const useFilterStore = create((set, get) => ({
  today: new Date(),
  filtredNews: null,

  yesterdayNews: (news) => {
    const yesterdayNews = news.filter((noticia) => {
      const setDate = noticia.fecha.getDate();
      const hoy = get().today.getDate();
      return setDate === hoy - 1;
    });
    set({ filtredNews: yesterdayNews });
  },
  lastWeekNews: (news) => {
    const lastWeekNews = news.filter((noticia) => {
      const setDate = noticia.fecha.getDate();
      const hoy = get().today.getDate();
      return setDate < hoy - 1 && setDate > hoy - 7;
    });
    console.log("filtredo")
    set({ filtredNews: lastWeekNews });
  },
  resetFilter: () => {
    set({ filtredNews: null });
  },
}));
