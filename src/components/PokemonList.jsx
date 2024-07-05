import { Link } from "react-router-dom";

const PokemonList = (props) => {
  const pokemonListItems = props.pokemon.map((pokemon) => (
    <li key={pokemon.name}>
      <Link to={"/pokemon/" + pokemon._id}>{pokemon.name}</Link>
    </li>
  ));

  return (
    <>
      <h2>Pokemon</h2>
      <ul>{pokemonListItems}</ul>
    </>
  );
};

export default PokemonList;
