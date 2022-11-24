export type PokeTypes =
  | "normal"
  | "fighting"
  | "flying"
  | "ground"
  | "poison"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

export const background: { [key in PokeTypes]: string } = {
  normal: "#AAA67F",
  fighting: "#C12239",
  flying: "#A891EC",
  ground: "#DEC16B",
  poison: "#A43E9E",
  rock: "#B69E31",
  bug: "#A7B723",
  ghost: "#70559B",
  steel: "#B7B9D0",
  fire: "#F57D31",
  water: "#6493EB",
  grass: "#74CB48",
  electric: "#F9CF30",
  psychic: "#FB5584",
  ice: "#9AD6DF",
  dragon: "#7037FF",
  dark: "#75574C",
  fairy: "#E69EAC",
  unknown: "#526677",
  shadow: "#4F507B",
};
