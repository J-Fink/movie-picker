import Link from 'next/link';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import Ticket from './Ticket';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
  // console.log(user);
  return (
    <NavStyles>      
        {/* <Link href="/movies">Movies </Link> */}
        <Ticket name="Movies" path="/movies" />
        
        {user && (
          <>
            <Ticket name="Seen Already" path="/seen">Seen Already</Ticket>
            <Ticket name="Pick A Movie" path="/pick">Pick A Movie</Ticket>
            <Ticket name="Add A Movie" path="/add">Add A Movie</Ticket>
            <SignOut />
          </>
        )

        }
        {!user && (
          <>
            {/* <Link href="/signin">Sign In</Link> */}
            <Ticket name="Sign In" path="/signin" />
          </>
        )

        }
    </NavStyles>
  );
}