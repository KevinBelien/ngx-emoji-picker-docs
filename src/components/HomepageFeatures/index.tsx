import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Performant',
    Svg: require('@site/static/img/performance___icon.svg').default,
    description: (
      <>
        Optimized for performance with <span  className="text--primary" style={{ fontWeight: 'bold' }}>virtual scrolling</span>, fast filtering, and rendering for smooth interactions, even with large emoji sets.
      </>
    )
    
  },
  {
    title: 'Localization',
    Svg: require('@site/static/img/localization___icon.svg').default,
    description: (
   <>
      Fully supports localization, including filtering emojis. 
      Learn more in the <a href="/docs/localization"  style={{ fontWeight: 'bold' }}>localization section</a> of the docs.
    </>
    ),
  },
  {
    title: 'Light & Dark mode',
    Svg: require('@site/static/img/light-dark_mode___icon.svg').default,
    description: (
    <>
      Give your users light and dark theme choices. Learn more in the <a href="/docs/styling"  style={{ fontWeight: 'bold' }}>styling section</a> of the docs.

    </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{rowGap: '3rem'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
