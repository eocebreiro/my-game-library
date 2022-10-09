export const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    // Toggle between the register component and login component in the landing page
    case "SET_COMPONENT":
      return { ...state, component: payload.component };

    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case "REGISTER_SUCCESS":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        loading: false,
      };

    case "AUTH_ERROR":
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return { ...state, token: null, isAuthenticated: false, loading: false };
    default:
      return state;
  }
};
