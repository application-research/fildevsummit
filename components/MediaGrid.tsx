import styles from '@components/MediaGrid.module.scss';

import MediaBlock from './MediaBlock';

const getGridStyle = (media) => {
  const length = media.length;

  if (length === 2) {
    return styles.grid2Cols;
  } else if (length === 3) {
    return styles.grid3Cols;
  } else if (length === 4) {
    return styles.grid4Cols;
  } else {
    return 'repeat(1, minmax(0, 1fr))';
  }
};

export default function MediaGrid({ media, title, id }) {
  if (media.length < 1) return <></>;
  const gridStyle = getGridStyle(media);

  return (
    <div className={`${styles.mediaContainer} ${gridStyle}`} style={{ display: 'grid', gap: '1rem' }}>
      {title && <h1 className={styles.title}>{title}</h1>}

      {media?.map((mediaItem, index) => {
        const { desc, heading, subtitle, smallDesc, title } = mediaItem;

        return (
          <a className={styles.link} href={mediaItem?.media?.link ?? ''} target="_self">
            <figure key={index} className={styles.imageWrapper}>
              <MediaBlock {...mediaItem} className={styles.image} />
            </figure>
            <div style={{ display: 'grid', rowGap: '0.2rem' }}>
              <div className={styles.headingContainer} style={{ paddingTop: '1rem', paddingBottom: '0.5rem' }}>
                {heading && <h4 className={styles.heading}>{mediaItem.heading}</h4>}
              </div>
              {title && <p className={styles.title}>{mediaItem.title}</p>}

              <div className={styles.headingContainer}>
                {subtitle && <p className={styles.subtitle}>{mediaItem.subtitle}</p>}
                {smallDesc && <p className={styles.smallDesc}>{mediaItem.smallDesc}</p>}
              </div>
              {desc && <p className={styles.smallDesc}>{mediaItem.desc}</p>}
            </div>
          </a>
        );
      })}
    </div>
  );
}
