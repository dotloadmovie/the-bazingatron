import { useAtom } from "jotai";
import { Avatar, Typography, Grid } from "@mui/material";

import { colors } from "../theme/colors";
import { resultsAtom } from "../atoms/results";
import { usernameAtom } from "../atoms/user";

import Block from "../components/block/block";

const LeaderBoard = () => {
  const [results] = useAtom(resultsAtom);
  const [username] = useAtom(usernameAtom);

  const resultValues = JSON.parse(results as string);

  return (
    <div>
      <Block>
        <Typography variant="h1" sx={{ color: colors.primary }}>
          Leaderboard!
        </Typography>

        <Grid container sx={{ marginTop: "20px" }}>
          <Grid size={{ xs: 12, md: 6 }} justifyItems={"center"}>
            <Avatar
              alt={username as string}
              sx={{
                width: 120,
                height: 120,
                fontSize: 80,
                background: colors.secondary,
              }}
            >
              {(username as string).split("")[0]}
            </Avatar>
            <p>{username as string}</p>
            <Typography variant="h4" sx={{ color: colors.secondary }}>
              {resultValues.player1}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} justifyItems={"center"}>
            <Avatar
              alt="Computer"
              sx={{
                width: 120,
                height: 120,
                fontSize: 80,
                background: colors.tertiary,
              }}
            >
              C
            </Avatar>
            <p>Computer</p>
            <Typography variant="h4" sx={{ color: colors.tertiary }}>
              {resultValues.player2}
            </Typography>
          </Grid>
        </Grid>
      </Block>
    </div>
  );
};

export default LeaderBoard;
