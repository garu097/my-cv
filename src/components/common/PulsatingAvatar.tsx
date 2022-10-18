import styles from '@/styles/common/pulsatingAvatar.module.css';
import Image from 'next/image';

type Props = {};

export function PulsatingAvatar(props: Props) {
    return (
        <div className={styles.avatar_border}>
            <div className={styles.avatar}>
                <Image src="/images/saitamar.jpeg" width={128}
                       height={128} className={styles.image}/>
            </div>
        </div>
    );
}