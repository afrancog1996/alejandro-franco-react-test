import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { useGetEmployeesQuery } from "../../app/api/EmployeesApi";
import ModalEmployee from "./ModalEmployee";

interface Column {
  id: string;
  label?: string;
  minWidth: number;
}

interface Employees {
  id: number;
  name: string;
  last_name: string;
  birthday: number;
}

const columns: Column[] = [
  {
    id: "name",
    label: "Name",
    minWidth: 170,
  },
  {
    id: "last_name",
    label: "Last Name",
    minWidth: 100,
  },
  {
    id: "birthday",
    label: "Birthday",
    minWidth: 100,
  },
];

const EmployeesLandingPage = () => {
  const { data, isError, isLoading } = useGetEmployeesQuery();
  const [page, setPage] = useState(0);
  const [searchvalue, setSearchValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (event: any) => {
    setSearchValue(event.target?.value);
  };

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error... </div>;

  return (
    <>
      <ModalEmployee open={open} setOpen={setOpen} />
      <Grid
        container
        sx={{
          width: "100%",
          direction: "row",
          justifyContent: "center",
          marginTop: "3%",
        }}
      >
        <Grid item sx={{ width: "50%" }}>
          <Paper sx={{ width: "100%" }}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="input-user-name">Search input</InputLabel>
              <Input
                id="input-user-name-adornment"
                onChange={handleSearch}
                onClick={handleSearch}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
              <Button onClick={() => setOpen(true)} variant="outlined">
                Create
              </Button>
            </FormControl>

            <TableContainer sx={{ maxHeight: "auto" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column: any, index: number) => (
                      <TableCell
                        key={index}
                        style={{ top: 57, minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data?.employees
                    .filter((row: any) =>
                      row.name.toLowerCase().includes(searchvalue.toLowerCase())
                    )
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: any, index: number) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={index}
                        >
                          {columns.map((column: any, index: number) => {
                            const value = row[column?.id];
                            return (
                              <TableCell key={index}>
                                {column?.id === "birthday"
                                  ? moment(value).format("YYYY/MM/DD")
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data?.data?.employees.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeesLandingPage;
