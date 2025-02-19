import { useState } from "react";
import Header from "./components/header/header";
import Search from "./components/page/search/search";
import MovieCard from "./components/moviecard/movieCard";


const App = () => {
return(
  <center>
  <Header/>
 <Search/>
 <MovieCard/>
  </center>
);
}
export default App;