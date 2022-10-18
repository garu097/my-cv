import {TypeAnimation} from 'react-type-animation';
import {LIST_ITEM_NAVBAR, PARAGRAPH_INTRODUCE, TEXT_INTRODUCE_SEQUENCE} from "@/constant";
import styles from '@/styles/layout/introduce.module.css';
import {PulsatingAvatar} from "../common/PulsatingAvatar";
import clsx from "clsx";
import {Fade} from "react-awesome-reveal";

type Props = {};

export function Introduce(props: Props) {
    return (
        <section id={LIST_ITEM_NAVBAR.HOME} className={styles.introduce}>
            <Fade>
                <h1 className={styles.introduce_title}> Hello! </h1>
                <PulsatingAvatar/>
                <TypeAnimation sequence={TEXT_INTRODUCE_SEQUENCE} wrapper="strong" repeat={Infinity}
                               className={styles.introduce_text}/>
                <p className={styles.introduce_paragraph}
                   dangerouslySetInnerHTML={{
                       __html: PARAGRAPH_INTRODUCE
                   }}/>

                <ul className={styles.introduce_nav}>
                    {Object.keys(LIST_ITEM_NAVBAR).slice(1).map(el => <li key={el}
                                                                          className={clsx(styles.nav_item, 'underline')}>
                        <a href={`#${LIST_ITEM_NAVBAR[el]}`}>{LIST_ITEM_NAVBAR[el]}</a>
                    </li>)}
                </ul>
            </Fade>
        </section>
    );
}