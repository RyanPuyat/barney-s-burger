import BarneysLogo from '../assets/logo.png';

function Logo() {
  return (
    <div className="hidden md:block">
      <img src={BarneysLogo} alt="barneyslogo" className="logo-img" />
    </div>
  );
}

export default Logo;
