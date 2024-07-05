import { useParams } from "react-router-dom";

const PokemonDetails = (props) => {
  const params = useParams(); // retrieve the params via a hook

  const singlePokemon = props.pokemon.find(
    (pokemon) => pokemon._id == params.id
  );

  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight} pounds</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height} inches</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
