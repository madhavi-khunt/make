// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use setTimeout to ensure scroll happens after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Optional: Adds smooth scroll
      });
    }, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
