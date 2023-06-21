import React from "react";
import { useUserContext } from "../../Context/userContext";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export const HomePage = () => {
  const { user, logOut } = useUserContext();

  return(
    <>
    <br/><br/><br/><br/><br/><br/><br/>
    <center>
    <table>
      <td>
    <h2>
    <div className="ContactContainer">
    <Link to="/home/contactlist">Contact Manager</Link>
    </div>
    </h2>
    <h2>
    <div className="MovieContainer">
    <Link to="/movie/movielist">Movie Manager</Link>
    </div>
    </h2>
    </td>
</table>
</center>
  </>
  )
};
