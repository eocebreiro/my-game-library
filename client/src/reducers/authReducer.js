export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPONENT":
      return action.component;
    case "GET_COMPONENT":
      return state;
    default:
      return state;
  }
};
