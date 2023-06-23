import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MovieHeader } from "./MovieHeading";
import "./styles.css";
import { useGetMoviesQuery } from "../services/moviertkApi";
import { MDetails } from "./MDetails";
import { AddToCart } from "./AddToCart";
import { Movie } from "./Movie";
import useBounce from "../../bounce/useBounce";

export const MoviesManager = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const bouncedValue = useBounce(query, 500);
  const { data } = useGetMoviesQuery(bouncedValue);

  useEffect(() => {
    setMovies(data?.Search);
  }, [data]);
  return (
    <div>
      <Container maxWidth="lg" className="movie__container">
        <MovieHeader query={query} setQuery={setQuery} />
        <Routes>
          <Route
            path="/movielist"
            element={<Movie movies={movies} />}
          ></Route>
          <Route path="/details/:id" element={<MDetails />}></Route>
          <Route path="/cart" element={<AddToCart />}></Route>
        </Routes>
      </Container>
    </div>
  );
};
