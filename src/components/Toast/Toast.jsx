import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ({ message, type }) {
  return toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
    type: type,
    transition: Slide,
    closeOnClick: true,
    pauseOnHover: false,
  });
}
