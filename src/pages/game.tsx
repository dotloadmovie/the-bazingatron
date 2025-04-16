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
} from "@mui/material";
import { useAtom } from "jotai";

import { Value, Result } from "../engine/engine";
import { usernameAtom } from "../atoms/user";
import { resultsAtom } from "../atoms/results";
import { colors } from "../theme/colors";
import { compare } from "../engine/engine";
import { random } from "../utils/random";

type Players = {
  player1: "" | Value;
  player2: "" | Value;
};

const Game = () => {
  const [username, setUsername] = useAtom(usernameAtom);
  const [results, setResults] = useAtom(resultsAtom);

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

    return `${
      winner?.winner === "player1" ? "You" : "Sheldon"
    }, because ${winner?.value?.toUpperCase()} ${winner?.reason.toUpperCase()}`;
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

  const renderGame = () => {
    if (!players.player1) {
      return (
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
      );
    }

    return (
      <Box>
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: colors.primary, fontSize: 14 }}
            >
              You chose
            </Typography>
            <Typography variant="h2">
              {players.player1.toUpperCase()}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: colors.primary, fontSize: 14 }}
            >
              Sheldon chose
            </Typography>
            <Typography variant="h2">
              {players.player2?.toUpperCase()}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: colors.primary, fontSize: 14 }}
            >
              The winner is...
            </Typography>
            <Typography variant="h2">{renderWinner()}</Typography>
          </CardContent>
        </Card>
        <Button onClick={handleRestart}>Play Again?</Button>
      </Box>
    );
  };

  return (
    <>
      {username === "" ? (
        <div
          onClick={() => {
            setUsername("Dave");
          }}
        >
          Set username to Dave
        </div>
      ) : (
        <div>
          <Typography variant="h1" sx={{ color: colors.primary }}>
            The Game!
          </Typography>
          <Typography variant="body1">
            Welcome {username as string}, you seem a worthy opponent. Pit your
            wits against the fiendish mind of Sheldon Cooper.
          </Typography>

          {renderGame()}
        </div>
      )}
    </>
  );
};

export default Game;
