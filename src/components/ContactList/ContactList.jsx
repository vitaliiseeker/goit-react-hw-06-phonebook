import React from 'react';
import Avatar from "react-avatar";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { Button } from '../Button/Button';
import { TotalNumberContacts } from "../../components/TotalNumberContacts/TotalNumberContacts";
import { Filter } from "../../components/Filter/Filter";
import { Wrap, Item, Name, Number, Link, IconSvgLink } from "./ContactList.styled";

export const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const normalizedFilter = filter.toLowerCase();
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Wrap>
        <h2>Contacts</h2>
        <TotalNumberContacts value={contacts.length} />
        {contacts.length > 0 && <Filter />}
        {(contacts.length > 0 && filteredContacts.length === 0) &&
          <h3>Sorry, no contacts were found for your search.</h3>}
        <ul>
          {filteredContacts.map(({ id, name, number }) =>
            <Item key={id}>
              {/* <Name>🧑 {name + ":  " + number}</Name> */}
              <Avatar round={true} size={25} name={name} />
              <Name>{name}</Name>
              <Link
                href={"tel: " + number}
                type="tel">
                <IconSvgLink width="25" height="25" />
              </Link>
              <Number>{number}</Number>
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(id))}
                children="Delete">
              </Button>
            </Item>)}
        </ul>
      </Wrap>
    </>)
}

