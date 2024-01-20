import styled from "styled-components";
import {Theme} from "./Theme";

export const ForButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 70px;
  height: 100%;
  border: ${Theme.border};
  border-radius: ${Theme["border-radius"]};
`