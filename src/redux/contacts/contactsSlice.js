import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(store, { payload }) {
        store.push(payload);
      },
      prepare(data) {
        const newContact = { ...data, id: nanoid() };
        return {
          payload: newContact,
        };
      },
    },
    deleteContact: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
