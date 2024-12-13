import clsx from "clsx";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CopyRight from '@site/src/components/CopyRight'
import {Logo} from "@site/src/components/Logo";
import {SocialIcons} from "@site/src/components/SocialIcons";
import {MainTitle} from "@site/src/components/MainTitle";
import {MenuIcons} from "@site/src/components/MenuIcons";

import styles from './index.module.css';
import {ColorModeToggleButton} from "@site/src/components/ColorModeToggle";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header>
      <div className="container">
        <Logo size='200rem'/>
        <SocialIcons/>
        <MainTitle/>
      </div>
    </header>
  );
}


export default function Home(): JSX.Element {

  return (
    <div className={styles.nav}>
      <Layout
        title="Home"
        description="Zen's Atelier은 개발자의 블로그, 기술문서, 포트폴리오를 한곳에 모아둔 공간입니다. '동기화'를 중심 가치로 삼아, 팀워크와 코드의 조화로 더 큰 성과를 이루는 방법을 탐구합니다. 개발 지식, 협업 팁, 프로젝트 경험을 통해 개발자와 팀의 성장을 돕는 다양한 인사이트를 제공합니다."
        noFooter={true}
      >
        <div className={styles.center}>
          <article className={styles.article}>
            <HomepageHeader/>
            <main>
              <MenuIcons/>
            </main>
            <div className={clsx('container', styles.color_mode_toggle)}>
              <ColorModeToggleButton/>
            </div>
          </article>
          <CopyRight/>
        </div>
      </Layout>
    </div>
  );
}
