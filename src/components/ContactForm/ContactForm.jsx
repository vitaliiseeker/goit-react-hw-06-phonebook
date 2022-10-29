import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Form, Label, Input } from "./ContactForm.styled"
import { Button } from '../Button/Button';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

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
    const nameId = nanoid();
    onSubmit({ id: nameId, name, number });
    reset();
  }

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


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
