import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Settings} from "./components/Settings";
import {Counter} from "./components/Counter";
import styled from "styled-components";
import {counterReducer, counterState, SetCurrentValueAC, SetMaxAC, SetMinAC} from "./state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type CounterStateType = {
   currentCount: number
   min: number
   max: number
}

function App() {

   const valuesCounter = useSelector<AppRootStateType, CounterStateType>((state => state.valuesCounter));
   const dispatch = useDispatch()
   const [correcting, setCorrecting] = useState(false)

   const setMaxHandler = (value: number) => {
      setCorrecting(true);
      if (value >= valuesCounter.min) {
         dispatch(SetMaxAC(value))
      }
   }
   const setMinHandler = (value: number) => {
      setCorrecting(true);
      if (value <= valuesCounter.max) {
         dispatch(SetMinAC(value))
      }
   }

   useEffect(() => {
      const currentValue = localStorage.getItem("counterValueKey");
      const maxValue = localStorage.getItem("maxValue");
      const minValue = localStorage.getItem("minValue");
      if (currentValue) {
         dispatch(SetCurrentValueAC(JSON.parse(currentValue)))
      }
      if (maxValue) {
         dispatch(SetMaxAC(JSON.parse(maxValue)))
      }
      if (minValue) {
         dispatch(SetMinAC(JSON.parse(minValue)))
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("counterValueKey", JSON.stringify(valuesCounter.currentCount))
   }, [counterState.currentCount]);

   const setLocal = () => {
      setCorrecting(false);
      localStorage.setItem("maxValue", JSON.stringify(valuesCounter.max));
      localStorage.setItem("minValue", JSON.stringify(valuesCounter.min));
      dispatch(SetCurrentValueAC(valuesCounter.min));
   }

   return (
      <>
         <Main>
            <Settings max={valuesCounter.max}
                      setMax={setMaxHandler}
                      min={valuesCounter.min}
                      setMin={setMinHandler}
                      setLocal={setLocal}
            />
            <Counter correcting={correcting} count={valuesCounter.currentCount} dispatch={dispatch} max={valuesCounter.max} min={valuesCounter.min}/>
         </Main>
      </>
   );
}

export default App;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  padding: 20px;

  background-color: #5d5b5b;

  min-height: 100vh;
  height: 100%;
`