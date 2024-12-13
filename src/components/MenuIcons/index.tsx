import './MenuIcon.css';
import {MenuIcon} from "@site/src/components/MenuIcons/MenuIcon";

export const MenuIcons = () => {
  return (
    <div className='container menu-list'>
      <MenuIcon emoji='🧑‍💻' title='About' link={'/About'}/>
      <MenuIcon emoji='📝' title='Growth' link={'/Growth'}/>
      <MenuIcon emoji='🔬' title='Dev-Lab' link={'/Dev-Lab'}/>
      <MenuIcon emoji='🏃' title='Project' link={'/Project'}/>
    </div>
  );
}