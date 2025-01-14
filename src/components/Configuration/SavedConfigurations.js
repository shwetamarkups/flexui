import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SavedConfigurations = () => {
  const configurations = useSelector((state) => state.config.items);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/configurations');
  };

  const handleChangeRole = () => {
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Saved Configurations</h2>
      {configurations.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>API Key</th>
                <th>Client ID</th>
                <th>Project ID</th>
              </tr>
            </thead>
            <tbody>
              {configurations.map((config, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{config.apiKey || '-'}</td>
                  <td>{config.clientId || '-'}</td>
                  <td>{config.projectId || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-muted">No configurations available.</p>
      )}
      <div className="mt-3 text-center">
        <button className="btn btn-secondary" onClick={handleBack}>
          Back to Configuration Form
        </button>
      </div>
      <div className="mt-3 text-center">
        <button className="btn btn-info" onClick={handleChangeRole}>
          Change User Role
        </button>
      </div>
    </div>
  );
};

export default SavedConfigurations;
