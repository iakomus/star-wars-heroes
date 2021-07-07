import { NavLink } from 'react-router-dom';
import { NavigationRoute } from 'src/interfaces/Navigation';
import { useTheme } from 'src/providers/ThemeProvider';
import StyledNav from 'src/styled-components/StyledNav';

const Navigation = ({
  routes,
}: {
  routes: Array<NavigationRoute>;
}): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const { PUBLIC_URL } = process.env;
  const toggleSrc = `${PUBLIC_URL}/${
    theme === 'light' ? 'mask-black.png' : 'mask-white.png'
  }`;

  return (
    <StyledNav>
      <NavLink className="logo" exact to="/">
        <img src={`${PUBLIC_URL}/logo256.png`} alt="Logo" />
        Start Wars Heroes
      </NavLink>
      <div className="menu">
        {routes.map(({ link, label }) => (
          <NavLink key={link} exact to={link} activeClassName="active">
            {label}
          </NavLink>
        ))}
        <button type="button" onClick={toggleTheme}>
          <img
            src={toggleSrc}
            alt={`Toggle Theme to ${theme === 'light' ? 'dark' : 'light'}`}
          />
        </button>
      </div>
    </StyledNav>
  );
};

export default Navigation;
