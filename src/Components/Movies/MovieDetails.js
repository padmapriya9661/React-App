import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../services/movieApi";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addMoviesToCart,
  removeMovieFromCart,
  selectAllMovies,
} from "../../Redux/movieSlice";

import CircularProgress from "@mui/material/CircularProgress";
import { successMsg } from "../Auth/LoginError";

export const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentMovieDetail, setCurrentMovieDetail] = useState([]);
  const { data: movie } = useGetMovieByIdQuery(id);

  const watchList = useSelector(selectAllMovies);

  let cartMovies = watchList?.find((i) => i.imdbID === movie?.imdbID);
  const addListDisabled = cartMovies ? true : false;

  useEffect(() => {
    setCurrentMovieDetail(movie);
    window.scrollTo(0, 0);
  }, [movie]);

  const addMovieHandler = (movie) => {
    dispatch(addMoviesToCart(movie));
    successMsg("Movie added successfully!");
  };

  const deleteMovieHandler = (imdbID) => {
    dispatch(removeMovieFromCart(imdbID));
    successMsg("Movie deleted successfully!");
  };

  return (
    <>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 2, m: "20px 0px" }}>
          {currentMovieDetail ? (
            <Box display="flex">
              <Box>
                <img src={currentMovieDetail?.Poster} alt="movie__img"></img>
              </Box>
              <Box sx={{ width: "100%", ml: 4, position: "relative" }}>
                <Typography variant="h4" sx={{ mt: 0 }}>
                  <strong>{currentMovieDetail?.Title}</strong>
                </Typography>
                <Typography variant="subtitle1">
                  Year -{" "}
                  <Moment format="YYYY">{currentMovieDetail?.Year}</Moment>
                </Typography>

                <Box>
                  <List>
                    <ListItem className="detail__list">
                      Rating: {currentMovieDetail?.imdbRating}{" "}
                      <StarRateRoundedIcon sx={{ color: "#ffa500" }} />
                    </ListItem>
                    <ListItem className="detail__list">
                      Director: {currentMovieDetail?.Director}
                    </ListItem>
                    <ListItem className="detail__list">
                      Genre: {currentMovieDetail?.Genre}
                    </ListItem>
                    <ListItem className="detail__list">
                      Language: {currentMovieDetail?.Language}
                    </ListItem>
                  </List>
                </Box>

                <Typography variant="body1">
                  {currentMovieDetail?.Plot}
                </Typography>
                <Stack
                  direction={"row"}
                  spacing={3}
                  sx={{ position: "absolute", right: "0", bottom: "0" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    disabled={addListDisabled}
                    onClick={() => addMovieHandler(movie)}
                  >
                    {addListDisabled ? `Added to cart` : `Add to cart`}
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    disabled={!addListDisabled}
                    onClick={() => deleteMovieHandler(movie.imdbID)}
                  >
                    Delete from cart!
                  </Button>
                </Stack>
              </Box>
            </Box>
          ) : (
            <Box textAlign={"center"}>
              <CircularProgress />
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
};
