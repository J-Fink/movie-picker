import styled from 'styled-components';

const Rating = styled.span`
  background: var(--ratingBackground);
  transform: rotate(3deg);
  color: var(--titleTextColor);
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 15px;
  left: -23px;
`;

export default Rating;