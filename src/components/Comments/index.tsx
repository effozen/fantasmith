import React, {useEffect, useRef} from 'react';
import {useColorMode} from "@docusaurus/theme-common";

const utterancesSelector = 'iframe.utterances-frame';

export const Comments = () => {
  const {colorMode} = useColorMode();

  const containerRef = useRef(null);
  const utterancesTheme = colorMode === 'dark' ? 'github-dark' : 'github-light';

  useEffect(() => {
    const utterancesEl = containerRef.current.querySelector(utterancesSelector);

    const createUtterancesEl = () => {
      const script = document.createElement('script');

      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'effozen/fantasmith-comments');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('label', 'comment');
      script.setAttribute('theme', utterancesTheme);
      script.crossOrigin = 'anonymous';
      script.async = true;

      containerRef.current.appendChild(script);
    };

    const postThemeMessage = () => {
      const message = {
        type: 'set-theme',
        theme: utterancesTheme,
      };
      utterancesEl.contentWindow.postMessage(message, 'https://utteranc.es');
    };
    utterancesEl ? postThemeMessage() : createUtterancesEl();
  }, [utterancesTheme]);
  return <div ref={containerRef}/>;
}
