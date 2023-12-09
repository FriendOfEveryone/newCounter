import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./components/Settings";
import {Counter} from "./components/Counter";
import styled from "styled-components";

function App() {

   const [count, setCount] = useState(0);
   const [max, setMax] = useState(1);
   const [min, setMin] = useState(0);
   const [error, setError] = useState(false);
   const [correcting, setCorrecting] = useState(false)

   const setMaxHandler = (value: number) => {
      setCorrecting(true);
      if (value >= min) {
         setMax(value)
      }
   }
   const setMinHandler = (value: number) => {
      setCorrecting(true);
      if (value <= max) {
         setMin(value)
      }
   }

   useEffect(() => {
      const currentValue = localStorage.getItem("counterValueKey");
      const maxValue = localStorage.getItem("maxValue");
      const minValue = localStorage.getItem("minValue");
      if (currentValue) {
         setCount(JSON.parse(currentValue));
      }
      if (maxValue) {
         setMax(JSON.parse(maxValue));
      }
      if (minValue) {
         setMin(JSON.parse(minValue));
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("counterValueKey", JSON.stringify(count))
   }, [count]);

   const setLocal = () => {
      setCorrecting(false);
      localStorage.setItem("maxValue", JSON.stringify(max));
      localStorage.setItem("minValue", JSON.stringify(min));
      setCount(min);
   }

   return (
      <>
         <Main>
            <Settings max={max} setMax={setMaxHandler}
                      min={min} setMin={setMinHandler}
                      setLocal={setLocal}
            />
            <Counter correcting={correcting} count={count} callback={setCount} max={max} min={min} error={error}/>
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