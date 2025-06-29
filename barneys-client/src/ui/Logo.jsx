import BarneysLogo from '../assets/logo.png';
import '../../src/index.css';

function Logo() {
  return (
    <div>
      <img src={BarneysLogo} alt="barneyslogo" className="logo-img" />
    </div>
  );
}

export default Logo;
