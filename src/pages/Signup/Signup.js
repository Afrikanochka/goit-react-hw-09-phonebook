import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import authOperations from '../../redux/auth/auth-operations';

import s from './Signup.module.css';

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const onChange = e => {
  const { name, value } = e.target;

  switch (name) {
    case 'name':
      return setName(value);
    case 'email':
      return setEmail(value);
    case 'password':
      return setPassword(value);
    default:
      return;
  }
};

const handleSubmit = e => {
  e.preventDefault();
  if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    return toast.error('💩 Please fill in all fields!');
  } else if (password.length < 7) {
    return toast.info('Passwords must be at least 7 characters long!');
  }
  dispatch(authOperations.register({ name, email, password }));
  setName('');
  setEmail('');
  setPassword('');
};

  return (
    <form className={s.form} onSubmit={handleSubmit}>
        <h2 className={s.title}>Register</h2>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
            onChange={onChange}
          />
        </label>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your e-mail"
            onChange={onChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your password"
            onChange={onChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Register
        </button>
      </form>
  );
}

export default Signup;

// class Signup extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   onChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//   };

//   render() {
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <h2 className={s.title}>Register</h2>
//         <label className={s.label}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             autoComplete="off"
//             placeholder="Enter your name"
//             onChange={this.onChange}
//           />
//         </label>
//         <label className={s.label}>
//           Email
//           <input
//             className={s.input}
//             type="email"
//             name="email"
//             autoComplete="off"
//             placeholder="Enter your e-mail"
//             onChange={this.onChange}
//           />
//         </label>
//         <label className={s.label}>
//           Password
//           <input
//             className={s.input}
//             type="password"
//             name="password"
//             autoComplete="off"
//             placeholder="Enter your password"
//             onChange={this.onChange}
//           />
//         </label>
//         <button type="submit" className={s.button}>
//           Register
//         </button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onSubmit: state => dispatch(authOperations.register(state)),
// });

// export default connect(null, mapDispatchToProps)(Signup);
