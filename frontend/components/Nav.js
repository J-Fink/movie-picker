import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SignOut from './SignOut';
// import NavStyles from './styles/NavStyles';
import Ticket from './Ticket';
import { useUser } from './User';
import { TicketStyles } from './Ticket';
import { Logo } from './Header';

const NavStyles = styled.header`
    --line-height: 6.5vh;
    left: 0;
    width: 100%;
    height: var(--headerHeight);
    display: flex;
    /* background: red; var(--navColor); */
    position: fixed;
    justify-content: flex-end;
    text-transform: uppercase;
    padding-top: 0px;
    background-color: var(--background);
    border-bottom:1px solid var(--border-color);
    
    /* margin: 0 auto; */
    z-index: 3;
    align-self: center;
    //This targets the first and last of the nav items, issue of the id changing, need to figure this out
    /* .Ticket__TicketStyles-sc-1icmcvz-1:first-of-type {
      background-color: tan;
      .wrapper div.top.left.dot {
        transform-origin: 12px 0px;
        transform: rotate(-49deg);
        height: 9px;
        width: 9px;
        display: block; 
        //because left dots were made display none so they don't double up
      }
      .wrapper div.bottom.left.dot {
        transform-origin: 13px 10px;
        transform: rotate(45deg);
        height: 9px;
        width: 9px;
        display: block; //because left dots were made display none so they don't double up
      }
    } */
    /* .Ticket__TicketStyles-sc-1icmcvz-1:last-of-type {
      .wrapper div.top.right.dot {
        transform-origin: -2px 3px;
        transform: rotate(47deg);
        height: 9px;
        width: 9px;
      }
      .wrapper {
        border-right: 2px dashed black;
      }
      .wrapper div.bottom.right.dot {
        
        
        border-top: 1px solid var(--border-color); transform-origin: -2px 7px;
        transform: rotate(-45deg);
        height: 9px;
        width: 9px;
      }
      
      background-color: tan;
    } */
    
    @media (max-width: 770px) {
        /* touch-action: none; */
        /* position: sticky; */
        /* top: 0;
        left: 0;
        right: 0;
        left: 0; */
    }`;
const Toggle = styled.div`
    display: none;
    height: 30px;//height of hamburger compiled
    cursor: pointer;
    /* padding: 0 10vw; */
    margin-right: 20px;
    transition: all /*var(--transition-duration)*/.2s ease-in-out;
    @media (max-width: 768px) {
    margin-top: 17px;//calc((var(--headerHeight) - 30px) * .5)px;//take height of header, subtract height of hamburger compiled, divide by 2
    display: flex;
    z-index: 1;
    }
`;
export const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  /* transition: all 1.75s ease-in-out; */
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;
const Navbox = styled.div`
    margin-right: 2vw;
    font-size: 17px;/*var(--navFontSize);*/
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    
    // the below targets the first nav item
    ${TicketStyles}:first-of-type {
      // background-color: blue;
      .wrapper div.top.left.dot {
        transform-origin: 12px 0px;
        transform: rotate(-49deg);
        height: 9px;
        width: 9px;
        display: block; //because left dots were made display none so they don't double up
      }
      .wrapper div.bottom.left.dot {
        transform-origin: 13px 10px;
        transform: rotate(45deg);
        height: 9px;
        width: 9px;
        display: block; //because left dots were made display none so they don't double up
      }
    }
    // the below targets the last nav item
    ${TicketStyles}:last-of-type {
      .wrapper div.top.right.dot {
        transform-origin: -2px 3px;
        transform: rotate(47deg);
        height: 9px;
        width: 9px;
      }
      .wrapper {
        border-right: 2px dashed black;
      }
      .wrapper div.bottom.right.dot { 
        border-top: 1px solid var(--border-color); transform-origin: -2px 7px;
        transform: rotate(-45deg);
        height: 9px;
        width: 9px;
      }
      /* background-color: tan; */
    }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    justify-items: center;
    margin: 0 auto;
    padding-bottom: 96px;
    margin-top: var(--headerHeight);
    height: 100vh;
    overflow-y: hidden;
    position: fixed;
    width: 100%;
    background-color: var(--background);
    transition: all .75s ease-in-out;
    left: ${props => (props.open ? "-100%" : "0")};

// the below targets the first nav item
${TicketStyles} {
      .wrapper div.top.left.dot {
        transform-origin: 12px 0px;
        transform: rotate(-49deg);
        height: 12px;
        width: 12px;
        display: block; //because left dots were made display none so they don't double up
      }
      .wrapper div.bottom.left.dot {
        transform-origin: 13px 10px;
        transform: rotate(45deg);
        height: 12px;
        width: 12px;
        display: block; //because left dots were made display none so they don't double up
      }
      .wrapper div.top.right.dot {
        transform-origin: 1px 3px;
        transform: rotate(47deg);
        height: 12px;
        width: 12px;
      }
      .wrapper {
        border-right: 2px dashed black;
      }
      .wrapper div.bottom.right.dot { 
        border-top: 1px solid var(--border-color); transform-origin: 1px 8px;
        transform: rotate(-45deg);
        height: 12px;
        width: 12px;
      }
      /* background-color: tan; */
    }
    }

  }
`;
export default function Nav() {
  const [menuState, setMenuState] = useState(false);
  const user = useUser();
  const handleClick = () => {
    console.log(menuState);
    setMenuState(!menuState);
    console.log(menuState);
  }
  // console.log(user);
  return (
    <NavStyles>      
        <Toggle onClick={handleClick}>
        {/* below shows the hamburger bun or not */}
        {menuState ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {user && (
              menuState ? (
                <Navbox>
                  {/* <Ticket clickHandler={handleClick} name="Welcome" path="/movies" /> */}
                  <Ticket clickHandler={handleClick} name="Seen" path="/seen" />
                  <Ticket clickHandler={handleClick} name="Pick" path="/pick" />
                  <Ticket clickHandler={handleClick} name="Add" path="/add" />
                  <Ticket clickHandler={handleClick} name="Search" path="/search" />
                  <SignOut clickHandler={handleClick} />
                </Navbox>
              ) : (
                <Navbox open>
                  {/* <Ticket clickHandler={handleClick} name="Welcome" path="/movies" /> */}
                  <Ticket clickHandler={handleClick} name="Seen" path="/seen" />
                  <Ticket clickHandler={handleClick} name="Pick" path="/pick" />
                  <Ticket clickHandler={handleClick} name="Add" path="/add" />
                  <Ticket clickHandler={handleClick} name="Search" path="/search" />
                  <SignOut />
                </Navbox>
              )
              )}
        {!user && (
          menuState ? (
            <Navbox>
                  <Ticket clickHandler={handleClick} name="Welcome" path="/movies" />
                  {/* <Ticket name="Seen" path="/seen" /> */}
                  {/* <Ticket name="Pick" path="/pick" /> */}
                  {/* <Ticket name="Add" path="/add" /> */}
                  <Ticket clickHandler={handleClick} name="Sign In" path="/signin" />
                  {/* <SignOut /> */}
                </Navbox>
              ) : (
                <Navbox open>
                  <Ticket clickHandler={handleClick} name="Welcome" path="/movies" />
                  {/* <Ticket name="To Watch" path="/movies" /> */}
                  {/* <Ticket name="Seen" path="/seen" /> */}
                  {/* <Ticket name="Pick" path="/pick" /> */}
                  {/* <Ticket name="Add" path="/add" /> */}
                  <Ticket clickHandler={handleClick} name="Sign In" path="/signin" />
                  {/* <SignOut /> */}
                </Navbox>
              )
        )}
    </NavStyles>
  );
}