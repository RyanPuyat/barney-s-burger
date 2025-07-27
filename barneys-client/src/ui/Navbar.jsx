import SearchOrder from '../features/order/SearchOrder';
import Footer from './Footer';
import Logo from './Logo';
import MainNav from './MainNav';

function Navbar({ open, setOpen }) {
  const isHome =
    location.pathname === '/' ||
    location.pathname === '/about' ||
    location.pathname === '/contact';

  return (
    <div className="flex flex-row gap-[50px]">
      <Logo />

      <MainNav open={open} setOpen={setOpen} />

      {isHome ? '' : <SearchOrder />}
    </div>
  );
}

export default Navbar;
