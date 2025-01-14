import React from 'react';
import { useSelector } from 'react-redux';
import { roles } from '../../utils/rbacUtils';

const Navbar = () => {
  const role = useSelector((state) => state.user.role);
  //const username = useSelector((state) => state.user.username); // Assuming username is stored in state.user

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="/">RBAC App</a>

        {/* Links */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
           
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">Dashboard</a>
              </li>
            {role === roles.ADMIN && (<li className="nav-item">
              <a className="nav-link" href="/saved-configurations">Configurations</a>
            </li>)}
          </ul>
        </div>

        {/* User Info */}
        <div className="d-flex align-items-center text-white">
          <span className="me-2">Logged in as:</span>
          <span>{role}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
