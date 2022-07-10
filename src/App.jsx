import { useAtom, Provider } from "jotai";
import { filterAtom, filteredAtom, pokemonAtom } from "./store";
import { Suspense } from "react";
import FilterInput from "./components/filterInput";
import PokemonTable from "./components/pokemonTable";
import Loading from "./components/loading";

const App = () => {
  const [filterPokemon, setFilterPokemon] = useAtom(filterAtom);
  const [pokemon] = useAtom(pokemonAtom);
  const [filteredPokemon] = useAtom(filteredAtom);

  /* fetch dengan useEffect
  const url =
    "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setPokemon);
    }, []);
  */

  return (
    <>
      <h1 className="font-bold text-3xl">Pokemon Search</h1>
      <FilterInput
        filterPokemon={filterPokemon}
        setFilterPokemon={setFilterPokemon}
      />
      {/*<p>{filterPokemon}</p>
        <div>
        <h1>Hasil</h1>
        <p>{JSON.stringify(pokemon)}</p>
      </div>*/}
      <PokemonTable filteredPokemon={filteredPokemon} pokemon={pokemon} />
    </>
  );
};

export default () => (
  <Provider>
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-center mt-4 items-center w-[80%]">
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </div>
    </div>
  </Provider>
);
