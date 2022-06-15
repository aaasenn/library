import React from 'react';
import styled, { css} from 'styled-components';
import { ButtonTypeMap, Button } from '@mui/material';

type IButton = {
  color?: string,
  size?: string | number,

}

type IButtonTypeMap = Omit<ButtonTypeMap, 'color' | 'size' | 'disabled'>
const Button3 = styled(({ children, size, color, disabled, ...other }: any) => <Button {...other}>{children}</Button>)<IButtonTypeMap & IButton>`&& {
  width:  ${({ theme, size = 'medium' }) => theme.buttons[size] ? theme.buttons[size].width : `${size}px`};
  height:  ${({ theme, size = 'medium' }) => theme.buttons[size] ? theme.buttons[size].height : theme.buttons.medium.height};
  border: none;
  border-radius: 2px;
  margin: 20px;
  font-weight: 700;
  color: ${({theme, disabled}) => disabled ? theme.colors.secondary.textColor : theme.colors.primary.textColor};
  background-color:  ${({theme, color = 'white'}) => theme.colors.primary[color] ? theme.colors.primary[color] : color};
  ${({ disabled }) => !disabled && css`
      cursor: pointer;
      &:hover {
        background-color: ${({ theme, color }:any) => theme.colors.primary[`${color}Hovered`]};
      }
    }`}
`;

export default Button3;