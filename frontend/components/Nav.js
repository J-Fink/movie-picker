import Link from 'next/link';
import NavStyles from './styles/NavStyles';
export default function Nav() {
  return (
    <NavStyles>      
        <Link href="/watch">Watch Next</Link>
        <Link href="/seen">Seen Already</Link>
        <Link href="/pick">Pick A Movie</Link>
    </NavStyles>
  );
}