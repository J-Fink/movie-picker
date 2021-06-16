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
        <Ticket name="Movi" path="/movies" />
        
        {user && (
          <>
            <Ticket name="Seen" path="/seen" />
            <Ticket name="Pick" path="/pick" />
            <Ticket name="Add" path="/add" />
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