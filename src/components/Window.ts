import styled from "styled-components";
import {Theme} from "./Theme";

type WindowPropsType = {
   maximum?: boolean
}
export const Window = styled.div<WindowPropsType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  
  padding: 20px;
  
  font-size: ${props => props.maximum ? 75 : 50}px;
  color: ${props => props.maximum ? "red" : ""};
  
  height: 100%;
  border: ${Theme.border};
  border-radius: ${Theme["border-radius"]};
`