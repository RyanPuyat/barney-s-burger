import AboutUs from './AboutUs';

import Carousel from './Carousel';
import Hero from './Hero';
import SocialIcons from './SocialIcons';
import { getMenu } from '../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';

function HomePage() {
  const menu = useLoaderData();
  // const isLoading = navigation.state === 'loading';

  return (
    <>
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
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default HomePage;
