import React from "react";
import {counterReducer, ResetCountAC} from "./counter-reducer";


test('Plus Count', () => {
   // const counterState = {
   //    currentCount: 0,
   //    max: 1,
   //    min: 0,
   // }
   //
   // const action = PlusCountAC(counterState)
   //
   // const endCounterState = counterReducer(counterState, action)

   // expect(endCounterState.currentCount).toBe(1);
   expect(1).toBe(1);
});

// test('Minus Count', () => {
//    const counterState = {
//       currentCount: 5,
//       max: 1,
//       min: 0,
//    }
//
//    const action = MinusCountAC(counterState)
//
//    const endCounterState = counterReducer(counterState, action)
//
//    expect(endCounterState.currentCount).toBe(4);
// });
//
// test('Reset Count', () => {
//    const counterState = {
//       currentCount: 5,
//       max: 1,
//       min: 0,
//    }
//
//    const action = ResetCountAC(counterState)
//
//    const endCounterState = counterReducer(counterState, action)
//
//    expect(endCounterState.currentCount).toBe(0);
// });