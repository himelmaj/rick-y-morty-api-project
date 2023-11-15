import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex justify-between py-3 my-5 mx-3">
      <NavLink className="navlink-design" to={"/"}>
        <h3>Home</h3>
      </NavLink>
      <NavLink className="navlink-design" to={"/characters"}>
        <h3>Characters</h3>
      </NavLink>
      <NavLink className="navlink-design" to={"/locations"}>
        <h3>Locations</h3>
      </NavLink>
      <NavLink className="navlink-design" to={"/episodes"}>
        <h3>Episodes</h3>
      </NavLink>
    </nav>
  );
}
