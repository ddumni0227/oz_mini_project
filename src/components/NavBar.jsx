import { Link } from "react-router"; //리액트라우터의 링크를 사용해서 경로이동처리
import { useState } from "react"; //상태관리를 위한 useState 훅 사용

const NavBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState(""); //로컬상태로 검색 입력값관리

  const searchChanged = (e) => {
    const value = e.target.value;
    setSearchInput(value); //로컬상태 업데이트
    if (onSearch) {
      onSearch(value);
    } // 상위컴포넌트(app)로 검색어 전달
  };
  return (
    <nav className="nav">
      <Link
        className="main"
        to="/"
        onClick={() => {
          setSearchInput(""); //검색어 초기화
          onSearch(""); //상위컴포넌트에 빈검색어
        }}
        //클릭시 검색창 입력한 내용을 지우고 메인화면으로 이동
      >
        Movie
      </Link>
      {/* 검색어 입력 */}
      <input
        type="text"
        className="search"
        placeholder="search.."
        value={searchInput}
        onChange={searchChanged} //입력변경시 상위 컴포넌트 전달
      ></input>
      {/* 로그인 마이페이지 */}
      <Link className="login" to="/login">
        login
      </Link>
      <Link className="mypage" to="/mypage">
        myPage
      </Link>
    </nav>
  );
};

export default NavBar;
