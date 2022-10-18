import {useEffect, useState} from "react";
import styles from '@/styles/common/scrollAnimation.module.css';

const ScrollButton = () => {

    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);


    return (
        <button className={styles.button} style={{display: visible ? 'block' : 'none'}} onClick={scrollToTop}>
            <img
                alt='icon-chevons-down'
                src='/icons/icon-chevons-down.svg'
            />
        </button>
    );
};

export default ScrollButton;