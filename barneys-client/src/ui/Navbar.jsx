import SearchOrder from '../features/order/SearchOrder';
import Footer from './Footer';
import Logo from './Logo';
import MainNav from './MainNav';

function Navbar() {
  const isHome = location.pathname === '/';

  return (
    <div>
      <Logo />
      <MainNav />
      {isHome ? '' : <SearchOrder />}
    </div>
  );
}

export default Navbar;
