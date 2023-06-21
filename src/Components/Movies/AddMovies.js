import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { MovieList } from "./MovieList";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";

export const AddMovies = (props) => {
  const { movies } = props;

  return (
    <Stack direction="row" className="movie__row">
      {movies?.length ? (
        movies?.map((movie) => <MovieList key={movie.imdbID} movie={movie} />)
      ) : (
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="body" textAlign={"center"}>
           <b> Movies Not found! Please search...</b>
          </Typography>
          <LocalMoviesRoundedIcon sx={{ opacity: 0.5 }} />
        </Box>
      )}
    </Stack>
  );
};
