import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, Button, Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieFromCart, selectAllMovies } from "../../Redux/movieSlice";
import Moment from "react-moment";
import { successMsg } from "../Auth/LoginError";

export const AddToCart = (props) => {
  const dispatch = useDispatch();
  const addMovie = useSelector(selectAllMovies);

  const deleteMovieHandler = (imdbID) => {
    dispatch(removeMovieFromCart(imdbID));
    successMsg("Movie removed successfully!");
  };

  const isCartEmpty = (
    <>
      <Typography textAlign={"center"} variant="subtitle2">
        Your cart is empty!
      </Typography>
    </>
  );

  return (
    <div>
      <Card sx={{ minWidth: "500px", p: 2 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Cart Items</Typography>
          <Box>
            <CloseRoundedIcon
              onClick={props.onClose}
              sx={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          {addMovie?.length
            ? addMovie?.map((movie) => {
                return (
                  <Card sx={{ p: 2, mb: 2 }} key={movie.imdbID}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems={"center"}
                    >
                      <Box>
                        <Typography variant="h6">{movie.Title}</Typography>
                        <Typography variant="subtitle2">
                          Year - <Moment format="YYYY">{movie.year}</Moment>
                        </Typography>
                      </Box>
                      <Box>
                        <Button
                          variant="contained"
                          size="small"
                          color="error"
                          onClick={() => deleteMovieHandler(movie.imdbID)}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                );
              })
            : isCartEmpty}
        </Box>
      </Card>
    </div>
  );
};
