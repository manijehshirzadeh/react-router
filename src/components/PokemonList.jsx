const PokemonList = (props) => {
  const pokemonListItems = props.pokemon.map((pokemon) => (
    <li key={pokemon.name}>{pokemon.name}</li>
  ));
  return (
    <>
      <h2>Pokemon</h2>
      <ul>{pokemonListItems}</ul>
    </>
  );
};

export default PokemonList;
