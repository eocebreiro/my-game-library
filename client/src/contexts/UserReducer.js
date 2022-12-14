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

    case "GET_PROFILE":
      return {
        ...state,
        loading: false,
        profile: payload,
      };

    case "SUCCESS":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        loading: false,
      };

    case "LOGOUT":
    case "ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        component: "login",
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
