import AboutUs from './AboutUs';

import Carousel from './Carousel';
import Hero from './Hero';
import SocialIcons from './SocialIcons';
import { getMenu } from '../services/apiRestaurant';
import { useLoaderData, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HeroSmallScreen from './HeroSmallScreen';
import Footer from './Footer';
import Loading from './Loading';

function HomePage() {
  const menu = useLoaderData();
  // const navigation = useNavigation();
  // const isLoading = navigation.state === 'loading';
  const location = useLocation();

  // if (isLoading) {
  //   return <Loading />;
  // }

  useEffect(() => {
    if (location.pathname === '/about') {
      const target = document.getElementById('about-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/contact') {
      const target = document.getElementById('contact-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  }, [location.pathname]);

  return (
    <>
      <section>
        <div className="grid grid-cols-1 2xl:mb-0 2xl:grid-cols-[1fr_2fr]">
          <div className="grid grid-rows-[auto_1fr]">
            <div className="hidden items-start 2xl:block">
              <Hero />
            </div>
            {/* <div className="flex items-center 2xl:hidden">
              <HeroSmallScreen />
            </div> */}
            <div className="hidden items-baseline-last 2xl:block">
              <SocialIcons />
            </div>
          </div>
          <div>
            <Carousel data={menu} />
          </div>
        </div>
      </section>

      <section className="mt-4 py-6">
        <div className="rounded-2xl bg-orange-100">
          <AboutUs />
        </div>
      </section>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default HomePage;
