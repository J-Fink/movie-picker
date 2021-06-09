import CreateMovie from "../components/CreateMovie";
import PleaseSignIn from "../components/PleaseSignIn";
import { useUser } from '../components/User';
export default function AddMoviePage() {
    const user = useUser();
    // console.log(user);
    return (
        <PleaseSignIn>
            <CreateMovie />
        </PleaseSignIn>
    )
}