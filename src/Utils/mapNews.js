import { RandomNumb } from "./randomNumb";

export const mapNews = (noticias) => {
  if (!noticias) return;

  return noticias.map((item) => ({
    id: RandomNumb(),
    titulo: item.title,
    desc: item.description,
    cont:item.content,
    fecha: item.publishedAt,
    img: item.image,
  }));
};
