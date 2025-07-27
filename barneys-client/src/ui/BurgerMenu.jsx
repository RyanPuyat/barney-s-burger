// import { useState } from 'react';
import Navbar from './Navbar';

function BurgerMenu({ open, setOpen }) {
  // const [open, setOpen] = useState(false);

  // const toggleMenu = () => {
  //   setOpen(!open);
  // };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`absolute top-[30%] left-8 z-10 flex h-8 w-8 cursor-pointer flex-col justify-around border-none bg-transparent p-0 md:hidden ${
          open ? 'open' : ''
        }`}
      >
        <div
          className={`h-1 w-8 origin-left rounded-full transition-all duration-300 ease-in-out ${
            open ? 'rotate-45 bg-stone-500' : 'bg-orange-500'
          }`}
        />
        <div
          className={`h-1 w-8 origin-left rounded-full transition-all duration-300 ease-in-out ${
            open
              ? 'translate-x-5 opacity-0'
              : 'translate-x-0 bg-orange-500 opacity-100'
          }`}
        />
        <div
          className={`h-1 w-8 origin-left rounded-full transition-all duration-300 ease-in-out ${
            open ? '-rotate-45 bg-stone-500' : 'bg-orange-500'
          }`}
        />
      </button>
      <Navbar open={open} setOpen={setOpen} />
    </div>
  );
}

export default BurgerMenu;
