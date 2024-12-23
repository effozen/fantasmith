import clsx from "clsx";
import {useColorMode} from "@docusaurus/theme-common";

export const MenuIcon = ({emoji, title, link}: {emoji: string, title: string, link: string}) => {
  const {colorMode} = useColorMode();

  return (
    <a href={link} className='menu-icon'>
      <div className={clsx('menu-icon-emoji', {'menu-icon-shadow': colorMode === 'light', 'menu-icon-background': colorMode === 'dark'})}>{emoji}</div>
      <div className='menu-icon-title'>{title}</div>
    </a>
  );
}