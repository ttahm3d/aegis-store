import { useEffect } from "react";

export default function (title) {
  useEffect(() => {
    document.title = title;
  }, []);
}
