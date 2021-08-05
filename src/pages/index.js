import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    num: 1,
    title: 'Community Sourced',
    iconName: 'brain',
    description: (
      <>
       Bring your ideas to reality here at CordX we are a 100% Community Based ShareX solution and Suggestions are welcome.
      </>
    ),
  },
  {
    num: 2,
    title: 'Always Supportive',
    iconName: 'comments',
    description: (
      <>
        ShareX is Complicated, Let us do all the Hard Work, Link Creation, DNS Customization & Multi-Tasking for you.
      </>
    ),
  },
  {
    num: 3,
    title: ' Easy to Use',
    iconName: 'book-open',
    description: (
      <>
       CordX is a Well Documenteted Application with a Friendly, Dedicated, Reliable and ready to help Support Team.
      </>
    ),
  },
];

function Feature({num, title, iconName, description}) {
  const iconStyles = `fa fa-${iconName} fa-stack-1x fa-inverse`;
  const circleStyles = `fa fa-circle fa-stack-2x accent${num}`;
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {iconStyles && (
        <div className="text--center">
          <br />
          <span className="fa-stack fa-3x">
            <i className={circleStyles}></i>
            <i className={iconStyles}></i>
          </span>
          <br /><br />
        </div>
      )}
      <h3 className="text--center">
        {title}
      </h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const {siteConfig = {}} = useDocusaurusContext();
  return (
    <Layout
      title='Home'
      description={siteConfig.customFields.metaDescription}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={useBaseUrl('img/BA0AD0B5-3757-4A15-B6CB-99670D119494.png')} height="100px" />
          <br /><br />
          <h1 className="hero__title" style={{ color: 'white' }}>{siteConfig.title}</h1>
          <p className="hero__subtitle" style={{ color: 'white' }}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Learn More
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
