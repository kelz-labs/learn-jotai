import { atom } from "jotai";

//const link = "https://berita-indo-api.vercel.app/v1/kumparan-news";
// export const apiAtom = atom(fetch(link).then((res) => res.json()));

export const dataAtom = atom([]);
export const filterAtom = atom("");

export const filteredAtom = atom((get) =>
  get(dataAtom).filter((no) =>
    no.title.toLowerCase().includes(get(filterAtom).toLowerCase())
  )
);
