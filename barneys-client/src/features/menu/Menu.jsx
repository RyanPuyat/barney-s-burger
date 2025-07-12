import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import Username from '../user/Username';
import CartOverview from '../cart/CartOverview';

function Menu() {
  const menu = useLoaderData();

  return (
    <>
      <div className="min-h-[calc(100dvh-200px)] overflow-y-auto rounded-3xl border border-none bg-orange-100 p-4">
        <div className="relative flex h-16 items-center">
          <h1 className="absolute left-1/2 mb-4 -translate-x-1/2 transform text-3xl font-bold tracking-wider text-stone-500">
            Barney's <span className="text-orange-500">Menu</span>
          </h1>
          <div className="mr-50 ml-auto inline-flex max-w-[150px] items-center space-x-1 truncate">
            <span className="text-xl font-semibold text-orange-500">Hi! </span>

            <Username />
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-40 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
