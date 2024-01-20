import React, {FC} from 'react';
import {SuperButton} from "./SuperButton";
import {Container} from "./Container";
import {Window} from "./Window";
import {ForButtonsContainer} from "./ForButtons";
import {InputWindow} from "./InputWindow";

type SettingsPropsType = {
   max: number
   setMax: (value: number) => void
   min: number
   setMin: (value: number) => void
   setLocal: (max: number, min: number) => void
}

export const Settings: FC<SettingsPropsType> = ({max, setMax, min, setMin, setLocal}) => {

   const onClickSetBtnHandler = () => {
      setLocal(max, min);
   }

   const isNotCorrect = max === min

   return (
      <Container>
         <Window>
            <InputWindow error={isNotCorrect} title="Max value:" valueMinOrMax={max} setValue={setMax}/>
            <InputWindow error={isNotCorrect} title="Start value:" valueMinOrMax={min} setValue={setMin}/>
         </Window>
         <ForButtonsContainer>
            <SuperButton onClick={onClickSetBtnHandler} disabled={isNotCorrect}>
               set
            </SuperButton>
         </ForButtonsContainer>
      </Container>
   );
};
