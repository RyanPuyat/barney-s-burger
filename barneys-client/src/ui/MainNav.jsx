import { NavLink } from 'react-router-dom';

const textStyle = ({ isActive }) =>
  `font-semibold underline-offset-4 ${
    isActive
      ? 'underline text-yellow-500'
      : 'text-orange-500 hover:text-yellow-500'
  }`;
function MainNav() {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-row gap-12">
        <li>
          <NavLink to="/" className={textStyle}>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orderpage" className={textStyle}>
            <span>Menu</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={textStyle}>
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={textStyle}>
            <span>About Us</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
