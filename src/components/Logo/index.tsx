import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {useEffect, useState} from "react";
import {useColorMode} from "@docusaurus/theme-common";

export function Logo({size = '200px'}: { size?: string }) {
  const [logoUrl, setLogoUrl] = useState<string>('');

  const {colorMode} = useColorMode();

  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    if (colorMode === 'light') {
      setLogoUrl('img/logo_black.webp');
    } else {
      setLogoUrl('img/logo_white.webp');
    }
  }, [colorMode]);



  return (
    <div className='container flex-center'>
      <img
        width={size}
        height={size}
        src={useBaseUrl(logoUrl)}
        alt={siteConfig.title}
      />
    </div>
  );
}