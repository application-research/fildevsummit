import styles from '@components/ImageWithOverlayText.module.scss';

import Image from './Image';

export default function ImageWithOverlayText({ alt, textColor, src, title, subtitle, rightSubheading }) {
  return (
    <div style={{ width: '100%' }} className={styles.container}>
      <div className={styles.textContainer} style={{ paddingBottom: '1rem' }}>
        <div className={styles.leftText} style={{ color: textColor ?? 'var(--color-white)' }}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {rightSubheading && (
          <p className={styles.rightText} style={{ paddingBottom: '2rem' }}>
            <strong style={{ color: textColor ?? 'var(--color-white)' }} className={styles.rightSubheading}>
              {rightSubheading}
            </strong>
          </p>
        )}
      </div>

      <Image className={`${styles.image} ${styles.imageAbsolute} ${styles.maxHeight}`} altText={alt ?? 'image'} src={src} />
    </div>
  );
}
