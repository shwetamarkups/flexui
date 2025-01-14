import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRole } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const UserIdentity = () => {
  const [selectedRole, setSelectedRole] = useState('viewer');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleNextPage = () => {
    dispatch(setRole(selectedRole));
    navigate('/saved-configurations');
  };

  return (
    <div className="container mt-4">
      <h2>Select Your Role</h2>
      <div className="mb-3">
        <label htmlFor="roleSelect" className="form-label">Choose Role</label>
        <select
          id="roleSelect"
          className="form-select"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleNextPage}>
        Next Page
      </button>
    </div>
  );
};

export default UserIdentity;
