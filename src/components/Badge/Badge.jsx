import styles from "./Badge.module.css";

export default function ({ icon, text, number }) {
  return (
    <div className={styles.badge}>
      <div className={styles.badge__icon}>{icon}</div>
      <div className={styles.badge__text}>{text}</div>
      {number !== 0 && number !== null && (
        <div className={styles.badge__number}>{number > 9 ? "9+" : number}</div>
      )}
    </div>
  );
}
