import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, PokeDetail, Team } from "./pages";

import "./index.scss";
import PokemonProvider from "./context/PokemonContext";
import TeamProvider from "./context/TeamContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:pokeId",
    element: <PokeDetail />,
  },
  {
    path: "/team",
    element: <Team />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonProvider>
    <TeamProvider>
      <RouterProvider router={router} />
    </TeamProvider>
  </PokemonProvider>
);
