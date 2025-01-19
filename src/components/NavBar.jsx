import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link className="main" to="/">
        Movie
      </Link>
      <Link className="search">Seach🔍</Link>
      <Link className="login">login</Link>
      <Link className="mypage">myPage</Link>
    </nav>
  );
};

export default NavBar;
