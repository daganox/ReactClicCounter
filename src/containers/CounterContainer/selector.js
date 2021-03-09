import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCounterContainerDomain = state => state.counterContainer || initialState;
const makeSelectCounterContainer = () => createSelector(selectCounterContainerDomain, substate => substate.counter);

export {
  makeSelectCounterContainer,
};
