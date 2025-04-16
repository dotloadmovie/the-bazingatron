import React, { useEffect } from "react";
import {
  Typography,
  FormControl,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import { useAtom } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router";

import { colors } from "../theme/colors";
import { usernameAtom } from "../atoms/user";
import { resultsAtom } from "../atoms/results";

const Settings = () => {
  const [username, setUsername] = useAtom(usernameAtom);
  const [, setResults] = useAtom(resultsAtom);
  const navigate = useNavigate();

  useEffect(() => {
    setLocalname(username as string);
  }, [username]);

  const [localname, setLocalname] = useState("");
  const [snackbar, setSnackbar] = useState(false);

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setLocalname(evt.target.value);
  };

  const handleNameSave = () => {
    setUsername(localname);
    setSnackbar(true);
  };

  const handleResetGame = () => {
    setUsername("");
    setResults(JSON.stringify({ player1: 0, player2: 0 }));

    navigate("/");
  };

  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  return (
    <div>
      <Typography variant="h1" sx={{ color: colors.primary }}>
        The Settings!
      </Typography>

      <div>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <TextField
            id="user-name"
            label="Set username"
            variant="standard"
            value={localname}
            onChange={handleNameChange}
          />
          <Button
            sx={{ background: colors.secondary, color: colors.white }}
            onClick={handleNameSave}
          >
            Save
          </Button>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <Button
            sx={{ background: colors.secondary, color: colors.white }}
            onClick={handleResetGame}
          >
            Reset game
          </Button>
          <Snackbar
            open={snackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={"Username saved"}
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Settings;
