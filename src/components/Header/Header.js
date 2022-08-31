import './Header.css';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Icons from '../Icons/Icons';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo />
      </div>

      <Menu />

      <Icons className='header__profile'/>
    </header>
  );
};

export default Header;