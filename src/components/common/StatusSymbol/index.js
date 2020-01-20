import styled from 'styled-components';

export const StatusSymbol = styled.span`
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;

  ${({available})} =>
    available &&
    `
      background-color: green;
    `}
`;
