import { useDocumentTitle } from "../../hooks";
import Categories from "./Categories";
import Hero from "./Hero";

export default function () {
  useDocumentTitle("Home | Aegis Store");

  return (
    <>
      <Hero />
      <Categories />
    </>
  );
}
