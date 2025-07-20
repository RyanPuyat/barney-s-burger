import AboutUs from './AboutUs';

import Carousel from './Carousel';
import Hero from './Hero';
import SocialIcons from './SocialIcons';
import { getMenu } from '../services/apiRestaurant';
import { useLoaderData, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function HomePage() {
  const menu = useLoaderData();
  // const isLoading = navigation.state === 'loading';
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      const target = document.getElementById('about-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  return (
    <>
      <section>
        <div className="grid grid-cols-[1fr_2fr]">
          <div className="grid grid-rows-[auto_1fr]">
            <div className="flex flex-col items-start">
              <Hero />
            </div>
            <div className="flex items-baseline-last">
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
