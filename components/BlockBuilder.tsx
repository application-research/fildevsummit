import styles from '@components/BlockBuilder.module.scss';

import { Block } from './Block';
import { CallToActionVariant } from './CallToActionVariant';

export default function BlockBuilder({ block, cta, title, subtitle, id, border, description, direction }) {
  return (
    <div id={id} style={{ display: 'grid', rowGap: '2rem', background: block.backgroundColor }}>
      {(title || description || subtitle) && (
        <section className={styles.row} style={{ borderBottom: border ? '1px solid var(--color-text)' : '' }}>
          <div style={{ display: 'grid', rowGap: '1rem' }}>
            {title && <h1 className={styles.mainTitle}>{title}</h1>}
            {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
            {description && <p>{description}</p>}
          </div>

          {cta && <CallToActionVariant cta={cta} type={cta.type} />}
        </section>
      )}

      <div className={`${direction == 'row' ? styles.directionRow : styles.directionColumn}`}>
        {block?.map((blockItem, index) => {
          return (
            <div key={index}>
              <Block block={blockItem} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
