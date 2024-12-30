import styles from "./styles.module.css";
import ReactPlayer from "react-player";
import React, { useState, ReactNode, useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { useLocation } from "@docusaurus/router";
import clsx from "clsx";

interface IVideoPlayerProps {
  readonly url: string;
  readonly playing?: boolean;
  readonly muted?: boolean;
  readonly caption: string;
  readonly href?: string;
  readonly width?: string;
}

export const VideoPlayer = ({
  url,
  playing = false,
  muted = true,
  caption,
  href,
  width = "80%",
}: IVideoPlayerProps) => {
  const { colorMode } = useColorMode();
  const location = useLocation();
  const [captionAnchor, setCaptionAnchor] = useState<ReactNode>(caption);

  useEffect(() => {
    if (href) {
      const anchor = React.createElement(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
        },
        caption
      );
      setCaptionAnchor(anchor);
    }
  }, []);

  return (
    <div className={styles.videoContainer}>
      <figure className={styles.videofigure}>
        <ReactPlayer
          playing={playing}
          muted={muted}
          url={url}
          controls
          width={width}
        />
        <figcaption className={styles.caption}>{captionAnchor}</figcaption>
      </figure>
    </div>
  );
};
