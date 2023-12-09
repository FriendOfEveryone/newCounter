import React, {FC} from 'react';
import {SuperButton} from "./SuperButton";
import {Container} from "./Container";
import {Window} from "./Window";
import {ForButtons} from "./ForButtons";
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
      const isNotCorrect = (max: number, min: number) => max === min
   return (
      <Container>
         <Window>
            <InputWindow error = {isNotCorrect(max, min)} title={"Max value:"} valueMinMax={max} setValue={setMax}/>
            <InputWindow error = {isNotCorrect(max, min)} title={"Start value:"} valueMinMax={min} setValue={setMin}/>
         </Window>
         <ForButtons>
            <SuperButton onClick={onClickSetBtnHandler} disabled={isNotCorrect(max, min)}>
               set
            </SuperButton>
         </ForButtons>
      </Container>
   );
};
