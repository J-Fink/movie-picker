import { checkbox, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { isSignedIn, rules } from '../access';

export const Movie = list({
    // TOODO
    // ACCESS
    access: {
        create: isSignedIn,
        read: rules.canReadMovies,
        update: rules.canManageMovies,
        delete: rules.canManageMovies,
    },
    fields: {
        name: text({ isRequired: true }),
        description: text({
            ui: {
                displayMode: 'textarea',
            },
        }),
        rating: select({
            options: [
                {label: 'G', value: 'G'},
                {label: 'PG', value: 'PG'},
                {label: 'PG-13', value: 'PG-13'},
                {label: 'R', value: 'R'},
                {label: 'NC-17', value: 'NC-17'},
            ]
        }),
        user: relationship({
            ref: 'User.movies',
            defaultValue: ({ context }) => ({
                connect: { id: context.session.itemId },
            }),
        }),
        seen: checkbox({
            label: 'Seen It?',
            defaultValue: false,
        }),
    },
});
