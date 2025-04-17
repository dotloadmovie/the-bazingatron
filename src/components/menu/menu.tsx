import { MenuItem, MenuStyled } from "./menu.styled";
import { Link } from "react-router";

const Menu = () => {
  return (
    <MenuStyled>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>

      <MenuItem>
        <Link to="/leaderboard">Leaderboard</Link>
      </MenuItem>

      <MenuItem>
        <Link to="/settings">Settings</Link>
      </MenuItem>
    </MenuStyled>
  );
};

export default Menu;
