import styled from 'styled-components';

const LoadButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border-radius: 8px;
  border-color: transparent;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 100px;
  margin-bottom: 50px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #5f77d3;
    box-shadow: 0px 6px 3px -3px rgba(0, 0, 0, 0.2),
      0px 3px 5px 0px rgba(0, 0, 0, 0.14), 0px 3px 7px 0px rgba(0, 0, 0, 0.12);
  }
`;

export { LoadButton };
