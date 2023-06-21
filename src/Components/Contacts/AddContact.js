import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { showErrors } from "../Auth/LoginError";

export const AddContact = (props) => {
  const navigate = useNavigate();
  const [User, setUser] = useState({ name: "", email: "" });

  const nameChangeHandler = (e) => {
    setUser({
      ...User,
      name: e.target.value,
    });
  };

  const emailChangeHandler = (e) => {
    setUser({
      ...User,
      email: e.target.value,
    });
  };

  const addContactHandler = (e) => {
    e.preventDefault();
    if (User.name === "" || User.email === "") {
      showErrors("All fields are mandatory!!!");
      return;
    }
    props.addContactHandler(User);

    setUser({ name: "", email: "" });
    navigate("/home/contactList");
  };

  return (
    <div>
      <Container maxWidth="md">
        <Paper variant="elevation" maxWidth="100%" className="contact__card">
          <Box>
            <Typography
              variant="h5"
              component="h1"
              className="contact__title"
              mb={4}
            >
              Contact Manager
            </Typography>
          </Box>
          <Box>
            <Box component="form" onSubmit={addContactHandler} sx={{ mt: 1 }}>
              <TextField
                sx={{ mb: 3 }}
                autoComplete="username"
                name="username"
                fullWidth
                id="username"
                label="Username"
                autoFocus
                size="small"
                value={User.name}
                onChange={nameChangeHandler}
              />

              <TextField
                sx={{ mb: 3 }}
                autoComplete="email"
                name="email"
                fullWidth
                id="email"
                label="Email Address"
                size="small"
                value={User.email}
                onChange={emailChangeHandler}
              />

              <Button variant="contained" className="addBtn" type="submit">
                Add Contact
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
