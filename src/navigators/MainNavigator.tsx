import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotFound from '../pages/NotFound/NotFound';

type MainNavigatorProps = {

}

const MainNavigator = (props: MainNavigatorProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='*' Component={NotFound} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigator