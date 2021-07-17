import styled from 'styled-components';
import RequestReset from "./RequestReset";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const GridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
`;

export default function AccountAccess() {
    return(
        <GridStyles>
            <SignIn />
            <SignUp />
            <RequestReset />
        </GridStyles>
    )
}