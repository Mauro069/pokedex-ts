import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/interfaces";

// Simple in-memory cache to avoid unnecessary requests
const pokemonCache = new Map<string, IPokemon>();

export const usePokemon = (url?: string, id?: string) => {
  const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

  const fetchPokemon = async () => {
    if (id && pokemonCache.has(id)) {
      setPokemon(pokemonCache.get(id));
      return;
    }

    if (url) {
      const { data }: { data: IPokemon } = await axios.get(url);
      setPokemon(data);
      pokemonCache.set(data.id.toString(), data);
    } else if (id) {
      const { data }: { data: IPokemon } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(data);
      pokemonCache.set(id, data);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [url, id]);

  return { pokemon };
};
