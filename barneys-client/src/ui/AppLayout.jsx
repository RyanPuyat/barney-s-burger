import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Loading from './Loading';
import Image from '../assets/BG-web.png';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const isHome = location.pathname === '/';

  return (
    <>
      <div className="container">
        <div className={isHome ? 'bg-layout' : 'layout'}>
          {isHome && <img src={Image} alt="Background" className="bg-image" />}

          {isLoading && <Loading />}
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
