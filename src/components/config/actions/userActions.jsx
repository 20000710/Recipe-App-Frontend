import axios from "axios";
import Swal from "sweetalert2";

export const register = (data, navigate, setLoading) => async (dispatch) => {
  try {
    const result = await axios.post(
      process.env.REACT_APP_API_BACKEND + "/auth/register",
      data
    );
    const user = result.data.data;
    console.log(user);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    alert(result.data.message);
    Swal.fire({
      text: result.data.message,
      icon: "success",
    });
    navigate("/login");
  } catch (error) {
    console.log(error.response.data.error);
    Swal.fire({
      text: error.response.data.message,
      text: error.response.data.error,
      icon: "warning",
    });
    setLoading(false);
  }
};
