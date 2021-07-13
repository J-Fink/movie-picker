import Link from 'next/link';
import styled from 'styled-components';

export const TicketStylesButton = styled.div`
width: 115.7px;
height: 64px;
background-color: var(--logo);
margin: auto;
/* margin-right: 5px; */

.wrapper {
  height: inherit;
  width: inherit;
  font-size: 2rem;
  line-height: 3rem;
  display: flex;
  position: relative;
  border-left: 2px dashed black;
  border-right: 2px dashed black;//added back in for stand alone button
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);

}
div.dot {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--background);
 
  border-radius: 50%;
  transform: rotate(0deg);
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
}
.top.right {
  transform-origin: -2px 3px;
  transform: rotate(47deg);
  height: 9px;
  width: 9px;
}
.bottom.right {
  border-top: 1px solid var(--border-color); transform-origin: -2px 7px;
  transform: rotate(-45deg);
  height: 9px;
  width: 9px;
}
.top.left {
  transform-origin: 12px 0px;
  transform: rotate(-49deg);
  height: 9px;
  width: 9px;
}
.bottom.left {
  transform-origin: 13px 10px;
  transform: rotate(45deg);
  height: 9px;
  width: 9px;
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
  background: var(--logo);
  border: none;
  width: inherit;
}
`;
export const TicketStyles = styled.div`
  width: 115.7px;
  height: 64px;
  background-color: var(--logo);
  @media (max-width: 768px) {
  transform: rotate(-15deg);
  }
  .wrapper {
    height: inherit;
    width: inherit;
    font-size: 2rem;
    line-height: 3rem;
    display: flex;
    position: relative;
    border-left: 2px dashed black;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }
  div.dot {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: var(--background);
    border-radius: 50%;
    transform: rotate(0deg);
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
  }
  .bottom.left {
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
    background: var(--logo);
    border: none;
    width: inherit;
  }
  a {
  text-decoration: none;
  display: inline-block;
  position: relative;
  text-align: center;
}

`;
export function TicketButton({ buttonType, message }) {
  return (
    <TicketStylesButton>
      <div className="wrapper">
        <div className="top left dot"></div>
        <div className="top right dot"></div>
        <div className="bottom left dot"></div>
        <div className="bottom right dot"></div>
        <button type={buttonType}>{message}</button>
      </div>
    </TicketStylesButton>
  )
};
export default function Ticket({ path, name, clickHandler }) {
  
  return (
    <TicketStyles>
          <div className="wrapper">
              <div className="top left dot"></div>
              <div className="top right dot"></div>
              <div className="bottom left dot"></div>
              <div className="bottom right dot"></div>
              {/* in order to pass an onClick function to a link, you need to pass it to a child */}
              <Link href={path}> 
                <a onClick={clickHandler}>
                {name}
                </a>
                </Link>
          </div>
    </TicketStyles>
  )
}