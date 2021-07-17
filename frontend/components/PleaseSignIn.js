import AccountAccess from './AccountAccess';
import SignIn from './SignIn';
import { useUser } from './User';

export default function PleaseSignIn({ children }) {
    const me = useUser();
    if (!me) return(
        <>
        <h1>You'll need to log in for that!</h1>
            <AccountAccess />
        </>
    )
    return children;
}