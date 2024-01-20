import React, {Dispatch, DispatchWithoutAction, FC, ReducerAction} from 'react';
import {SuperButton} from "./SuperButton";
import {Container} from "./Container";
import {Window} from "./Window";
import {ForButtonsContainer} from "./ForButtons";
import styled from "styled-components";
import {Theme} from "./Theme";
import {ActionsTypes, counterReducer, SetCurrentValueAC} from "../state/counter-reducer";

type CounterPropsType = {
   count: number
   //dispatch: any
   dispatch:  Dispatch<ReducerAction<typeof counterReducer>>
   // callback: (count: number) => void
   max: number
   min: number
   correcting: boolean
}

export const Counter: FC<CounterPropsType> = ({
                                                 count,
                                                 dispatch,
                                                 max,
                                                 min,
                                                 correcting
}) => {

   const isMaximum = count === max
   const onClickAddBtnHandler = () => {
      dispatch(SetCurrentValueAC(count + 1));
   }
   const onClickResetBtnHandler = () => {
      dispatch(SetCurrentValueAC(min));
   }

   return (
      <Container>
         <Window maximum={isMaximum}>{correcting ? <Reminder>enter values and press "enter"</Reminder> : count}</Window>
         <ForButtonsContainer>
            <SuperButton onClick={onClickAddBtnHandler} disabled={count >= max}>
               inc
            </SuperButton>
            <SuperButton onClick={onClickResetBtnHandler} variant='primary'>
               reset
            </SuperButton>
         </ForButtonsContainer>
      </Container>
   );
};

const Reminder = styled.p`
  color: ${Theme.mainColor};
  font-weight: bold;
  font-size: 20px;
`