import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import HomePage from './pages/HomePage/HomePage';
import Signup from './pages/Signup/Signup';
import Contacts from './pages/Contacts/Contacts';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import authOperations from './redux/auth/auth-operations';

const App = () => {
const dispatch = useDispatch();
const isAuth = useSelector(state => state.auth.token);
useEffect(() => {
  isAuth && dispatch(authOperations.getCurrentUser());
  
}, [dispatch, isAuth]);

  return (
         <>
        <Header />
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PublicRoute
            path="/signup"
            restricted
            redirectTo="/phonebook"
            component={Signup}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/phonebook"
            component={Login}
          />
          <PrivateRoute
            path="/phonebook"
            redirectTo="/login"
            component={Contacts}
          />
        </Switch>
      </> 
  );
}

export default App;

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
//     return (

//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
