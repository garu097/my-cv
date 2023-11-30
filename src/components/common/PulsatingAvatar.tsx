import styles from "@/styles/common/pulsatingAvatar.module.css";
import Image from "next/image";

export function PulsatingAvatar() {
  return (
    <div className={styles.avatar_border}>
      <div className={styles.avatar}>
        <Image
          alt="avatar"
          src="/images/saitamar.jpeg"
          width={128}
          height={128}
          className={styles.image}
        />
      </div>
    </div>
  );
}
