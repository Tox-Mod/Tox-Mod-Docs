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
    title: 'Auto Moderation',
    iconName: 'lock',
    description: (
      <>
       Anti-Spam, Anti-Raid and Anti-Links/Invites and more. All the Auto-Mod features you need to help keep your Server Toxicity Free and your Members Happy!.
      </>
    ),
  },
  {
    num: 2,
    title: 'Custom Dashboard',
    iconName: 'globe',
    description: (
      <>
        Update your Server Settings, Manage the Bots Settings, View Server and Global Infractions and more. All from the comfort of your Phone or PC.
      </>
    ),
  },
  {
    num: 3,
    title: 'Warn/Rep System',
    iconName: 'book-open',
    description: (
      <>
       Let your Members know when they do something wrong, Keep track of who has been warned for what. Saved globally to be viewed/user as a Reputation System.
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
          <img src={useBaseUrl('img/E795CF4F-43F3-4FBE-A183-6B85EBA4C20E.gif')} height="100px" />
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
