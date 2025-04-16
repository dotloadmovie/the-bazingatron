import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

import { colors } from "../theme/colors";
import { Routes, Route, Link } from "react-router";
import { Game, Settings, LeaderBoard } from "../pages";

function App() {
  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{ background: colors.primary }}
      >
        <Container>
          <Toolbar disableGutters>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                color: colors.secondary,
                WebkitTextStroke: `1px ${colors.white}`,
              }}
              variant="h3"
            >
              Bazingatron!
            </Typography>

            <Button color="inherit">
              <Link style={{ color: "white" }} to="/">
                Game
              </Link>
            </Button>
            <Button color="inherit">
              <Link style={{ color: "white" }} to="/leaderboard">
                Leader Board
              </Link>
            </Button>
            <Button color="inherit">
              <Link style={{ color: "white" }} to="/settings">
                Settings
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
