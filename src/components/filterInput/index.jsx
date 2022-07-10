const FilterInput = ({ filterPokemon, setFilterPokemon }) => {
  return (
    <input
      className="border-2 border-blue-500 p-1 outline-none focus:border-4 rounded-md w-[50%] mt-2"
      value={filterPokemon}
      onChange={(event) => setFilterPokemon(event.target.value)}
    />
  );
};

export default FilterInput;
