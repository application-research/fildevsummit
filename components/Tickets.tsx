import styles from '@components/Tickets.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import Link from './Link';

export default function Tickets({ backgroundColor, borderColor, textColor, tickets }) {
  return (
    <div className={styles.container} style={{ color: textColor ?? 'var(--color-white)', backgroundColor: backgroundColor ?? 'transparent' }}>
      <div className={styles.row}>
        {tickets?.map((ticket, index) => {
          const { cta, description, price, name, img } = ticket ?? null;

          return (
            <div key={index} className={styles.column} style={{ border: `1px solid ${borderColor ? borderColor : 'red'}` }}>
              <div className={styles.itemContent}>
                {img && (
                  <Link href={cta?.link} target="_blank">
                    <img className={styles.image} src={img?.src} aria-label={img?.ariaLabel ?? 'image'} />
                  </Link>
                )}

                <section className={styles.textContent}>
                  {name && <h4 className={styles.name}>{name}</h4>}
                  {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
                </section>
              </div>

              <div className={styles.callToAction}>
                {cta && <CallToActionVariant type={cta.type} cta={cta} />}
                {price && <h3 className={styles.price}>{price}</h3>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
