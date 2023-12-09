import React, {FC} from 'react';
import {SuperButton} from "./SuperButton";
import {Container} from "./Container";
import {Window} from "./Window";
import {ForButtons} from "./ForButtons";
import styled from "styled-components";
import {Theme} from "./Theme";

type CounterPropsType = {
   count: number
   callback: (count: number) => void
   max: number
   min: number
   error: boolean
   correcting: boolean
}

export const Counter: FC<CounterPropsType> = ({count, callback,
                                                 max, min,
                                                 error, correcting}) => {

   const isMaximum = (count: number, max: number) => count === max
   const onClickAddBtnHandler = () => {
      callback(count + 1);
   }
   const onClickResetBtnHandler = () => {
      callback(min);
   }

   return (
      <Container>
         <Window maximum={isMaximum(count, max)}>{correcting ? <Reminder>enter values and press "enter"</Reminder> : count}</Window>
         <ForButtons>
            <SuperButton onClick={onClickAddBtnHandler} disabled={count >= max ? true : false}>
               inc
            </SuperButton>
            <SuperButton onClick={onClickResetBtnHandler}>
               reset
            </SuperButton>
         </ForButtons>
      </Container>
   );
};

const Reminder = styled.p`
  color: ${Theme.mainColor};
  font-weight: bold;
  font-size: 20px;
`