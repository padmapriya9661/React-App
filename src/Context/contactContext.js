import { createContext, useContext, useState } from "react";
import axios from "../API/axios";

export const contactContext = createContext({
  contacts: null,
  addContacts: () => {},
  deleteContacts: () => {},
  editContacts: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export const ContactContextProvider = (props) => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const addContacts = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContacts = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const editContacts = async (contact) => {
    const response = await axios.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <contactContext.Provider
      value={{
        contacts,
        addContacts,
        deleteContacts,
        editContacts,
        isOpen,
        openModal,
        closeModal,
        setContacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export const useContactContext = () => {
  const {
    contacts,
    addContacts,
    deleteContacts,
    editContacts,
    isOpen,
    openModal,
    closeModal,
    setContacts,
  } = useContext(contactContext);
  return {
    contacts,
    addContacts,
    deleteContacts,
    editContacts,
    isOpen,
    openModal,
    closeModal,
    setContacts,
  };
};
