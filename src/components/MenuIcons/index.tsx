import './MenuIcon.css';
import {MenuIcon} from "@site/src/components/MenuIcons/MenuIcon";

export const MenuIcons = () => {
  return (
    <div className='container menu-list'>
      <MenuIcon emoji='🧑‍💻' title='About' link={'/about'}/>
      <MenuIcon emoji='📝' title='Blog' link={'/blog'}/>
      <MenuIcon emoji='💻' title='Dev' link={'/development'}/>
      <MenuIcon emoji='🏃' title='Project' link={'/project'}/>
    </div>
  );
}