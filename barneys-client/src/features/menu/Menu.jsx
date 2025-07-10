import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import Username from '../user/Username';

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="min-h-[calc(100dvh-200px)] overflow-y-auto rounded-3xl border border-none bg-orange-100 p-6">
      <h1>Barney's Menu</h1>
      <Username />

      <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-30 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {menu.map((burger) => (
          <MenuItem burger={burger} key={burger.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
