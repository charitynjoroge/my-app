import { NavLink } from "react-router-dom";

const NavBar = () => {
  

  return (
    <header>
      <nav>
        <NavLink id="collection" to="/">Collection</NavLink>
        <NavLink id="list" to="/list">List</NavLink>
        <NavLink id="search" to="/search">Search</NavLink>

      </nav>
    </header>
  );
};
export default NavBar;
