import Link from 'next/link';
import styled from 'styled-components';

const TicketStyles = styled.div`
  width: 135px;
  height: 80px;
  background-color: var(--logo);
  /* margin-right: 5px; */
  .wrapper {
    height: inherit;
    width: inherit;
    font-size: 2rem;
    line-height: 3rem;
    display: flex;
    position: relative;
    border-right: 1.5px dashed black;
    border-left: 1.5px dashed black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  /* background-color: var(--logo); */
  }
  div.dot {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--background);
  }
  .top { 
    position: absolute;
    top: -9px; }
  .bottom { 
    position: absolute;
    bottom: -10px; }
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
    font-size: 2rem;
    /* padding: 0.5rem 1rem; */
  }
  a:hover {
    color: var(--red);
    text-decoration: none;
  }
  .inner-border {
    border: 1px solid black;
    border-radius: 17px;
    margin: 10px;
    width: inherit;
    height: inherit;
  }
  /* a:before {
    content: '';
    background-color: blue;
    color: red;
    height: 15px;
    width: 15px;

  } */
  a {
  /* background: #999; */
  /* width: 40px; */
  /* height: 40px; */
  /* border-radius: 20px; */
  text-decoration: none;
  /* color: #fff; */
  display: inline-block;
  /* line-height: 40px; */
  position: relative;
  /* border: 2px solid #000; */
  text-align: center;
}
/* a:after {
  content: '';
  display: block;
  position: absolute;
  top: -20px;
  bottom: -23px;
  left: 3px;
  right: 5px;
  border-radius: 13px;
  border: 1px solid black;
} */
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