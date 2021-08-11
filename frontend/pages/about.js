import styled from "styled-components"
import { TicketSingle } from "../components/Ticket";
const AboutPageStyles = styled.div`
border: 4px solid white;
border-radius: 10px;
max-width: 400px;
margin: auto;
/* margin: var(--headerHeight) auto auto auto; */
box-shadow: rgb(0 0 0 / 20%) 2px 2px 3px;
padding-bottom: 5px;

`;

export default function AboutPage() {
    return (
        <AboutPageStyles>
            <h1>Welcome to Movie Picker</h1>
            <div>It's tough choosing what to watch. My solution? Make a computer choose for you.</div>
            <TicketSingle path="/signin" name="get started" />
        </AboutPageStyles>
    )
}