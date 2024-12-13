import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {IconContext} from "react-icons";
import clsx from "clsx";

import styles from './index.module.css';

export const SocialIcons = () => {
  return (
    <IconContext.Provider value={{className: "text-primary", size: '2rem'}}>
      <div className={clsx('container flex-center', styles.margin56, styles.gap19)}>
        <a href='https://github.com/effozen'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/effozen/'><FaLinkedin/></a>
        <a href='mailto:ashgrayblue0@gmail.com'><MdEmail/></a>
      </div>
    </IconContext.Provider>
  );
}