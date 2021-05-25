import Link from 'next/link';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
  console.log(user);
  return (
    <NavStyles>      
        <Link href="/movies">Movies </Link>
        {user && (
          <>
            <Link href="/seen">Seen Already</Link>
            <Link href="/pick">Pick A Movie</Link>
            <Link href="/add">Add A Movie</Link>
            <SignOut />
          </>
        )

        }
        {!user && (
          <>
            <Link href="/signin">Sign In</Link>
          </>
        )

        }
    </NavStyles>
  );
}