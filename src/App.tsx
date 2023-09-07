import React from "react";
import { MovieContainer } from "./Components/MovieContainer";
import { Header } from "./Components/Header";

import { FiltersProvider } from './Hooks/handleFilters'

function App() {
  return (
    <>
      <FiltersProvider>
        <Header />
        <MovieContainer />
      </FiltersProvider>
    </>
  );
}

export default App;
