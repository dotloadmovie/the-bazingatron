import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Routes, Route, Link, Navigate } from "react-router";
import { useAtom } from "jotai";

import { username as usernameAtom } from "../atoms/user";
import { colors } from "../theme/colors";
import { Game, Settings, LeaderBoard } from "../pages";
import ProtectedRoute from "../components/protectedroutes/ProtectedRoutes";

function App() {
  const [username] = useAtom(usernameAtom);

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

            {username !== "" && (
              <>
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
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute username={username as string}>
                <LeaderBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute username={username as string}>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
