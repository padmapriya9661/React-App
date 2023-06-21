import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = (props) => {
  const { query, setQuery } = props;

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Box width="70%">
      <TextField
        fullWidth
        id="search"
        type="search"
        placeholder="search movie"
        value={query}
        onChange={handleChange}
        sx={{
          backgroundColor: "whitesmoke",
          padding: 0,

          "& .MuiInputBase-input": {
            padding: "6px 12px",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
