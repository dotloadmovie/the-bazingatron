import { useState } from "react";
import {
  MenuItem,
  Select,
  Typography,
  FormControl,
  Box,
  Button,
  Card,
  CardContent,
  SelectChangeEvent,
  TextField,
  Grid,
} from "@mui/material";
import { useAtom } from "jotai";

import { Value, Result } from "../engine/engine";
import { usernameAtom } from "../atoms/user";
import { resultsAtom } from "../atoms/results";
import { colors } from "../theme/colors";
import { compare } from "../engine/engine";
import { random } from "../utils/random";
import Block from "../components/block/block";

type Players = {
  player1: "" | Value;
  player2: "" | Value;
};

const Game = () => {
  const [username, setUsername] = useAtom(usernameAtom);
  const [results, setResults] = useAtom(resultsAtom);

  const [localname, setLocalname] = useState("");

  const [players, setPlayers] = useState<Players>({
    player1: "",
    player2: "",
  });

  const [winner, setWinner] = useState<Result | null>(null);

  const values: Value[] = ["lizard", "paper", "rock", "scissors", "spock"];

  const setLeaderboardResult = (winner: string) => {
    const newResults = JSON.parse(results as string);

    newResults[winner] += 1;

    setResults(JSON.stringify(newResults));
  };

  const renderWinner = () => {
    if (winner?.winner === "draw") {
      return "It was a draw!";
    }

    return `because ${winner?.value?.toUpperCase()} ${winner?.reason.toUpperCase()}`;
  };

  const calculateWinner = (player1: Value, player2: Value) => {
    if (player1 && player2) {
      const calculatedWinner = compare(player1, player2);

      setWinner(calculatedWinner);

      calculatedWinner.winner !== "draw" &&
        setLeaderboardResult(calculatedWinner.winner);
    }
  };

  const handleGamePlay = (evt: SelectChangeEvent) => {
    const player1 = evt.target.value as Value;
    const player2 = values[random(0, values.length)];

    calculateWinner(player1, player2);

    setPlayers({ player1, player2 });
  };

  const handleRestart = () => {
    setWinner(null);
    setPlayers({ player1: "", player2: "" });
  };

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setLocalname(evt.target.value);
  };

  const handleNameSave = () => {
    setUsername(localname);
  };

  const renderSplash = () => {
    return (
      <Block>
        <Typography variant="h1" sx={{ color: colors.primary }}>
          Welcome!
        </Typography>
        <p>Please enter a username to begin the game</p>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <Grid container display="flex">
            <Grid>
              <TextField
                id="user-name"
                label="Set username"
                defaultValue={""}
                variant="outlined"
                onChange={handleNameChange}
              />
            </Grid>
            <Grid>
              {" "}
              <Button
                sx={{
                  background: colors.primary,
                  color: colors.white,
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
                onClick={handleNameSave}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Block>
    );
  };

  const renderGame = () => {
    if (!players.player1) {
      return (
        <>
          <Typography variant="h1" sx={{ color: colors.primary }}>
            The Game!
          </Typography>
          <p>
            Welcome {username as string}, you seem a worthy opponent. Choose
            your weapon!
          </p>

          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select value={players.player1} onChange={handleGamePlay}>
              <MenuItem disabled value="">
                Choose your weapon!
              </MenuItem>

              {values.map((val) => {
                return (
                  <MenuItem value={val} key={val}>
                    {val.toUpperCase()}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </>
      );
    }

    return (
      <>
        <Typography variant="h1" sx={{ color: colors.primary }}>
          {winner?.winner === "draw" && "It was a draw!"}
          {winner?.winner !== "draw" && (
            <>{winner?.winner === "player1" ? "You won!" : "Computer won!"}</>
          )}
          <br />
          <>
            ({players.player1} v {players.player2})
          </>
        </Typography>
        <Typography variant="h4">{renderWinner()}</Typography>

        <Button
          onClick={handleRestart}
          sx={{
            background: colors.primary,
            color: colors.white,
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          Play Again?
        </Button>
      </>
    );
  };

  return (
    <>
      {username === "" ? (
        renderSplash()
      ) : (
        <div>
          <Block>{renderGame()}</Block>
        </div>
      )}
    </>
  );
};

export default Game;
