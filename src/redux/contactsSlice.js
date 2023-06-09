import { createSlice } from '@reduxjs/toolkit';
import contacts from '../data/contacts';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts, filter: '' },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: newContact => {
        return contacts.some(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
          ? alert(`${newContact.name} is already in contacts!`)
          : {
              payload: { ...newContact, id: nanoid() },
            };
      },
    },

    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { actions } = contactsSlice;

export default contactsSlice.reducer;
