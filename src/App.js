import { lazy, Suspense } from "react";
// import PokemonList from "./PokemonList";
import { ErrorBoundary } from "./ErrorBoundary";
import "./App.css";

const PokemonList = lazy(() => import("./PokemonList"));

function Loader() {
  return <div>Loading Component...</div>;
}

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallback={<h2>El API no funciona</h2>}>
          <PokemonList />
        </ErrorBoundary>
        <ErrorBoundary fallback={<h2>El API no funciona</h2>}>
          <PokemonList apiURL="https://pokeapi.co/api/v2/pokemon" />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
