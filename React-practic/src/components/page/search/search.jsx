import react from "react";

import "./search.css";
const Search = () =>{
  return(
    <>
    
    <h1>Movie Hearch</h1>
    <div className="Search-container">
      <input type="search" placeholder="Search" className="searchInput" />
      <button className="searchbtn">search</button>

    </div>
    </>
  );
}
export default Search;