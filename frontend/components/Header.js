import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Search from './Search';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  line-height: 3rem;
  display: flex;
  position: relative;
  z-index: 2;
  background: var(--logo);
  width: 227px;
  height: 125px;
  /* transform: skew(-7deg); */
  .wrapper {
    display: flex;
  }
  div.dot {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: var(--background);
  }
  .top { 
    position: absolute;
    top: -6px; }
  .bottom { 
    position: absolute;
    bottom: -2px; }
  .left { 
    position: absolute;
    left: -5px; }
  .right { 
    position: absolute;
    right: -4px; }
  .outline {
    border-radius: 0;
    height: 100px;
    width: 100px;
  }
  a {
    margin: auto;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    /* padding: 0.5rem 1rem; */
  }
  a:hover {
    color: var(--red);
    text-decoration: none;
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
          <div className="wrapper">
            <div className="top left dot"></div>
            <div className="top right dot"></div>
            <div className="bottom left dot"></div>
            <div className="bottom right dot"></div>
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