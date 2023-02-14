import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Modal,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment, { Moment } from "moment";
import { useState } from "react";
import { useSetEmployeeMutation } from "../../app/api/EmployeesApi";
import { IEmployee } from "../../react-app-env";
import Styles from "./Employee.styles";

const ModalEmployee = (props: any) => {
  const [setEmployee] = useSetEmployeeMutation();

  const [formData, setFormData] = useState<IEmployee>({
    name: "",
    last_name: "",
    birthday: "",
  });

  const [dateValue, setDateValue] = useState<Moment | null>(
    moment("2022-04-07")
  );

  const handleClose = () => props.setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target?.name]: e.target?.value,
    }));
  };

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    const birthday_date = moment(dateValue).format("YYYY/MM/DD");

    const dataToSend: IEmployee = {
      name: formData.name,
      last_name: formData.last_name,
      birthday: birthday_date,
    };

    setEmployee(dataToSend).then((res) => {
      alert(JSON.stringify(res));
    });

    e.preventDefault();
  };

  return (
    // <ThemeProvider theme={}>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          item
          sx={Styles.container}
        >
          <Grid item width={"50%"}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-user-name">Name: </InputLabel>
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
              <InputLabel htmlFor="input-password">Last Name: </InputLabel>
              <Input
                id="input-password-adornment"
                name="last_name"
                onChange={handleChange}
                value={formData?.last_name}
              />
            </FormControl>
          </Grid>
          <Grid item width={"50%"}>
            <FormControl variant="standard" fullWidth>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  disableFuture
                  label="Birthday"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={dateValue}
                  onChange={(newValue) => {
                    setDateValue(newValue);
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
                disabled={!formData.name || !formData.last_name || !dateValue}
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
    // </ThemeProvider>
  );
};

export default ModalEmployee;
