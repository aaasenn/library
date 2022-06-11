import styled, { css } from 'styled-components';

export interface IButton {
  color?: string,
  size?: string,
  disabled?: boolean
}

const Button = styled.button<IButton>`
  width:  300px;
  height:  100px};
  border: none;
  border-radius: 2px;
  margin: 20px;
  font-weight: 700;
  background-color: red;
`;

export default Button;