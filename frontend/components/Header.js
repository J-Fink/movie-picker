import Link from 'next/link';
import styled from 'styled-components';
import Nav, { Hamburger } from './Nav';
import Search from './Search';
import Ticket from './Ticket';

export const Logo = styled.h1`
  font-size: 2.75rem;
  margin-left: 2rem;
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 3rem;
  display: flex;
  position: fixed;
  z-index: 4;
  /* transform: ${props => (props.open ? "rotate(5deg)" : "rotate(5deg)")}; */
  background: var(--logo);
  width: 139px;
  height: 58px;
  transform: rotate(10deg);
  /* transform: skew(-7deg); */
  .wrapper {
    display: flex;
    position: relative;
    border-right: 2px dashed black;
    border-left: 2px dashed black;
  }
  div.dot {
    position: absolute;
    width: 17px;
    height: 17px;
    border-radius: 100%;
    background-color: var(--background);
  }
  .top { 
    position: absolute;
    top: -7px; }
  .bottom { 
    position: absolute;
    bottom: -5px; }
  .left { 
    position: absolute;
    left: -8px; }
  .right { 
    position: absolute;
    right: -8px; }
 
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
          {/* <Ticket path="/" name="Movie Picker" /> */}
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