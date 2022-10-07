import axios from "axios";

// Toggle between the register component and login component in the landing page
export const toggleComponent = (dispatch, component) => {
  dispatch({ type: "SET_COMPONENT", payload: { component } });
};

// Axios call to register a user
export const register = async ({ name, email, password }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("", body, config);

    return { type: "REGISTER_SUCCESS", payload: res.data };
  } catch (err) {
    return { type: "REGISTER_FAIL" };
  }
};
