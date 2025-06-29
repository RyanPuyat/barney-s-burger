import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function AppLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
        {/* <h1>Content</h1> */}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
