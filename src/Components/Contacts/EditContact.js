import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const EditContact = (props) => {
  const navigate = useNavigate();
  let location = useLocation();
  const { id, name, email } = location.state.contact;
  const [editContact, setEditContact] = useState({ id, name, email });

  const nameChangeHandler = (e) => {
    e.preventDefault();
    setEditContact({
      ...editContact,
      name: e.target.value,
    });
  };

  const emailChangeHandler = (e) => {
    e.preventDefault();
    setEditContact({ ...editContact, email: e.target.value });
  };

  const editContactHandler = (e) => {
    e.preventDefault();
    props.updateContactHandler(editContact);
    resetInputField();
    navigate("/home/contactlist/");
  };

  const resetInputField = () => {
    setEditContact({
      name: "",
      email: "",
    });
  };

  const cancelChangeHandler = () => {
    navigate("/home/contactlist/");
  };
  return (
    <Box>
      <Card className={"submitCard"}>
        <CardContent className={"cardContent"}>
          <Typography variant="h5" component="p">
            Edit Contact
          </Typography>
          <Box component="form" onSubmit={editContactHandler} sx={{ mt: 1 }}>
            <TextField
              sx={{ mb: 3 }}
              autoComplete="username"
              name="username"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
              size="small"
              value={editContact.name}
              onChange={nameChangeHandler}
            />

            <TextField
              sx={{ mb: 3 }}
              autoComplete="email"
              name="email"
              required
              fullWidth
              id="email"
              label="Email Address"
              size="small"
              value={editContact.email}
              onChange={emailChangeHandler}
            />

            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                className={"button"}
                size="large"
                fullWidth
                onClick={cancelChangeHandler}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                className={"button"}
                size="large"
                fullWidth
              >
                Update
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
