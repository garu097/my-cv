import styles from "@/src/styles/common/spinner.module.css";

export function Spinner() {
  return <div className={styles.lds_dual_ring}></div>;
}
