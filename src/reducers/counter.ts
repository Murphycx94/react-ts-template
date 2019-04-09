import { counterTypes } from '../actions/counter';

interface IState {
  value: number
};

const initialState: IState = {
  value: 0
};

const counterReducers = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case counterTypes.INCREMENT:
      return {
        ...state,
        value: state.value + action.value
      };

    case counterTypes.INCREMENT:
      return {
        ...state,
        value: state.value - action.value
      };

    default:
      return {
        ...state
      };
  };
};

export default counterReducers;
