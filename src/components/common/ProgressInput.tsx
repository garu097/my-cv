import clsx from "clsx";
import styles from "@/src/styles/common/progressInput.module.css";
import { motion } from "framer-motion";

type Props = {
  percent: number;
  name: string;
};

export default function ProgressInput(props: Props) {
  return (
    <>
      <div className={styles.progressbar}>
        <svg className={styles.progressbar__svg}>
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            className={clsx(styles.progressbar__svg_circle, styles.circle, styles.shadow)}
            initial={{
              strokeDashoffset: 440,
            }}
            animate={{ strokeDashoffset: 440 - (440 * props.percent) / 100 }}
            transition={{ duration: 2 }}
          />
        </svg>
        <p className={clsx(styles.progressbar__text, styles.shadow)}>
          {props.name}
          <br />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            {props.percent}%
          </motion.span>
        </p>
      </div>
    </>
  );
}
