import styles from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function ({ children, header, showModal, closeModal }) {
  return (
    <>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div>{header}</div>{" "}
              <div className={styles.icon} onClick={closeModal}>
                <AiOutlineClose />
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
