import { createStore } from 'redux';
import { defaultState } from '../defaultState';

export const store = createStore(
  function reducer(state=defaultState, _action){
    return state;
  }
);
