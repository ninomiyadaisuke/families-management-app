import { VFC, memo } from 'react';

import { Spacer } from 'components/atoms/Utilities';

import styles from 'styles/components/atoms/upcomming_events.module.scss';

type Props = {
  events: string[];
};

const UpcommingEvents: VFC<Props> = memo((props) => {
  const { events } = props;

  return (
    <>
      <div className={styles.event}>
        <p>UPCOMING EVENTS</p>
        <span></span>
        <ul>
          {events.length > 0 ? (
            events.map((event, i) => (
              <>
                <li key={i}>{event}</li>
                <Spacer size={'xxs'} />
              </>
            ))
          ) : (
            <li>直近1ヶ月のイベントはありません</li>
          )}
        </ul>
      </div>
    </>
  );
});

export default UpcommingEvents;
