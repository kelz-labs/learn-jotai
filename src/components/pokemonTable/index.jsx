const PokemonTable = ({ filteredPokemon }) => {
  return (
    <table className="w-full border-2 mt-8 border-black">
      <thead>
        <tr>
          <th className="border-r-2 border-black text-2xl">Nama Pokemon</th>
          <th className="text-2xl">Skills</th>
        </tr>
      </thead>
      <tbody className="border-2 border-black">
        {/*Cara lama
          pokemon
          .filter((poke) =>
            poke.name.english.toLowerCase().includes(filterPokemon.toLowerCase)
          )
          .map((poke) => (
            <tr key={poke.id}>
              <td>{poke.name.english}</td>
              <td>{poke.type.join(", ")}</td>
            </tr>
          ))
        */}

        {/* Cara baru dengan memanfaatkan jotai */}
        {filteredPokemon.map((poke) => (
          <tr className="border-2 text-center border-black" key={poke.id}>
            <td className="border-2 border-black">{poke.name.english}</td>
            <td>{poke.type.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
