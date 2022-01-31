import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import LoginForm from './LoginForm';
import NotFound from './NotFound';

import AuthContext from '../contexts/index';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = user?.token !== undefined;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('login');
    }
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginForm />} />

          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
