import { NavLink } from 'react-router-dom';

function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orderpage">
            <span>Menu</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <span>About Us</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
