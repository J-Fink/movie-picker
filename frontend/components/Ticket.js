import Link from 'next/link';
import styled from 'styled-components';

export const TicketStyles = styled.div`

  width: 115.7px;
  height: 64px;
  background-color: var(--logo);
  /* margin-right: 5px; */
  .wrapper {
    height: inherit;
    width: inherit;
    font-size: 2rem;
    line-height: 3rem;
    display: flex;
    position: relative;
    /* border-right: 2px dashed black; */
    border-left: 2px dashed black;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  /* background-color: var(--logo); */
  }
  div.dot {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: var(--background);
    /* shape-outside: circle(96% at 0%);
    clip-path: circle(59% at 0%); */
    border-radius: 50%;
    transform: rotate(0deg);
    /* border: 1px solid var(--border-color); */
    /* transform: rotate(45deg); */
    /* transform-origin: 13px 0px; */
    z-index: 1;
  }
  .top { 
    position: absolute;
    top: -7px;
    border-bottom: 1px solid var(--border-color);
    }
  .bottom { 
    position: absolute;
    bottom: -7px;
    border-top: 1px solid var(--border-color);
    transform: rotate(-41deg);
    transform-origin: 2px 7px;
    }

  .left { 
    position: absolute;
    left: -10px; }
  .right { 
    position: absolute;
    right: -7px; }
   a {
    margin: auto;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    /* padding: 0.5rem 1rem; */
  }
  .bottom.left {
    /* background-color: blue; */
    display: none;
  }
  .top.left {
    display: none;
  }
  a:hover {
    color: var(--red);
    text-decoration: none;
  }
  button:hover {
    color: var(--red);
    text-decoration: none;
    cursor: pointer;
  }
  .inner-border {
    border: 1px solid var(--border-color);
    border-radius: 17px;
    margin: 10px;
    width: inherit;
    height: inherit;
  }
  button {
    color: white;
    font-size: 2rem;
    text-transform: uppercase;
    background: inherit;
    border: none;
    width: inherit;
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