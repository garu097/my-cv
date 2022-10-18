import styles from '@/styles/layout/footer.module.css';
import clsx from "clsx";

type Props = {};

export function Footer(props: Props) {
    return (
        <footer className={clsx('container_section', styles.container)}>
            <div className={styles.paragraph}>
                Website design, animation and code by <br/><span className={clsx("underline", styles.emphasize)}>Nguyen Ha</span>
            </div>
        </footer>
    );
}