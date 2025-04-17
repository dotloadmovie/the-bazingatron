import { HeaderWrapper } from "./header.style";
import { Grid } from "@mui/material";

type HeaderProps = {
  logo: React.ReactNode;
  menu: React.ReactNode;
};

const Header = ({ logo, menu }: HeaderProps) => {
  return (
    <div>
      <HeaderWrapper>
        <Grid container spacing={0}>
          <Grid display={"flex"} size={{ xs: 7 }}>
            {logo}
          </Grid>
          <Grid display={"flex"} size={{ xs: 5 }} justifyContent="end">
            {menu}
          </Grid>
        </Grid>
      </HeaderWrapper>
    </div>
  );
};

export default Header;
