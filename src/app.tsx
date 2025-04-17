import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Routes, Route } from "react-router";
import { useAtom } from "jotai";

import { usernameAtom } from "./atoms/user";
import { colors } from "./theme/colors";
import { Game, Settings, LeaderBoard } from "./pages";
import ProtectedRoute from "./components/protectedroutes/protectedroutes";
import Header from "./components/header/header";
import logo from "./assets/logo.svg";
import Menu from "./components/menu/menu";

function App() {
  const [username] = useAtom(usernameAtom);

  const renderMenu = () => {
    return username === "" ? <></> : <Menu />;
  };

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{ background: colors.primary }}
      >
        <Container>
          <Header logo={<img src={logo} />} menu={renderMenu()} />
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
