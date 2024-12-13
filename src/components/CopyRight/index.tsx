import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from './index.module.css';

export default function Index() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <footer className={styles.copyright}>
      {siteConfig.themeConfig.footer.copyright}
    </footer>
  );
}