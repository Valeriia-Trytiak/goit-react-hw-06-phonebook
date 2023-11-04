import { createAction } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { name: 'Rosie Simpson', number: '459-12-56', id: 'TKtqZ2TBe9EPD8rVLmclU' },
    {
      name: 'Hermione Kline',
      number: '443-89-12',
      id: 'kplvFuUSsv1FeqfoPISZM',
    },
    { name: 'Eden Clements', number: '645-17-79', id: 'y8uwJUun_N9I4mPZ8BtdJ' },
    {
      name: 'Annie Copeland',
      number: '227-91-26',
      id: 'lFTXSuj1NOOdzzxwu5-83',
    },
    { name: 'Valeriia', number: '885-13-46', id: 'b2ApA1DVbIHgdw4pnjFVL' },
    { name: 'Mark Smit', number: '459-12-56', id: 'h0eK-5SEHgW_F4CCa4AIE' },
  ],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
