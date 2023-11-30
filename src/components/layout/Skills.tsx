import { LIST_ITEM_NAVBAR, SKILLS } from "@/src/constant";
import styles from "@/src/styles/layout/skill.module.css";
import { Fade } from "react-awesome-reveal";
import ProgressInput from "@/src/components/common/ProgressInput";

export function Skills() {
  return (
    <section id={LIST_ITEM_NAVBAR.SKILL} className="container_section">
      <h2 className={`${styles.title} title_section`}>Skill</h2>

      <Fade style={{ width: "100%" }}>
        <div className={styles.content_section}>
          <div className={styles.content_container}>
            <h4 className={styles.content_title}>Language</h4>
            <div>
              {Object.keys(SKILLS.LANGUAGE).map((key) => (
                <ProgressInput
                  key={key}
                  name={SKILLS.LANGUAGE[key].NAME}
                  percent={SKILLS.LANGUAGE[key].PROGRESS}
                />
              ))}
            </div>
          </div>
          <div className={styles.content_container}>
            <h4 className={styles.content_title}>Framework</h4>
            <div>
              {Object.keys(SKILLS.FRAMEWORK).map((key) => (
                <ProgressInput
                  key={key}
                  name={SKILLS.FRAMEWORK[key].NAME}
                  percent={SKILLS.FRAMEWORK[key].PROGRESS}
                />
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
