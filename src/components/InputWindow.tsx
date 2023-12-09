import React, {ChangeEvent, FC} from 'react';
import styled from "styled-components";
import {Theme} from "./Theme";

type InputWindowPropsType = {
   title: string
   valueMinMax: number
   setValue: (value: number) => void
   error: boolean
}
export const InputWindow: FC<InputWindowPropsType> = ({title, valueMinMax, setValue, error}) => {

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (Number(e.currentTarget.value) >= 0 )
         setValue(Number(e.currentTarget.value))
   }

   return (
      <StyledInput error={error}>
         <label htmlFor={title}>{title}</label>
         <input type={"number"} value={valueMinMax} onChange={onChange} id={title}/>
      </StyledInput>
   );
};

const StyledInput = styled.div<{error: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  label {
    font-weight: bold;
    font-size: 20px;
    color: ${Theme.mainColor};
  }

  input {
    max-width: 200px;
    height: 40px;
    border: ${Theme.border};
    border-radius: ${Theme["border-radius"]};
    font-size: 20px;
    text-align: center;
    color: black;
    
    box-shadow: ${props => props.error ? "inset 0px 0px 10px 2px red" : "" };
    
  }
`

