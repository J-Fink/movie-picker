import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Search from './Search';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: var(--logo);
  /* transform: skew(-7deg); */
  div {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: var(--background);
  }
  .top { top: -10px; }
  .bottom { bottom: -10px; }
  .left { left: -10px; }
  .right { right: -10px; }
  /* .outline {
    border: 1px solid black;
  } */
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <div className="outline">
            <div className="top left"></div>
            <div className="top right"></div>
            <div className="bottom left"></div>
            <div className="bottom right"></div>
            <Link href="/">Movie Picker</Link>
          </div>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
    </HeaderStyles>
  );
}