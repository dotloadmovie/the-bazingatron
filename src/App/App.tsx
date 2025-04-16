import { Routes, Route, Link } from "react-router";
import { Game, Settings, LeaderBoard } from "../pages";

function App() {
  return (
    <>
      <div>
        <Link to="/">Game</Link>
        <Link to="/leaderboard">Leader Board</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
