import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.contacts;
export const selectFilter = store => store.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
