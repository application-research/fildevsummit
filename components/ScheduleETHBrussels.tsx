'use client';

import styles from '@components/Schedule.module.scss';

import { ensureMinimumEntries, formatAirtableMetaData, getFormattedAirtableFields, getSpeakers, sortCalendarDataByDate } from '@root/resolvers/airtable-import';
import { useState, useEffect } from 'react';
import Schedule from './Schedule';
import Speakers from './Speakers';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function SCHEDULE_ETH_BRUSSELS({ scheduleData }) {
  const [brusselsData, setBrusselsData] = useState<any[] | null>(null);
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (scheduleData?.airtable) {
      const organizeData = async () => {
        const formattedAirtableData = formatAirtableMetaData(scheduleData?.airtable?.data);
        const fetchedSpeakers = getSpeakers(formattedAirtableData);

        setBrusselsData(formattedAirtableData);
        setSpeakers(fetchedSpeakers);
      };

      organizeData();
    }
  }, [scheduleData]);

  const toggleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  if (!brusselsData) return null;

  const submitTalk = {
    text: 'Submit a Talk for FDS @ ETH Brussels',
    url: 'https://airtable.com/applHziZwJRdE1BK2/shrPRcDUUXfGIdYIn',
  };

  const formattedAirtableData = getFormattedAirtableFields(brusselsData);
  const calendarData = sortCalendarDataByDate(formattedAirtableData);
  const startPlaceholder = 'Mon, Jul 8';
  const endPlaceholder = 'Fri, Jul 12';
  const ensuredCalendarData = ensureMinimumEntries(calendarData, startPlaceholder, endPlaceholder);
  // console.log(ensuredCalendarData, 'calendar dataaa');
  return (
    <>
      <div style={{ paddingBottom: '2rem', display: 'grid', rowGap: '3rem' }}>
        {/* <div onClick={toggleExpandCollapse} className={styles.scheduleToggle}>
          <p>View Full Schedule & Event Speakers</p>

          <button aria-label="View Full Schedule" onClick={toggleExpandCollapse} className={styles.expandCollapseButton}>
            <div className={isExpanded ? styles.arrowUp : styles.arrowDown}></div>
          </button>
        </div> */}
        <Schedule calendarData={ensuredCalendarData} scheduleId={'schedule-ethbrussels'} />

        {/*expand after the event is over! {isExpanded && calendarData && <Schedule calendarData={calendarData} scheduleId={'schedule-ethbrussels'} />} */}

        {/* {isExpanded && submitTrack?.url && (
          <a href={submitTrack.url} className={styles.link} target="_blank">
            <section className={styles.callToAction}>
              <div className={styles.callToActionTextContainer}>
                <p className={styles.plusIcon}>+</p>
                <p className={styles.callToActionText}>{submitTrack.text}</p>
              </div>
            </section>
          </a>
        )} */}
        <a href={submitTalk.url} className={styles.link} target="_blank">
          <section className={styles.callToAction}>
            <div className={styles.callToActionTextContainer}>
              <p className={styles.plusIcon}>+</p>
              <p className={styles.callToActionText}>{submitTalk.text}</p>
            </div>
          </section>
        </a>

        <div style={{ display: 'grid', rowGap: '2rem' }}>
          <h1 style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-weight-light' }}> Speakers</h1>
          <Speakers speakers={speakers} />
        </div>
        {/* {isExpanded && speakers.length > 0 && (
          <div style={{ display: 'grid', rowGap: '2rem' }}>
            <h1 style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-weight-light' }}> Speakers</h1>
            <Speakers speakers={speakers} />
          </div>
        )} */}
      </div>
    </>
  );
}
