import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push({ ...payload, id: nanoid() });
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
