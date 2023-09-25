import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { users } from "./api";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState(4);
  const [search, setSearch] = useState("");
  const [filterAge, setFilterAge] = useState("");
  const [age, setAge] = useState("");

  const Person = users
    .filter((item) => {
      return search.toLowerCase() === "" && filterAge.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search) &&
            item.age.toLowerCase().includes(filterAge);
    })
    .map((item) => (
      <h3 sx={{ display: "flex", flexDirection: "column" }} key={item.id}>
        {item.name},{item.age}
      </h3>
    ));

  const handleSelect = (event) => {
    setAge(event.target.value);
    setValue(event.target.value);
  };
  const recordsPerPage = value;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const npage = Math.ceil(Person.length / recordsPerPage);
  const numbers = [
    ...Array(Math.ceil(Person.length / recordsPerPage) + 1).keys(),
  ].slice(1);

  let listing = <div>No Data!</div>;
  if (Person.length > 0) {
    listing = Person.slice(firstIndex, lastIndex);
  }

  const handleChangePage = (e, p) => {
    setCurrentPage(p);
  };
  const PaginationRounded = () => {
    return (
      <Stack spacing={2}>
        <Pagination
          count={npage}
          variant="outlined"
          shape="rounded"
          onChange={handleChangePage}
        />
      </Stack>
    );
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction='row' spacing={3}>
          <TextField
            id="outlined-basic"
            label="Name"
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Age"
            onChange={(e) => setFilterAge(e.target.value)}
            variant="outlined"
          />
        </Stack>
        {listing}
        <Stack direction="row">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            width="300px"
          >
            <Typography>By page:</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">numbers</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handleSelect}
                value={age}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={11}>all</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <PaginationRounded
            width="300px"
            alignItems="center"
            direction="row"
            justifyContent="center"
          />
        </Stack>
      </Box>
    </>
  );
}
