import s from './Phonebook.module.css';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'redux/contactsSlice';

export const PhoneBook = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filterContactsList = useMemo(() => {
    if (filter === '') return contacts;
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, contacts]);

  return (
    <ul className={s.contactsList}>
      {filterContactsList?.map(({ name, number, id }) => {
        return (
          <li className={s.contactsItem} key={id}>
            <p>
              {name} : {number}
            </p>
            <button
              type="button"
              onClick={() => {
                dispatch(actions.removeContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
