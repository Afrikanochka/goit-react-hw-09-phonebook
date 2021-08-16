import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import * as contactsOperations from '../../redux/phonebook/phonebook-operations';

import s from './InputForm.module.css';
import { toast } from 'react-toastify';


const InputForm = () => {
const dispatch = useDispatch();

const contacts = useSelector(getContacts);
const [name, setName] = useState('');
const [number, setNumber] = useState('');


const handleChange = e => {
  const { name, value } = e.target;
  switch (name) {
    case 'name':
      setName(value);
      break;

    case 'number':
      setNumber(value);
      break;

    default:
      return;
  }
};
 
  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      return toast(`🤔 ${name} is already in the phonebook.`);
    } else if (checkRepeatNumber(number)) {
      return toast(`🤔 ${number} is already in the phonebook.`);
    } else if (checkEmptyQuery(name, number)) {
      return toast.info("😱 Enter the contact's name and number phone!");
    } else {
      dispatch(contactsOperations.addContact({name, number}));
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          className={s.input}
          name="name"
          value={name}
          placeholder="Name"
          autoComplete="off"
          autoFocus
        />

        <label className={s.label} htmlFor="number">
          Number
        </label>
        <input
          id="number"
          type="text"
          onChange={handleChange}
          className={s.input}
          name="number"
          value={number}
          placeholder="Phone number"
          autoComplete="off"
        />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>

  );
}

export default InputForm;

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { name } = this.state;
  //   const { contacts, onSubmit } = this.props;
  //   const sameContact = contacts.find(
  //     item => item.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   if (sameContact) {
  //     alert(`${name} Already exists`);
  //     this.reset();
  //     return;
  //   }
  //   onSubmit(this.state);
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

//   render() {
//     const { name, number } = this.state;
//     return (
      
//     );
//   }
// }

