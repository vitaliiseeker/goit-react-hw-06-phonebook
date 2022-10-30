import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { Wrap } from "./PhonebookPage.styled";

export const PhonebookPage = () => {

  return (
    <>
      <Wrap>
        <ContactForm />
        <ContactList />
      </Wrap>
    </>

  )
};


