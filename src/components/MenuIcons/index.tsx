import './MenuIcon.css';
import {MenuIcon} from "@site/src/components/MenuIcons/MenuIcon";

export const MenuIcons = () => {
  return (
    <div className='container menu-list'>
      <MenuIcon emoji='🧑‍💻' title='About' link={'/about'}/>
      <MenuIcon emoji='📝' title='Growth' link={'/blog'}/>
      <MenuIcon emoji='🔬' title='Dev-Lab' link={'/dev-lab'}/>
      <MenuIcon emoji='🏃' title='Project' link={'/project'}/>
    </div>
  );
}