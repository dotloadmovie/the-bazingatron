import { useAtom } from "jotai";
import { results as resultsAtom } from "../atoms/results";
import { username as usernameAtom } from "../atoms/user";
import { Typography } from "@mui/material";
import { colors } from "../theme/colors";

const LeaderBoard = () => {
  const [results] = useAtom(resultsAtom);
  const [name] = useAtom(usernameAtom);

  const resultValues = JSON.parse(results as string);

  return (
    <div>
      <Typography variant="h1" sx={{ color: colors.primary }}>
        The Leaderboard!
      </Typography>

      <div>
        {name}: {resultValues.player1}
      </div>

      <div>Sheldon: {resultValues.player2}</div>
    </div>
  );
};

export default LeaderBoard;
