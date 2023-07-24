import { HeaderStyle, LogoNavBar, LogoSpanNavBar, NavBar } from "./HeaderStyle";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyle>
      <LogoNavBar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Poké<LogoSpanNavBar>dex</LogoSpanNavBar>
        </Link>
      </LogoNavBar>
      <nav>
        <NavBar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </NavBar>

        <NavBar>
          <Link
            to="/pokelist"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Pokédex
          </Link>
        </NavBar>
        <NavBar>
          <Link
            to="/region"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Regiões
          </Link>
        </NavBar>
        <NavBar>Favoritos</NavBar>
        <NavBar>
          <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
            Login
          </Link>
        </NavBar>
      </nav>
    </HeaderStyle>
  );
};
