import React from "react";
import { Avatar, Box, Button, Card, Paper, Typography } from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";

import ContactsIcon from "@mui/icons-material/Contacts";
const ContactList = (props) => {
  const { contacts } = props;
  const navigate = useNavigate();

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const editContact = (item) => {
    navigate("/home/editcontact/", {
      state: {
        contact: {
          id: item.id,
          name: item.name,
          email: item.email,
        },
      },
    });
  };

  const goToAddContactPage = () => {
    navigate("/home/addContact/");
  };

  const listOfContacts = (
    <Box>
      {contacts.map((contact) => {
        return (
          <Box mb={3}>
            <Card key={contact.id}>
              <Box
                p={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={"flex"}>
                  <Box mr={2}>
                    {/* <Avatar src="/broken-image.jpg" /> */}
                  </Box>
                  <Box>
                    <Typography>
                      <strong>{contact.name}</strong>
                    </Typography>
                    <Typography>{contact.email}</Typography>
                  </Box>
                </Box>
                <Box>
                  <ModeEditOutlineRoundedIcon
                    color="primary"
                    onClick={() => {
                      editContact(contact);
                    }}
                    sx={{ mr: 2, cursor: "pointer" }}
                  />
                  <DeleteIcon
                    color="error"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      deleteContactHandler(contact.id);
                    }}
                  />
                </Box>
              </Box>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
  return (
    <div>
      <Paper variant="elevation" maxWidth="100%" className="contact__card">
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={4}
          >
            <Box>
              <Typography
                variant="h5"
                component="h1"
                className="contact__title"
              >
                Contact List &nbsp;
                <ContactsIcon />
              </Typography>
            </Box>
            <Box>
              <Button variant="text" onClick={goToAddContactPage}>
                Add Contact
              </Button>
            </Box>
          </Box>
          {contacts?.length > 0 ? (
            listOfContacts
          ) : (
            <Typography textAlign={"center"}>No Contacts Found.!</Typography>
          )}
        </Box>
        <Box></Box>
      </Paper>
    </div>
  );
};

export default ContactList;
