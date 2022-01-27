import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import LoginForm from './LoginForm';
import NotFound from './NotFound';

const App = () => (
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
);

export default App;
