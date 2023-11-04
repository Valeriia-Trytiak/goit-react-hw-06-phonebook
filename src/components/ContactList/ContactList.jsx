import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { MdDeleteForever } from 'react-icons/md';
import { List, ContactItem, User, DeleteContact } from './ContactList.styled';

const getvisibleContacts = (contacts, filterContact) => {
  if (filterContact === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);
  const visibleContacts = getvisibleContacts(contacts, filterContact);
  const dispatch = useDispatch();
  return (
    <List>
      {visibleContacts.map(user => (
        <ContactItem key={user.id}>
          <User>
            {user.name}: {user.number}
          </User>
          <DeleteContact
            type="button"
            onClick={() => dispatch(deleteContact(user.id))}
          >
            <MdDeleteForever size={'24px'} />
          </DeleteContact>
        </ContactItem>
      ))}
    </List>
  );
};
