export const MenuIcon = ({emoji, title, link}: {emoji: string, title: string, link: string}) => {
  return (
    <a href={link} className='menu-icon'>
      <div className='menu-icon-emoji'>{emoji}</div>
      <div className='menu-icon-title'>{title}</div>
    </a>
  );
}