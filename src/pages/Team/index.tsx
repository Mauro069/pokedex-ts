import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokeballIconSmall } from "../../assets/pokeball";
import { Pagination } from "../../components/Pagination";
import { TeamPokemonCard } from "../../components/TeamPokemonCard";
import { TeamContext } from "../../context/TeamContext";
import { usePagination } from "../../hooks/usePagination";

import styles from "./styles.module.scss";

export const Team = () => {
  const { team } = useContext(TeamContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();

  const perPage = 6;

  return (
    <div className={styles.team}>
      <header>
        <div onClick={backToHome} className={styles.homeLink}>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
        <Link to="/team" className={styles.current}>
          Mi Equipo
        </Link>
      </header>
      {team.length === 0 ? (
        <p className={styles.empty}>No hay Pokémon en tu equipo.</p>
      ) : (
        <>
          <div className={styles.list}>
            {team
              .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((url) => (
                <TeamPokemonCard key={url} url={url} />
              ))}
          </div>
          <Pagination
            page={page}
            perPage={perPage}
            nextPage={nextPage}
            previousPage={previousPage}
            maxItems={team.length}
          />
        </>
      )}
    </div>
  );
};
