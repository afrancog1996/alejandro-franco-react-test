import { AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCredentials, isLogingout, selectAuth } from "./LoginSlice";

const LoginLandingPage = () => {
  const isAuth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({ name: "", pass: "" });
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [isAuth]);

  const handleClose = () => setOpen(false);

  const handleCopyPaste = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target?.name]: e.target?.value,
    }));
  };

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    dispatch(getCredentials(formData)).then((res) => {
      if (res.payload) {
        setOpen(true);
      }
    });
    e.preventDefault();
  };

  return (
    <div>
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
              value={formData?.name}
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
              value={formData?.pass}
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
        <Grid item width={500}>
          {isAuth !== "invalid" && (
            <FormControl variant="standard" fullWidth>
              <Button onClick={() => dispatch(isLogingout())} variant="contained">
                You are logged, do you want log out?
              </Button>
            </FormControl>
          )}
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You are logged
          </Typography>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginLandingPage;
