import { useLocation } from '@docusaurus/router';

import styles from './styles.module.css';
import React, { useState, useEffect, ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';

interface IFigureProps {
  readonly fileName: string;
  readonly alt: string;
  readonly caption: string;
  readonly href?: string;
  readonly width?: string;
  readonly height?: string;
}

export const Figure = ({ fileName, alt, caption, href, width, height }: IFigureProps) => {
  const { colorMode } = useColorMode();
  const location = useLocation();
  const path = `/media${location.pathname}img/${fileName}`;
  const [captionAnchor, setCaptionAnchor] = useState<ReactNode>(caption);

  useEffect(() => {
    if (href) {
      const anchor = React.createElement(
        'a',
        {
          href,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        caption
      );
      setCaptionAnchor(anchor);
    }
  }, []);

  return (
    <div className={styles.figureContainer}>
      <figure className={styles.figure}>
        <img
          className={clsx(styles.img, colorMode === 'light' ? styles.imgLight : styles.imgDark)}
          src={path}
          alt={alt}
        />
        <figcaption className={styles.figcaption}>{captionAnchor}</figcaption>
      </figure>
    </div>
  );
};
