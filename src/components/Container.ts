import styled from "styled-components";
import {Theme} from "./Theme";
type ContainerPropsType = {

}
export const Container = styled.div <ContainerPropsType>`
  display: flex;
  flex-direction: column;
  gap: 15px;

  min-width: 400px;
  max-width: 500px;
  width: 450px;
  height: 300px;
  padding: 15px;

  border: ${Theme.border};
  border-radius: ${Theme["border-radius"]};
`
