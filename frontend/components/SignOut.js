import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';
import { TicketStyles } from './Ticket';


const SignOutStyles = styled.button`
    background-color: blue;
`;
const SIGNOUT_MUTATION = gql`
    mutation {
        endSession
    }

`;

export default function SignOut({ clickHandler }) {
    const [signout] = useMutation(SIGNOUT_MUTATION, {
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });
    const signoutMenu = () => {
        signout();
        clickHandler();
    }
    return (
        <TicketStyles>
            <div className="wrapper">
              <div className="top left dot"></div>
              <div className="top right dot"></div>
              <div className="bottom left dot"></div>
              <div className="bottom right dot"></div>
                <button type="button" onClick={signoutMenu}>Sign Out</button>
          </div>
        </TicketStyles>
    )
}