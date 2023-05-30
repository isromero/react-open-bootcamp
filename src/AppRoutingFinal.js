import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';

function AppRoutingFinal() {

  let loggedIn = true;

  return (
    <Router>
      <Routes>
        <Route exact path='' element={loggedIn ? <Navigate from= '/' to='/dashboard'/> : <Navigate from= '/'  to='/login'/>}/>
        <Route exact path='/login' element={ <LoginPage/> } />
        <Route exact path='/dashboard' element={loggedIn ? <DashBoardPage/> : <Navigate to='/login'/>} />

        <Route element={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
