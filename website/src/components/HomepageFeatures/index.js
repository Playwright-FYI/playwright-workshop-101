import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Core Concepts',
    Svg: require('@site/static/img/undraw-intro.svg').default,
    description: (
      <>
        Learn why Test Automation is critical for modern web apps. Learn core Playwright concepts for implementing reliable end-to-end tests.
      </>
    ),
  },
  {
    title: 'Developer Tools',
    Svg: require('@site/static/img/undraw-setup.svg').default,
    description: (
      <>
        Learn about the Playwright Test Runner and explore its powerful tools for authoring, debugging, reporting, and profiling, e2e tests.
      </>
    ),
  },
  {
    title: 'Guided Projects',
    Svg: require('@site/static/img/undraw-test.svg').default,
    description: (
      <>
        Apply learning to real projects and understand the end-to-end developer experience in writing, running, and reporting, e2e test specs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
