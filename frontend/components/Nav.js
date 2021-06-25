import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SignOut from './SignOut';
// import NavStyles from './styles/NavStyles';
import Ticket from './Ticket';
import { useUser } from './User';
const NavStyles = styled.header`
    --line-height: 6.5vh;
    left: 0;
    width: 100%;
    height: 35px;/*var(--headerHeight);*/
    display: flex;
    /* background: red; var(--navColor); */
    position: fixed;
    justify-content: flex-end;
    text-transform: uppercase;
    padding-top: 27px;
    
    /* margin: 0 auto; */
    z-index: 3;
    align-self: center;
    //This targets the first and last of the nav items
    .Ticket__TicketStyles-sc-1icmcvz-0:last-of-type {
      background-color: tan;
    }
    .Ticket__TicketStyles-sc-1icmcvz-0:first-of-type {
      background-color: tan;
    }
    
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
const Hamburger = styled.div`
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
  @media (max-width: 768px) {
    margin-top: var(--headerHeight);
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    /* padding-top: 10vh; */
    background-color: var(--background); /*var(--navBoxBackgroundColor);*/ 
    transition: all .75s ease-in-out;
    
    /* top: var(--headerHeight); */
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;
export default function Nav() {
  const [menuState, setMenuState] = useState(false);
  const user = useUser();
  // console.log(user);
  return (
    <NavStyles>      
        <Toggle onClick={() => setMenuState(!menuState)}>
        {/* below shows the hamburger bun or not */}
        {menuState ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {user && (
              menuState ? (
                <Navbox>
                  <Ticket name="To Watch" path="/movies" />
                  <Ticket name="Seen" path="/seen" />
                  <Ticket name="Pick" path="/pick" />
                  <Ticket name="Add" path="/add" />
                  <SignOut />
                </Navbox>
              ) : (
                <Navbox open>
                  <Ticket name="To Watch" path="/movies" />
                  <Ticket name="Seen" path="/seen" />
                  <Ticket name="Pick" path="/pick" />
                  <Ticket name="Add" path="/add" />
                  <SignOut />
                </Navbox>
              )
              )}
        {!user && (
              menuState ? (
                <Navbox>
                  {/* <Ticket name="To Watch" path="/movies" /> */}
                  {/* <Ticket name="Seen" path="/seen" /> */}
                  {/* <Ticket name="Pick" path="/pick" /> */}
                  {/* <Ticket name="Add" path="/add" /> */}
                  <Ticket name="Sign In" path="/signin" />
                  {/* <SignOut /> */}
                </Navbox>
              ) : (
                <Navbox open>
                  {/* <Ticket name="To Watch" path="/movies" /> */}
                  {/* <Ticket name="Seen" path="/seen" /> */}
                  {/* <Ticket name="Pick" path="/pick" /> */}
                  {/* <Ticket name="Add" path="/add" /> */}
                  <Ticket name="Sign In" path="/signin" />
                  {/* <SignOut /> */}
                </Navbox>
              )
        )}
    </NavStyles>
  );
}