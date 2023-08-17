'use client';

import { formatAirtableMetaData, getSpeakers } from '@root/resolvers/airtable-import';
import { makeRequest } from '@root/common/utilities';
import { SCHEDULE_SINGAPORE } from '@root/content/schedule-singapore';
import { useEffect, useState } from 'react';
import Schedule from './Schedule';
import Speakers from './Speakers';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function ScheduleIceland({ scheduleData }) {
  const [icelandData, setIcelandData] = useState(null);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    if (scheduleData?.airtable?.tableName) {
      const fetchData = async () => {
        const iceland = await makeRequest({ endpoint: 'airtable/singapore' });
        const formattedAirtableData = formatAirtableMetaData(iceland.data);
        const fetchedSpeakers = getSpeakers(formattedAirtableData);
        setIcelandData(formattedAirtableData);
        setSpeakers(fetchedSpeakers);
      };

      fetchData();
    }
  }, [scheduleData]);

  if (!icelandData) return null;

  const calendarData = SCHEDULE_SINGAPORE;
  const submitTrack = {
    text: 'submit a track or talk for Singapore',
    url: 'https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90',
  };

  return (
    <>
      <div style={{ display: 'grid', rowGap: '7rem' }}>
        <Schedule calendarData={calendarData} submitTrack={submitTrack} />
        {speakers.length > 0 && (
          <div style={{ display: 'grid', rowGap: '2rem' }}>
            <h1 style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-weight-light' }}> Speakers</h1>
            <Speakers speakers={speakers} />
          </div>
        )}
      </div>
    </>
  );
}
