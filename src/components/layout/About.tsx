import clsx from "clsx";
import styles from "@/src/styles/layout/about.module.css";
import { FAVOURITE, LIST_TIMELINE, LIST_PROJECT, LIST_ITEM_NAVBAR, SIZE_ICON } from "@/src/constant";
import { Timeline } from "../common/Timeline";
import helper from "@/src/utils/helper";
import { Fade } from "react-awesome-reveal";

export function About() {
  return (
    <section id={LIST_ITEM_NAVBAR.ABOUT} className="container_section">
      <h2 className={`${styles.title} title_section`}>About</h2>
      {/* timeline */}
      <Fade>
        <div className={styles.content_section}>
          <div className={styles.content_container}>
            <h4 className={styles.content_title}>Career</h4>
            <Timeline listTimeLine={LIST_TIMELINE} />
          </div>
          <div className={styles.content_container}>
            <h4 className={styles.content_title}>Project</h4>
            <Timeline listTimeLine={LIST_PROJECT} />
          </div>
        </div>
      </Fade>

      {/* favourite */}
      <Fade className={styles.content_section}>
        <div className={clsx(styles.content_container, styles.content_favourite)}>
          <h4 className={styles.content_title}>Favourite</h4>
          <div className={styles.favourite_container}>
            {Object.keys(FAVOURITE).map((key) => (
              <div key={key} className={styles.favourite_item}>
                <h4 className={styles.favourite_title}>{helper.capitalizeFirstLetter(key)}</h4>
                <img
                  alt={key}
                  style={{
                    height: SIZE_ICON.LARGE.height,
                    width: SIZE_ICON.LARGE.width,
                  }}
                  src={FAVOURITE[key].icon}
                  className={styles.favourite_icon}
                />
                <p
                  className={styles.favourite_paragraph}
                  dangerouslySetInnerHTML={{
                    __html: FAVOURITE[key].description,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}
