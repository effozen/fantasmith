import {useLocation} from '@docusaurus/router';

import './index.css';

interface IFigureProps {
  readonly fileName: string;
  readonly alt: string;
  readonly caption: string;
  readonly width?: string;
  readonly baseDir: string;
}

export const Figure = ({fileName, alt, caption, width, baseDir}: IFigureProps) => {
  const location = useLocation();

  console.log(`/media/${baseDir}${location.pathname}/${fileName}`);

  return (
    <figure>
      <img className="figure_img" src={`/media/${baseDir}${location.pathname}/${fileName}`} alt={alt} width={width || '60%'}/>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
