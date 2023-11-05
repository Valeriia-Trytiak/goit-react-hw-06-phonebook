import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  Error,
  StyledInput,
  AddContactButton,
  UserIcon,
  UserPhone,
} from './ContactForm.styled';
import { getContacts } from 'redux/selectors';

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('This is a required field'),
  number: Yup.string()
    .trim()
    .matches(
      /^\+?\d{1,4}?[ .\-s]?(\(\d{1,3}?\))?([ .\-s]?\d{1,4}){1,4}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This is a required field')
    .min(9, 'Please enter at least 9 characters'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = (values, actions) => {
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (nameExists) {
      alert(`${values.name} is already in contacts.`);
    } else {
      dispatch(addContact(values));
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactShema}
    >
      <StyledForm>
        <label>
          Name
          <UserIcon />
          <StyledInput name="name" type="text" />
          <Error name="name" component="span" />
        </label>
        <label>
          Number
          <StyledInput name="number" type="tel" />
          <UserPhone />
          <Error name="number" component="span" />
        </label>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </StyledForm>
    </Formik>
  );
};
