import { useState, useEffect } from "react";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";

export const PhonebookPage = () => {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {

    const normalizedName = data.name.toLowerCase();

    if (contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts([data, ...contacts]);
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts([...contacts
      .filter(contact => contact.id !== contactId)]);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <ContactForm />
      <ContactList />
    </>

  )
};


