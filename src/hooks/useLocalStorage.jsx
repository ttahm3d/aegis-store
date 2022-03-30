import { useState } from "react";

export default function (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key)) || initialValue;
      return data;
    } catch (e) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
