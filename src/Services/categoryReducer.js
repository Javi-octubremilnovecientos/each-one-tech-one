import React from "react";

export const initialState = {
  query: "",
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
        query: "Software OR Develop OR Microsoft OR Macbook OR Windows"
      };

    case 2:
      return {
        ...state,
        query: "Smartphone OR Iphone OR samsung galaxy OR xiaomi OR huawei OR app"
      };

    case 3:
      return {
        ...state,
        query: "gadget OR gadgets OR release"
      };

    case 4:
      return {
        ...state,
        query: 'ai OR "A.I." OR artificial intelligence' 
      };
    case 5:
      return {
        ...state,
        query: 'regulation OR politics' 
      };
    case "storeNews":
      return {
        ...state,
        noticias:[...noticias,action.payload ]
      };

    default:
        return
  }
};
