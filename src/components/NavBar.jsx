import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link className="main" to="/">
        Movie
      </Link>
      <Link className="search">Search 🔍</Link>
      <Link className="login" to="/login">
        login
      </Link>
      <Link className="mypage"to="/mypage">myPage</Link>
    </nav>
  );
};

export default NavBar;
