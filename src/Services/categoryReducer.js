import React from "react";

export const initialState = {
  query:[],
  noticias: [],
};

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case 0:
      return {
        ...state,
        query: "",
      };

    case 1:
      return {
        ...state,
        query:[...state.query, "Software OR Develop OR Microsoft OR Macbook OR Windows"]
      };

    case 2:
      return {
        ...state,
        query:[...state.query,"Smartphone OR Iphone OR samsung galaxy OR xiaomi OR huawei OR app"] 
      };

    case 3:
      return {
        ...state,
        query:[...state.query,"gadget OR gadgets OR release"] 
      };

    case 4:
      return {
        ...state,
        query:[...state.query,'"A.I." OR artificial intelligence' ] 
      };
    case 5:
      return {
        ...state,
        query:[...state.query,'regulation OR politics' ] 
      };
      case "storeNews":
        return {
          ...state,
          noticias: [...state.noticias, action.payload], // Agrega las noticias al array
        };

    default:
        return state
  }
};
