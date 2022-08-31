import './Logo.css';
import LogoImg from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className='logo'>
      <img alt='logo' src={LogoImg}></img>
    </div>
  );
};

export default Logo;