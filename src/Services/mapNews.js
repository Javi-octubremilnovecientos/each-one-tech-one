import { RandomNumb } from "../Utils/randomNumb";
import {formatDate}  from "../Utils/formatter"
export const mapNews = (noticias) => {
  
  if (!noticias) return;

  return noticias.map((item) => ({
    id: RandomNumb(),
    titulo: item.title,
    desc: item.description,
    cont: item.content,
    fecha: formatDate(item.publishedAt),
    img: item.image,
  }));
};
