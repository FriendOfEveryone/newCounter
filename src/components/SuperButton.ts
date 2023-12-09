import styled from "styled-components";
import {Theme} from "./Theme";

type SuperButtonPropsType = {

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