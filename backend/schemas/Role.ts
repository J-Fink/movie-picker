import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { permissions, isSignedIn } from '../access';
import { permissionFields } from './fields';

export const Role = list({
  access: {
    create: permissions.canManageRoles,isSignedIn,
    read: permissions.canManageRoles,isSignedIn,
    update: permissions.canManageRoles,isSignedIn,
    delete: permissions.canManageRoles,isSignedIn,
  },
  ui: {
    hideCreate: (args) => permissions.canManageRoles(args),
    hideDelete: (args) => permissions.canManageRoles(args),
    isHidden: (args) => permissions.canManageRoles(args),
  },
  fields: {
    name: text({ isRequired: true }),
    ...permissionFields,
    assignedTo: relationship({
      ref: 'User.role', // TODO: Add this to the User
      many: true,
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
  },
});
// console.log(Role);
// console.log(Object.entries(Role.access));
// console.log('Hi Joe');