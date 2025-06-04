import { createContext, useEffect, useState } from "react";

interface ContextProps {
  team: string[];
  addPokemon: (url: string) => void;
  removePokemon: (url: string) => void;
}

export const TeamContext = createContext<ContextProps>({} as ContextProps);

const TeamProvider = ({ children }: any) => {
  const [team, setTeam] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("team");
    if (stored) {
      try {
        setTeam(JSON.parse(stored));
      } catch {
        setTeam([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  const addPokemon = (url: string) => {
    setTeam((prev) => {
      if (prev.includes(url) || prev.length >= 6) return prev;
      return [...prev, url];
    });
  };

  const removePokemon = (url: string) => {
    setTeam((prev) => prev.filter((p) => p !== url));
  };

  return (
    <TeamContext.Provider value={{ team, addPokemon, removePokemon }}>
      {children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
