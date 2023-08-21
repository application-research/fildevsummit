import styles from '@components/Speakers.module.scss';

import TwitterSVG from './svgs/TwitterSVG';

export default function Speakers({ speakers, speakerStyles }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {speakers.map((speaker, index) => {
          const { firstName, title, twitterUrl, spkrTitle, headshot } = speaker;

          const headShotSrc = headshot && headshot[0]?.url ? headshot[0]?.url : '/media/placeholder.png';
          // console.log(speakerStyles, 'speaker styles');
          return (
            <div key={index}>
              {twitterUrl ? (
                <a href={twitterUrl} className={styles.link} target="_blank">
                  <SpeakerCard {...speaker} {...speakerStyles} headShotSrc={headShotSrc} />
                </a>
              ) : (
                <SpeakerCard {...speaker} {...speakerStyles} headShotSrc={headShotSrc} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SpeakerCard({ borderColor, textColor, headShotSrc, firstName, spkrTitle, title, twitterUrl }) {
  console.log(borderColor, textColor, 'border & text color');

  return (
    <div className={styles.speakerContainer} style={{ border: `1px solid ${borderColor ? borderColor : 'var(--color-black)'} ` }}>
      {headShotSrc && <img className={styles.headshot} alt={firstName} src={headShotSrc} />}

      <div className={styles.col}>
        <div style={{ display: 'grid', rowGap: '0.5rem' }}>
          {firstName && (
            <p className={styles.firstName} style={{ color: textColor ? textColor : 'var(--color-black)' }}>
              {firstName}
            </p>
          )}
          {spkrTitle && (
            <p className={styles.spkrTitle} style={{ color: textColor ? textColor : 'var(--color-black)' }}>
              {spkrTitle}
            </p>
          )}
        </div>
        {twitterUrl && <TwitterSVG className={styles.logo} width="1rem" height="2rem" props={{ height: '1rem', width: '1rem' }} />}
        {/* {title && <p className={styles.trackTitle}>{title}</p>} */}
      </div>
    </div>
  );
}
