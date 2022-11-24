import { useParams } from "react-router-dom";
import { PokemonDetail } from "../../components/PokemonDetail";
import { usePokemon } from "../../hooks/usePokemon";

export const PokeDetail = () => {
  const { pokeId } = useParams();
  const { pokemon } = usePokemon("", pokeId);

  return <PokemonDetail pokemon={pokemon!} />;
};
