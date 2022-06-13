import styles from "./Loader.module.css";

export default function () {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader}></div>
    </div>
  );
}
