import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useUserContext } from "../../Context/userContext";
import DescriptionAlerts from "../Auth/DescriptionAlert";
export const Header = () => {
  const { user, logOut, error } = useUserContext();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="primary" position="sticky">
          <Toolbar style={{ padding: "0px 48px " }}>
            <Typography
              variant="h5"
              component="div"
              color="white" 
              sx={{ flexGrow: 1, textAlign: "initial" }}
            >
              Projects
            </Typography>
            <Typography component="div" mr={"10px"}>
              Welcome, {user.name}
            </Typography>

            {user.isUserLoggedIn && (
              <input type="button" onClick={logOut} value="logout"/>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {error && <DescriptionAlerts />}
    </>
  );
};
