import { AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAuth } from "./LoginSlice";

const LoginLandingPage = () => {
  const isAuth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", pass: "" });

  const handleCopyPaste = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.currentTarget?.name]: e.currentTarget?.value,
    }));

    e.preventDefault();
  };

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    // dispatch(isAuthenticate);
    navigate("/upload");
  };

  return (
    <Grid
      container
      item
      direction={"column"}
      gap={7}
      paddingTop={10}
      alignItems={"center"}
    >
      <Grid item width={500}>
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="input-user-name">UserName</InputLabel>
          <Input
            id="input-user-name-adornment"
            name="name"
            onCopy={handleCopyPaste}
            onPaste={handleCopyPaste}
            onChange={handleChange}
            value={formData.name}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item width={500}>
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="input-password">UserName</InputLabel>
          <Input
            id="input-password-adornment"
            name="pass"
            onCopy={handleCopyPaste}
            onPaste={handleCopyPaste}
            onChange={handleChange}
            value={formData.pass}
            type={"password"}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item width={500}>
        <FormControl variant="standard" fullWidth>
          <Button
            onClick={handleClick}
            variant="contained"
            disabled={!formData.name || !formData.pass}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}


export default LoginLandingPage;