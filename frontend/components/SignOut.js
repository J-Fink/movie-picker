import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';
import { TicketStyles } from './Ticket';
import { useUser } from './User';
import txtResize from './TextResizer';
import { useEffect, useRef, useState } from 'react';
const SignOutStyles = styled.div`
    display: flex;
    justify-content: end;
    
    button {
        background: var(--inverseBackground);
    }
    button:hover {
        color: white;
        cursor: pointer;
        pointer-events: none;
    }
    .sign-out {
        color: grey;
        font-size: 10px;
        position: absolute;
        top: 45px;
        left: 8px;
        :hover {
            color: var(--red);
            cursor: pointer;
        }
    }
`;
const SIGNOUT_MUTATION = gql`
    mutation {
        endSession
    }

`;

export default function SignOut({ clickHandler }) {
    const spanRef = useRef(null);
    const [shouldUpdate, setShouldUpdate] = useState(true);
    useEffect(() => {
        console.log(spanRef.current);
        console.log(spanRef?.current?.style);
        let a = spanRef?.current?.style;
        a.fontSize = "25px";
        // console.log(a);
        console.log(spanRef?.current?.style?.fontSize);
        console.log(spanRef?.current.childNodes[0].data);
       let aResize = txtResize(spanRef.current.childNodes[0].data, 25, 'radnika_next', 96.9);
       console.log(aResize); 
       a.fontSize = aResize.finalFontSize;
       // a.fontSize = aResize.finalFontSize;
        }, []);
    
    const [signout] = useMutation(SIGNOUT_MUTATION, {
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });
    const signoutMenu = () => {
        signout();
        clickHandler();
    }
    const me = useUser();
    // const changeFont = () => {
    // }
    // console.log(spanRef?.current?.style?.fontSize);
    // changeFont();
    // let nameSpan = window.getElementById('name-span')
    // console.log(nameSpan);
    // console.log(window.getComputedStyle("span"));

    // var style = window.getComputedStyle(tha, null).getPropertyValue('font-size');
    return (
        <TicketStyles>
            <SignOutStyles className="wrapper">
                <button type="button" onClick={signoutMenu}>
                    <span id="name-span" ref={spanRef}>{me.name}</span>
                    <span className="sign-out">Not you? Sign Out</span>
                </button>
            </SignOutStyles>
        </TicketStyles>
    )
}