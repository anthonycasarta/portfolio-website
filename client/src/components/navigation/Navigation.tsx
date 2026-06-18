import { NavLink } from "react-router-dom";
import { NavigationContext } from "./_context";

import "./Navigation.css";

type NavItem = { to: string; label: string };

const NAV_ITEMS: NavItem[] = NavigationContext.navItems;
export const Navigation = () => {
  return (
    <header className="navigation">
      <div className="navigation__container">
        <nav className="navigation__links">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
