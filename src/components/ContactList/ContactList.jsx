import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrap, Item, Name, Link } from "./ContactList.styled";
import { Button } from '../Button/Button';
import { TotalNumberContacts } from "../../components/TotalNumberContacts/TotalNumberContacts";
import { Filter } from "../../components/Filter/Filter";
import { ReactComponent as IconSvg } from "../../images/iconPhone.svg";

export const ContactList = () => {

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
      <Wrap>
        <h2>Contacts</h2>
        <TotalNumberContacts value={contacts.length} />
        {contacts.length > 0 &&
          <Filter
            value={filter}
            onChange={changeFilter}
          />}
        {(contacts.length > 0 && filteredContacts.length === 0) &&
          <h3>Sorry, no contacts were found for your search.</h3>}
        <ul>
          {contacts.map(({ id, name, number }) =>
            <Item key={id}>
              <Name>🧑 {name + ":  " + number}</Name>
              <Link
                href={"tel: " + number}
                type="tel">
                <IconSvg width="25" height="25" />
              </Link>
              <Button
                type="button"
                onClick={() => deleteContact(id)}
                children="Delete">
              </Button>
            </Item>)}
        </ul>
      </Wrap>
    </>)
}

{/* ContactList.propTypes = {
            contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
        deleteContact: PropTypes.func.isRequired, */}

