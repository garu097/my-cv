import styles from '@/styles/common/spinner.module.css';

type Props = {};

export function Spinner(props: Props) {
    return (
        <div className={styles.lds_dual_ring}></div>
    );
}