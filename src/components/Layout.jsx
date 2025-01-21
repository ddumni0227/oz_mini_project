import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

const Layout = ({onSearch}) => {
  return (
    <>
      <NavBar onSearch={onSearch}/>
      {/* NavBar로 onSearch 전달 */}
      <main>
        <Outlet />
        {/* 하위라우트 페이지 렌더링 */}
      </main>
    </>
  );
};

export default Layout;
