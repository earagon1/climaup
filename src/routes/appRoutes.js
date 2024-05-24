import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Dashboard from '../components/dashboard';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard/>} />
    </Routes>
  );
};

export default AppRouter;
