import { Outlet, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import CartStorageSync from '../features/cart/CartStorageSync';
import Footer from './Footer';
import Navbar from './Navbar';
import Loading from './Loading';
import Image from '../assets/BG-web.png';

import BurgerMenu from './BurgerMenu';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const isHome =
    location.pathname === '/' ||
    location.pathname === '/about' ||
    location.pathname === '/contact';
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const ref = useOutsideClick(close);

  return (
    <div className="relative">
      {isLoading && <Loading />}
      <div className="container">
        <div className={isHome ? 'bg-layout' : 'layout'}>
          {isHome && (
            <img
              src={Image}
              alt="Background"
              className="bg-image hidden 2xl:block"
            />
          )}
          <CartStorageSync />

          <div className="mt-4 block md:hidden" ref={ref}>
            <BurgerMenu open={open} setOpen={setOpen} />
          </div>
          <div className="hidden md:block">
            <Navbar open={open} setOpen={setOpen} />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      {isHome && (
        <section>
          <Footer />
        </section>
      )}
    </div>
  );
}

export default AppLayout;
