import React, { useEffect } from "react";
import {
  Typography,
  FormControl,
  TextField,
  Button,
  Snackbar,
  Grid,
} from "@mui/material";
import { useAtom } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router";

import { colors } from "../theme/colors";
import { usernameAtom } from "../atoms/user";
import { resultsAtom } from "../atoms/results";

import Block from "../components/block/block";

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
    <Block>
      <Typography variant="h1" sx={{ color: colors.primary }}>
        Settings!
      </Typography>

      <Grid container sx={{ marginTop: "20px" }}>
        <Grid>
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Button
              sx={{ background: colors.primary, color: colors.white }}
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
        </Grid>

        <Grid size={{ xs: 12 }}>
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Grid container display="flex">
              <Grid>
                <TextField
                  id="user-name"
                  label="Set username"
                  variant="outlined"
                  value={localname}
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid>
                <Button
                  sx={{
                    background: colors.primary,
                    color: colors.white,
                    paddingTop: "14px",
                    paddingBottom: "14px",
                  }}
                  onClick={handleNameSave}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </Block>
  );
};

export default Settings;
