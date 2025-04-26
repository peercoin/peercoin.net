import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") {
      if (!window.location.hash) {
        setTimeout(() => {
          window.scrollTo(0, window.scrollY + 1);
        }, 16 + 1);
      }
      return;
    }

    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location, navigationType]);

  return null;
}

export default ScrollTop;
