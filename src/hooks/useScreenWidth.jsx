import { useEffect, useState } from "react";

export default function () {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}
