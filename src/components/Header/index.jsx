import { NavLink } from "react-router-dom";
import "./style.css";
import { PATHS } from "../../router/paths";
import { useAuth } from "../../context/AuthContext";
import { ROLES } from "../../constant/Role";
import { useTheme } from "../../context/ThemeContext";
import { THEMES } from "../../constant/Theme";

const Header = () => {
  const { role, user, setRole } = useAuth();
  const { theme, handleToggleTheme } = useTheme();
  const handleLogout = () => {
    setRole(ROLES.GUEST);
  };
  return (
    <header className={theme}>
      <nav>
        <p className="hero">Header Hero</p>
        <ul>
          {role === ROLES.GUEST ? (
            <>
              <li>
                <NavLink to={PATHS.HOME}>Home</NavLink>
              </li>
              <li>
                <NavLink to={PATHS.ABOUT}>About</NavLink>
              </li>
              <li>
                <NavLink to={PATHS.LOIGN}>Login</NavLink>
              </li>
              <li>
                <NavLink to={PATHS.SIGNUP}>Sign up</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={PATHS.PRODUCT.ROOT}>Products</NavLink>
              </li>
              <li>
                <h5>Welcome {user}</h5>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
          <li>
            <button onClick={handleToggleTheme}>
              {theme === THEMES.DARK ? "Light" : "Dark"} Mode
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
