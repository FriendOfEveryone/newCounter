import styled from "styled-components";
import {Theme} from "./Theme";
import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes} from "react";

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonVariant = 'primary' | 'secondary'| 'danger' | 'default'


type SuperButtonPropsType = DefaultButtonProps & {
 variant? : ButtonVariant
   square?: boolean
}

export const SuperButton = styled.button<SuperButtonPropsType>`
  width: 100px;
  height: 40px;
  background-color: ${Theme.mainColor};
  border-radius: ${Theme["border-radius"]};
  border: none;
 
  font-size: 30px;
  font-weight: bold;
  
  transition-duration: 0.15s;

  &:active {
    background-color: ${Theme.activeColor};
  }

  &:disabled {
    opacity: 0.6;
  }
`