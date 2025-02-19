import "./header.css"

const Header = () => {

  return(
    <center>
     

     <img src="netlify.png" alt="Netlify Logo" hright="100" weith="200" />
      <div className="header-buttons">

        <button className="btn">Netlfy</button>
        <button
        className="btn">watchlist</button>
      </div>
    </center>

  );
}
export default Header;