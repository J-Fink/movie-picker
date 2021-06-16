import Link from 'next/link';
import styled from 'styled-components';
const TicketStyles = styled.div`
  width: 227px;
  height: 125px;
  background-color: var(--logo);
  margin-right: 5px;
  .wrapper {
    font-size: 2rem;
    line-height: 3rem;
    display: flex;
    position: relative;
  /* background-color: var(--logo); */
  }
  div.dot {
    position: absolute;
    width: 37px;
    height: 37px;
    border-radius: 100%;
    background-color: var(--background);
  }
  .top { 
    position: absolute;
    top: -6px; }
  .bottom { 
    position: absolute;
    bottom: -84px; }
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
    font-size: 4rem;
    /* padding: 0.5rem 1rem; */
  }
  a:hover {
    color: var(--red);
    text-decoration: none;
  }
`;

export default function Ticket({ path, name }) {
  
  return (
    <TicketStyles>
          <div className="wrapper">
            <div className="top left dot"></div>
            <div className="top right dot"></div>
            <div className="bottom left dot"></div>
            <div className="bottom right dot"></div>
            <Link href={path}>{name}</Link>
          </div>
    </TicketStyles>
  )
}