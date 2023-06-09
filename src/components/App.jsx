import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './Phonebook/PhoneBook';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.phoneBook}>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <PhoneBook />
    </div>
  );
};
