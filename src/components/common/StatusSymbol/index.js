import styled from 'styled-components';

export const StatusSymbol = styled.span`
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-left: 50px;

  ${({ available }) => available && `
    background: green;
  `}
`;
