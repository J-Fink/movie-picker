import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    border-bottom: 1px solid red;
  a {
    text-decoration: none;
    color: red;
  }
  
  
`;
export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Link href="/">Movie Picker</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
