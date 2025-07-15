import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import Username from '../user/Username';
import CartOverview from '../cart/CartOverview';

function Menu() {
  const menu = useLoaderData();

  return (
    <>
      <div className="min-h-[calc(100dvh-200px)] space-y-5 overflow-y-auto rounded-3xl border border-none bg-orange-100 p-4">
        <div className="flex h-16 flex-col items-center md:mr-20 md:ml-auto md:flex-row">
          <h1 className="text-2xl font-semibold md:absolute md:left-1/2 md:-translate-x-1/2 md:text-left">
            Barney's <span className="text-orange-500">Menu</span>
          </h1>
          <div className="flex items-center gap-2 md:ml-auto">
            <span className="text-xl font-semibold text-orange-500">Hi! </span>

            <Username />
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-y-30 lg:grid-cols-4 xl:grid-cols-5">
          {menu.map((burger) => (
            <MenuItem burger={burger} key={burger.id} />
          ))}
        </ul>
        <CartOverview />
      </div>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
