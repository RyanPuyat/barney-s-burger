import SearchOrder from '../features/order/SearchOrder';
import Footer from './Footer';
import Logo from './Logo';
import MainNav from './MainNav';

function Navbar({ open }) {
  const isHome = location.pathname === '/' || location.pathname === '/about';

  return (
    <div className="flex flex-row sm:gap-50">
      <Logo />

      <MainNav open={open} />

      {isHome ? '' : <SearchOrder />}
    </div>
  );
}

export default Navbar;
