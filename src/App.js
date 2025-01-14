import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ConfigForm from './components/Configuration/ConfigForm';
import SavedConfigurations from './components/Configuration/SavedConfigurations';
import UserIdentity from './components/UserIdentity/UserIdentity';
import Navbar from './components/common/Navbar';
import { Dashboard } from './components/Usage/Dashboard';

const App = () => {
  const [currentConfig, setCurrentConfig] = useState(null);

  const configSchema = [
    { key: 'apiKey', label: 'API Key', type: 'text', placeholder: 'Enter API Key' },
    { key: 'clientId', label: 'Client ID', type: 'text', placeholder: 'Enter Client ID' },
    { key: 'projectId', label: 'Project ID', type: 'text', placeholder: 'Enter Project ID' },
  ];

  return (
    <>
      <Navbar></Navbar>
      {/* <h1>Configuration Management</h1> */}
      <Routes>
        <Route path="/" element={<UserIdentity />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/configurations"
          element={<ConfigForm configSchema={configSchema} onEditConfig={currentConfig} />}
        />
        <Route path="/saved-configurations" element={<SavedConfigurations />} />
      </Routes>
    </>
  );
};

export default App;
