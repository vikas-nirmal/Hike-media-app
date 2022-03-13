import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Actions/User';
import Home from './components/Home/Home';
import Account from './components/Account/Account';
import NewPost from './components/NewPost/NewPost';
import Register from './components/Register/Register';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import UpdatePassword from './components/UpdatePassword/UpdatePassword';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import UserProfile from './components/UserProfile/UserProfile';
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAthenticated } = useSelector((state) => state.user)
  
  return (
    <Router>
      {
        isAthenticated && <Header />
      }
      <Routes>
        <Route path='/' element={ isAthenticated? <Home /> : <Login />}/>
        <Route path='/account' element={ isAthenticated? <Account /> : <Login />}/>
        <Route path='/newpost' element={ isAthenticated? <NewPost /> : <Login />}/>
        <Route path='/register' element={ isAthenticated? <Account /> : <Register />}/>
        <Route path='/update/profile' element={ isAthenticated? <UpdateProfile /> : <Login />}/>
        <Route path='/update/password' element={ isAthenticated? <UpdatePassword /> : <Login />}/>
        <Route path='/forgot/password' element={ isAthenticated? <UpdatePassword /> : <ForgotPassword />}/>
        <Route path='/password/reset/:token' element={ isAthenticated? <UpdatePassword /> : <ResetPassword />}/>
        <Route path='/user/:id' element={ isAthenticated? <UserProfile /> : <Login />}/>
        <Route path='/search' element={ isAthenticated? <Search /> : <Login />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
