import { create } from "zustand";
import { newsFetch } from "../Services/setNewsFetch";
import { categoryReducer, initialState } from "../Services/categoryReducer";

const useSearchStore = create((set, get) => ({
  news: null,
  loading: true,
  error: false,
  singleNew: null,
  state: initialState,
  dispatch: (action) => {
    set((state) => {
      const newState = categoryReducer(state.state, action);
      return { state: newState };
    });
  },
  SearchHeadlines: async (query) => {
    const { state, dispatch } = get();
    console.log("Current state:", state); // Verifica el estado actual
  
    try {
      // Busca el índice de la query en el array
      const queryIndex = state.query.indexOf(query);
  
      if (queryIndex !== -1) {
        // Si la query ya existe, devuelve las noticias correspondientes

        return state.noticias[queryIndex];
      }
  
      // Si la query no existe, realiza la petición
      const news = await newsFetch(query);
  
      // Almacena la query y las noticias en el estado a través del reducer
      dispatch({ type: "storeNews", payload: news });
  
      // Sincroniza `news` con `state.noticias`
      set((state) => ({
        news: [...state.state.noticias], // Copia las noticias actualizadas
        loading: false,
        error: false,
      }));
    } catch (error) {
      console.error("Error fetching news:", error);
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
