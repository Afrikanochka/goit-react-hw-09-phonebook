import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import authOperations from '../../redux/auth/auth-operations';

import s from './Login.module.css';

const Login = () => {
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const onChange = e => {
  const { name, value } = e.target;

  switch (name) {
    case 'email':
      setEmail(value);
      break;

    case 'password':
      setPassword(value);
      break;

    default:
      return;
  }
};

const handleSubmit = e => {
  e.preventDefault();
  if (email.trim() === '' || password.trim() === '') {
    return toast.error('💩 Please fill in all fields!');
  }
  dispatch(authOperations.login({ email, password }));
  setEmail('');
  setPassword('');
};

  return (
    <form className={s.form} onSubmit={handleSubmit}>
    <h2 className={s.title}>Log in</h2>
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
      Sign in
    </button>
  </form>
  );
}

export default Login;

// class Login extends Component {
//   state = {
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
//         <h2 className={s.title}>Log in</h2>
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
//           Sign in
//         </button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onSubmit: state => dispatch(authOperations.login(state)),
// });

// export default connect(null, mapDispatchToProps)(Login);
