import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types'
//at it's simplest, it is yes or no

export function isSignedIn({ session }: ListAccessArgs) {
    return !!session;
}

const generatedPermissions = Object.fromEntries(
    permissionsList.map((permission) => [
        permission,
        function ({ session }: ListAccessArgs) {
            return !!session?.data.role?.[permission]
        },
    ])
);
//Permissions check if someone meets a criteria - yes or no
export const permissions = {
    ...generatedPermissions,
}

//Rule based function
//Rules can return a boolean - yes or no - or a filter which limits which products they can CRUD.
export const rules = {
    canManageMovies({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        //1. do they have the permission of canManageMovies?
        if (permissions.canManageMovies({ session })) {
            return true;
        }
        //2. If not, do they own this item?
        return { user: { id: session.itemId } };
        },
        canReadMovies({ session }: ListAccessArgs) {
            if(permissions.canManageMovies({ session })) {
                return true;// they can read everything!!
            }
            //they should only see available products (based on the status field)
            return { status: 'AVAILABLE' };
        },
        canManageUsers({ session }: ListAccessArgs) {
            if (!isSignedIn({ session })) {
                return false;
            }
            if (permissions.canManageUsers({ session })) {
                return true;
            }
            //otherwise only update themselves
            return { id: session.itemId };
        },
        canManagePassword({ session }: ListAccessArgs) {
            if (!isSignedIn({ session })) {
                return false;
            }
            if (permissions.canManagePassword({ session })) {
                return true;
            }
            //otherwise only update themselves
            return { id: session.itemId };
        },
    };