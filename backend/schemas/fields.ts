import { checkbox } from '@keystone-next/fields';

export const permissionFields = {
  canManageMovies: checkbox({
    defaultValue: false,
    label: 'User can Update and delete any movie',
  }),
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: 'User can query other users',
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: 'User can Edit other users',
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: 'User can CRUD roles',
  }),
  canManagePassword: checkbox({
    defaultValue: false,
    label: 'User can reset passwords',
  }),
  canManageOrders: checkbox({
    defaultValue: false,
    label: 'User can see and manage orders',
  }),
};

export type Permission = keyof typeof permissionFields;

export const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[];