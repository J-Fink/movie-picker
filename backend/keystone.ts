import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session'
import { User } from './schemas/User';
import { Role } from './schemas/Role';
import { Movie } from './schemas/Movie';
import 'dotenv/config';
import { sendPasswordResetEmail } from './lib/mail';
import { permissionsList } from './schemas/fields';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,// How long should they stay signed in?
    secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        //Todo: add in initial roles here
    },
    passwordResetLink: {
        async sendTokens(args) {
            // console.log(args);
            await sendPasswordResetEmail(args.token, args.identity);
        },
    },
});

export default /*withAuth(*/
    config({
        server: {
            cors: {
                origin: [process.env.FRONTEND_URL],
                credentials: true
            },
        },
        db: {
            adapter: 'mongoose',
            url: databaseURL,
        },
        lists: createSchema({
            //Schema items go in here
            User,
            Movie,
            Role
        }),
        ui: {
            //Show the UI only for people who pass this test
            isAccessAllowed: ({ session }) => {
                return !!session?.data;
            },
        },
        //Add session values here
        session: withItemData(statelessSessions(sessionConfig), {
            User: `id name email { ${permissionsList.join(' ')} }`
        })
    }
    )
// );