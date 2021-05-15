import { select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Movie = list({
    // TOODO
    // ACCESS
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
        })
    },
});
