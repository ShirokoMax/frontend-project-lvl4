import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './Home.jsx';
import LoginForm from './LoginForm.jsx';
import NotFound from './NotFound.jsx';

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
