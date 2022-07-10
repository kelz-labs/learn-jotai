import { atom } from "jotai";

// fetch API secara asynchoronous dengan memanfaatkan jotai
const url =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

export const pokemonAtom = atom(async () =>
  fetch(url).then((res) => res.json())
);
export const filterAtom = atom("");

/* 
Ada cara yang lebih clean ketimbang menambahkan filter di component, yaitu dengan set di atom jotainya. 
- Ketika si pokemonAtom atau filterAtom nya berubah nilai, maka si jotai bakal update filteredAtom karena ada dependedncy nya
*/

export const filteredAtom = atom((get) =>
  get(pokemonAtom).filter((poke) =>
    poke.name.english.toLowerCase().includes(get(filterAtom).toLowerCase())
  )
);
