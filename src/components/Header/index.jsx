import { NavLink } from "react-router-dom";
import "./style.css";
import { PATHS } from "../../router/paths";

const Header = () => {
  return (
    <header>
      <nav>
        <p className="hero">Header Hero</p>
        <ul>
          <li>
            <NavLink to={PATHS.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.PRODUCT.ROOT}>Products</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.ADMIN.ROOT}>Admin</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
