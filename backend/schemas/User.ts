import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';
import { permissions, rules } from '../access';

export const User = list({
    access: {
        create: () => true,
        read: rules.canManageUsers,
        update: rules.canManageUsers,
        delete: permissions.canManageUsers,
    },
    ui: {
        // hideCreate: (args) => !permissions.canManageUsers(args),
        // hideDelete: (args) => !permissions.canManageUsers(args),
    },
    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true}),
        password: password(),
        role: relationship({
            ref: 'Role.assignedTo',
        }),
        movies: relationship({
            ref: 'Movie.user',
            many: true,
        }),
        //add roles
    },
});