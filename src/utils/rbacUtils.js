export const roles = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
};

export const permissions = {
  EDIT_CONFIGURATION: 'EDIT_CONFIGURATION',
  VIEW_CONFIGURATIONS: 'VIEW_CONFIGURATIONS',
};

export const hasPermission = (role, requiredPermission) => {
  const rolePermissions = {
    Admin: [permissions.EDIT_CONFIGURATION, permissions.VIEW_CONFIGURATIONS],
    Editor: [permissions.EDIT_CONFIGURATION],
    Viewer: [permissions.VIEW_CONFIGURATIONS],
  };

  return rolePermissions[role]?.includes(requiredPermission) || false;
};
