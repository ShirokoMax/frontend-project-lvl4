import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
    <div className="d-flex flex-column h-100">
      <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link to="/" className="navbar-brand">ShirokoMax Chat</Link>
          <Link to="/login" className="">Login</Link>
          <Link to="/404" className="">404 Error</Link>
        </div>
      </nav>

      <div className="container-fluid h-100">
        <div className="row justify-content-center align-content-center h-100">
          <Outlet />
        </div>
      </div>
    </div>
);

export default Layout;
