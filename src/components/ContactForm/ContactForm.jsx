import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsSlice';
import { Button } from '../Button/Button';
import { nanoid } from "nanoid";
import { Form, Label, Input } from "./ContactForm.styled"

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();

    if (contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>

        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          onChange={handleChange}
          placeholder="Enter a name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={numberInputId}
          value={number}
          onChange={handleChange}
          placeholder="Enter a number telephone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit" children="Add contact"></Button>

      </Form>
    </>)
}