// @ts-ignore
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '@/styles/common/timeline.module.css';
import {ITimeLine} from "@/constant/type";

type Props = {
    listTimeLine: ITimeLine[]
};

export function Timeline(props: Props) {
    return (
        <VerticalTimeline layout={"1-column-left"}>
            {props.listTimeLine?.map(timeline => (
                <VerticalTimelineElement
                    key={timeline.date}
                    position={"right"}
                    className={`vertical-timeline-element--work ${styles.item}`}
                    contentStyle={timeline.contentStyle}
                    contentArrowStyle={timeline.contentArrowStyle}
                    date={timeline.date}
                    dateClassName={styles.date}
                    iconStyle={{
                        background: `#ffffff url('${timeline.iconURL}') no-repeat center`,
                        backgroundSize: 'contain'
                    }}
                >
                    <h3 className={`vertical-timeline-element-title ${styles.title}`}>{timeline.title}</h3>
                    <h4 className={`vertical-timeline-element-subtitle ${styles.subtitle}`}>{timeline.subTitle}</h4>
                    <p className={styles.paragraph}>
                        {timeline.paragraph}
                    </p>
                </VerticalTimelineElement>))}
        </VerticalTimeline>

    );
}