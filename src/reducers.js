import C from './const';

const HelloWorldReducer = (state = {}, action) => {
  switch (action.type) {
    case C.UPDATE_NAME:

      return {
        nameValue: action.nameValue
      };
    default:
      return state;
  }
};

export { HelloWorldReducer as default, HelloWorldReducer };