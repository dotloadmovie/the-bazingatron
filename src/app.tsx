import { Routes, Route } from "react-router";
import { useAtom } from "jotai";
import { Grid, Container } from "@mui/material";

import { usernameAtom } from "./atoms/user";
import { Game, Settings, LeaderBoard } from "./pages";
import ProtectedRoute from "./components/protectedroutes/protectedroutes";
import Header from "./components/header/header";
import logo from "./assets/logo.svg";
import Menu from "./components/menu/menu";
import Content from "./components/content/content";

function App() {
  const [username] = useAtom(usernameAtom);

  const renderMenu = () => {
    return username === "" ? <></> : <Menu />;
  };

  return (
    <>
      <Grid
        container
        display={"flex"}
        sx={{ height: "calc(100vh - 20px)" }}
        direction={"column"}
      >
        <Grid size={{ xs: 12 }} display={"flex"}>
          <Container>
            <Header logo={<img src={logo} />} menu={renderMenu()} />
          </Container>
        </Grid>
        <Grid
          size={{ xs: 12 }}
          display={"flex"}
          alignItems={"stretch"}
          flexGrow={1}
        >
          <Container>
            <Content>
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
            </Content>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
