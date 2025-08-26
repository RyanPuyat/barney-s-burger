import { NavLink } from 'react-router-dom';

const textStyle = ({ isActive }) =>
  `font-semibold underline-offset-4 text-xl ${
    isActive
      ? 'underline text-yellow-500'
      : 'text-orange-500 hover:text-yellow-500'
  }`;

function MainNav({ open, setOpen }) {
  return (
    <nav className="flex items-center">
      <ul
        className={`fixed top-0 left-0 z-40 h-screen w-64 transform bg-orange-100 p-8 transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'} z-8 flex flex-col justify-center gap-12 text-center md:static md:flex md:h-auto md:w-auto md:translate-x-0 md:transform-none md:flex-row md:gap-12 md:bg-transparent md:p-0`}
      >
        <li>
          <NavLink to="/" className={textStyle} onClick={() => setOpen(false)}>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orderPage"
            className={textStyle}
            onClick={() => setOpen(false)}
          >
            <span>Menu</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={textStyle}
            onClick={() => setOpen(false)}
          >
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={textStyle}
            onClick={() => setOpen(false)}
          >
            <span className="whitespace-nowrap">Contact Us</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
