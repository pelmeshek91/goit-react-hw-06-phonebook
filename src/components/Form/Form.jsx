import { useState } from 'react';

import s from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'redux/contactsSlice';

const initialState = { name: '', number: '' };

export const Form = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleChange = ({ target: { name, value } }) => {
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    contacts.some(
      contact => contact.name.toLowerCase() === form.name.toLowerCase()
    )
      ? alert(`${form.name} is already in contacts!`)
      : dispatch(actions.addContact(form));
    setForm(initialState);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <p className={s.caption}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className={s.caption}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={form.number}
          onChange={handleChange}
        />
      </label>
      <button className={s.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
};
