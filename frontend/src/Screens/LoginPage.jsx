import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const setUserInfo = ({
    _id = "",
    name = "",
    token = "",
    isAdmin = false,
  }) => {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        _id,
        name,
        token,
        isAdmin,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let URL = import.meta.env.VITE_API_URL;
      const res = await axios.post(URL + "users/signin", data);
      setUserInfo(res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="bg-[#f5f5f5] h-screen bg-cover bg-no-repeat w-[100%] flex items-center justify-center">
        <div className="w-[900px] h-[500px] rounded-3xl overflow-hidden flex justify-center items-center shadow-[0px_3px_3px_-2px_rgba(0,0,0,0.2),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_1px_8px_0px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col border-2 h-[502px] w-[300px] bg-[#3bb19b] items-center justify-center mr-auto">
          <h1 className="text-3xl text-white">New Here ?</h1>
          <Link to="/signup">
            <button className="text-blue-900 my-4" type="button">
             Click Here to Sing Up
            </button>
          </Link>
          </div>
          <div>
          <form className="flex flex-col items-center w-[600px] h-[544px] bg-white justify-center" onSubmit={handleSubmit}>
            <h1 className="text-3xl my-6">Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className="w-[370px] bg-[#3bb19b] rounded-lg p-3 my-5">
              Sing In
            </button>
            
            <p className="text-black">Or</p>
            <div className="flex my-6 gap-8">
            <i className="fa-brands fa-google fa-2xl"></i>
            <i className="fa-brands fa-facebook fa-2xl"></i>
            <i className="fa-brands fa-twitter fa-2xl"></i>
            </div>

          </form>

          </div>

          
          
        </div>
          
        </div>
  );
}
export default Login;
