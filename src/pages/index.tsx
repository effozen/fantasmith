import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={"${siteConfig.title} | 동기화의 힘을 믿는 개발자의 작업 공간"}
      description="Zen's Atelier은 개발자의 블로그, 기술문서, 포트폴리오를 한곳에 모아둔 공간입니다. '동기화'를 중심 가치로 삼아, 팀워크와 코드의 조화로 더 큰 성과를 이루는 방법을 탐구합니다. 개발 지식, 협업 팁, 프로젝트 경험을 통해 개발자와 팀의 성장을 돕는 다양한 인사이트를 제공합니다."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
