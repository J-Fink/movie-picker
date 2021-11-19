import Link from 'next/link';
import styled from 'styled-components';

export const TicketStylesButton = styled.div`
display: flex;
width: 115.7px;
height: 64px;
background: var(--inverseBackground);
margin: auto;
/* margin-right: 5px; */

 a {
  margin: auto;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  line-height: 2rem;
}

a:hover {
  color: black;
  text-decoration: none;
}
button:hover {
  color: black;
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
  background: var(--inverseBackground);
  font-size: 2rem;
  text-transform: uppercase;
  border: none;
  width: inherit;
}
`;
export const TicketStyles = styled.div`
  width: 115.7px;
  height: 64px;
  background: var(--inverseBackground);
  display: flex;
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
    
  }
  
   a {
    margin: auto;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    height: inherit;
    width: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    line-height: 2rem;
  }
  
  a:hover {
    color: black;
    text-decoration: none;
  }
  button:hover {
    color: black;
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
    border: none;
    width: inherit;
  }

`;
export function TicketButton({ buttonType, message }) {
  return (
    <TicketStylesButton>
        <button type={buttonType}>{message}</button>
    </TicketStylesButton>
  )
};

export function TicketSingle({ path, name, clickHandler }) {
  
  return (
    <TicketStylesButton>
        
              {/* in order to pass an onClick function to a link, you need to pass it to a child */}
              <Link href={path}> 
                <a onClick={clickHandler}>
                {name}
                </a>
                </Link>
    </TicketStylesButton>
  )
};


export default function Ticket({ path, name, clickHandler }) {  
  return (
    <TicketStyles>
              {/* in order to pass an onClick function to a link, you need to pass it to a child */}
              <Link href={path}> 
                <a onClick={clickHandler}>
                {name}
                </a>
                </Link>
    </TicketStyles>
  )
}