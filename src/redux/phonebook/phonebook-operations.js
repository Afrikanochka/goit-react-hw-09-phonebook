import axios from 'axios';

import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError } from './phonebook-actions';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios.get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
}

export const addContact = (contact) => dispatch => {
  

  dispatch(addContactRequest());

  axios.post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
}

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios.delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
}
