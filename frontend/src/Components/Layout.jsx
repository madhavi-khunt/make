import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure it scrolls on every route change
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
    