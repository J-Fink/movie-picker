import CreateMovie from "../components/CreateMovie";
import { useUser } from '../components/User';
export default function AddMoviePage() {
    const user = useUser();
    console.log(user);
    return (
        <>
            {user && (
                <div>
                    <CreateMovie></CreateMovie>
                </div>
            )}

            {!user && (
                <div>Please Sign In!</div>
            )}
        </>
    )
}