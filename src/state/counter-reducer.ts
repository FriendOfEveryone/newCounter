import {CounterStateType} from "../App";

const RESET_COUNT = 'RESET-COUNT';
const SET_CURRENT_VALUE = 'SET-CURRENT-VALUE';
const SET_MIN = 'SET-MIN';
const SET_MAX = 'SET-MAX';
const SET_MINMAX = 'SET-MINMAX';

type ResetCountActionType = {
   type: typeof RESET_COUNT
   payload: {
      nextValue: number
   }
}

type SetCurrentValue = {
   type: typeof SET_CURRENT_VALUE
   payload: {
      currentValue: number
   }
}

type SetMin = {
   type: typeof SET_MIN
   payload: {
      min: number
   }
}

type SetMax = {
   type: typeof SET_MAX
   payload: {
      max: number
   }
}

type SetMinMaxActionType = {
   type: typeof SET_MINMAX
   payload: {
      newMax: number,
      newMin: number
   }
}

export type ActionsTypes = ResetCountActionType | SetCurrentValue |
   SetMinMaxActionType | SetMin | SetMax

export const counterState: CounterStateType = {
   currentCount: 0,
   max: 1,
   min: 0,
}

export const counterReducer = (state = counterState, action: ActionsTypes): CounterStateType => {
   const {type, payload} = action
   switch (type) {
      case RESET_COUNT: {
         return {...state, currentCount: payload.nextValue}
      }
      case SET_CURRENT_VALUE: {
         return {...state, currentCount: payload.currentValue}
      }
      case SET_MINMAX: {
         return {...state, max: payload.newMax, min: payload.newMin}
      }
      case SET_MIN: {
         return {...state, min: payload.min}
      }
      case SET_MAX: {
         return {...state, max: payload.max}
      }
      default: return state
   }
}

export const ResetCountAC = (): ResetCountActionType => {
   return {
      type: RESET_COUNT,
      payload: {
         nextValue: 0
      }
   }
}

export const SetCurrentValueAC = (currentValue: number): SetCurrentValue => {
   return {
      type: SET_CURRENT_VALUE,
      payload: {
         currentValue
      }
   }
}

export const SetMinAC = (min: number): SetMin => {
   return {
      type: SET_MIN,
      payload: {
         min
      }
   }
}

export const SetMaxAC = (max: number): SetMax => {
   return {
      type: SET_MAX,
      payload: {
         max
      }
   }
}

export const SetMinMaxAC = (newMax: number, newMin: number): SetMinMaxActionType => {
   return {
      type: SET_MINMAX,
      payload: {
         newMax,
         newMin
      }
   }
}