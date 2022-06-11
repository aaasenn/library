import styled, { css } from 'styled-components';

export interface IButton {
  color: string,
  size: string,
  disabled?: boolean
}

const Button2 = styled.button<IButton>`
  width:  ${({ theme, size }) => theme.buttons[size].width};
  height:  ${({ theme, size }) => theme.buttons[size].height};
  border: none;
  border-radius: 2px;
  margin: 20px;
  font-weight: 700;
  background-color:  ${({ disabled, theme, color }) => (
    disabled ? theme.colors.primary[`${color}Disabled`] : theme.colors.primary[color])};
  ${({ disabled }) => !disabled
  && css`
      cursor: pointer;
      &:hover {
        background-color: ${({ theme, color }:any) => theme.colors.primary[`${color}Hovered`]};
      }
  `}
`;

export default Button2;