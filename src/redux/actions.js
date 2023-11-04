import { nanoid } from 'nanoid';

export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: { ...newContact, id: nanoid() },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};
