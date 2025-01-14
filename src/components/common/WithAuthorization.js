import React from 'react';
import { useSelector } from 'react-redux';
import { hasPermission } from '../../utils/rbacUtils';

const WithAuthorization = (WrappedComponent, requiredPermission) => {
  const AuthorizedComponent = (props) => {
    const role = useSelector((state) => state.user.role);

    if (!hasPermission(role, requiredPermission)) {
      return <div>You do not have access to this section.</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthorizedComponent;
};

export default WithAuthorization;
