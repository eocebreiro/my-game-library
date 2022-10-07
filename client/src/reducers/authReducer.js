export const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_COMPONENT":
      return { ...state, component: payload.component };
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", payload.token);
      return { ...state, isAuthenticated: true, loading: false };
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return { ...state, token: null, isAuthenticated: true, loading: false };
    default:
      return state;
  }
};
