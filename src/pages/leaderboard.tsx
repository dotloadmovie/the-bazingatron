import { useAtom } from "jotai";
import { Typography } from "@mui/material";

import { colors } from "../theme/colors";
import { resultsAtom } from "../atoms/results";
import { usernameAtom } from "../atoms/user";

const LeaderBoard = () => {
  const [results] = useAtom(resultsAtom);
  const [username] = useAtom(usernameAtom);

  const resultValues = JSON.parse(results as string);

  return (
    <div>
      <Typography variant="h1" sx={{ color: colors.primary }}>
        The Leaderboard!
      </Typography>

      <div>
        {username}: {resultValues.player1}
      </div>

      <div>Sheldon: {resultValues.player2}</div>
    </div>
  );
};

export default LeaderBoard;
