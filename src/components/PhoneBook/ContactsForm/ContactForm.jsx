import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import CustomInput from '../CustomInput/CustomInput';
import { addContact } from '../../../redux/contacts/contactsSlice';
import basicSchema from '../../../schemas/index.js';
import { selectContacts } from '../../../redux/selectors';

import style from './contactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const addNewContact = data => {
    const isDuplicated = contacts
      ? contacts.find(contact => contact.name === data.name)
      : false;

    if (isDuplicated) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
  };
  const onSubmitForm = (values, { resetForm }) => {
    addNewContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={basicSchema}
      onSubmit={onSubmitForm}
    >
      {({ isSubmitting, isValid }) => (
        <Form className={style.form}>
          <CustomInput
            label={'Name'}
            name={'name'}
            type={'text'}
            placeholder={'Enter name'}
          />

          <CustomInput
            label={'Number'}
            name={'number'}
            type={'tel'}
            placeholder={'Enter number'}
          />

          <button
            disabled={isSubmitting || !isValid}
            type="submit"
            className={style.submitButton}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
