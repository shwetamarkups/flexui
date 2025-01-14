import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addConfig, updateConfig } from '../../redux/slices/configSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { permissions, hasPermission } from '../../utils/rbacUtils'; // Import permissions and hasPermission function
import { roles } from '../../utils/rbacUtils';
const ConfigForm = ({ configSchema, onEditConfig }) => {
  const role = useSelector((state) => state.user.role); // Get the current user's role from Redux
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    configSchema.forEach((field) => {
      initialData[field.key] = field.defaultValue || '';
    });
    return initialData;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (onEditConfig) {
      setFormData(onEditConfig);
    }
  }, [onEditConfig]);

  // const isAllowed = hasPermission(role, permissions.EDIT_CONFIGURATION); // Check if the user has permission

  // if (!isAllowed) {
  //   return (
  //     <div>
  //       <div>You do not have permission to add or edit configurations.</div>
  //       <button
  //         className="btn btn-warning mt-3"
  //         onClick={() => navigate('/')}
  //       >
  //         Change Role
  //       </button>
  //     </div>
  //   );
  // }

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onEditConfig) {
      dispatch(updateConfig(formData));
    } else {
      dispatch(addConfig(formData));
    }

    const resetData = {};
    configSchema.forEach((field) => {
      resetData[field.key] = '';
    });
    setFormData(resetData);
  };

  const handleViewConfigurations = () => {
    navigate('/saved-configurations');
  };

  return (
    <>{role == roles.ADMIN && (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4>{onEditConfig ? 'Edit Configuration' : 'Add Configuration'}</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {configSchema.map((field) => (
              <div className="mb-3" key={field.key}>
                <label className="form-label">{field.label}:</label>
                <input
                  type={field.type}
                  className="form-control"
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div className="d-flex justify-content-between">
              {/* {isAllowed && ( */}
                <button type="submit" className="btn btn-primary">
                  {onEditConfig ? 'Update Configuration' : 'Save Configuration'}
                </button>
              {/* )} */}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleViewConfigurations}
              >
                View Configurations
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )}
    {(role == roles.EDITOR || role == roles.VIEWER )&& (<div>You are not authorised to view</div>)}
    </>
  );
};

ConfigForm.propTypes = {
  configSchema: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['text', 'select']).isRequired,
      placeholder: PropTypes.string,
      defaultValue: PropTypes.string,
    })
  ).isRequired,
  onEditConfig: PropTypes.object,
};

export default ConfigForm;
