import axios from "axios";

export const toggleComponent = ({ component }) => {
  return { type: "SET_COMPONENT", payload: { component } };
};

export const register =
  ({ name, email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post("", body, config);

      return { type: REGISTER_SUCCESS, payload: res.data };
    } catch (err) {
      return { type: REGISTER_FAIL };
    }
  };
