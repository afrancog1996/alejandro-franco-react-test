import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Modal,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers";
import moment, { Moment } from "moment";

const ModalEmployee = (props: any) => {
  const [formData, setFormData] = useState({ name: "", pass: "",  });
  const [value, setValue] = useState<Moment | null>(moment("2022-04-07"));
  const handleClose = () => props.setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target?.name]: e.target?.value,
    }));
  };

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid
        container
        item
        direction={"column"}
        gap={7}
        paddingTop={10}
        alignItems={"center"}
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Grid item width={"50%"}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-user-name">UserName</InputLabel>
            <Input
              id="input-user-name-adornment"
              name="name"
              onChange={handleChange}
              value={formData?.name}
            />
          </FormControl>
        </Grid>
        <Grid item width={"50%"}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-password">UserName</InputLabel>
            <Input
              id="input-password-adornment"
              name="pass"
              onChange={handleChange}
              value={formData?.pass}
            />
          </FormControl>
        </Grid>
        <Grid item width={"50%"}>
          <FormControl variant="standard" fullWidth>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                disableFuture
                label="Responsive"
                openTo="year"
                views={["year", "month", "day"]}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>
        <Grid item width={"50%"}>
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
          <FormControl variant="standard" fullWidth>
            <Button
              onClick={handleClose}
              variant="contained"
              endIcon={<CancelIcon />}
              sx={{ marginTop: "5%" }}
            >
              Cancel
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ModalEmployee;
