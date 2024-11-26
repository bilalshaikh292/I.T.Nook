import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { getUserData } from "../Components/util";


function NewEntery() {
  const [data, setData] = useState({
    name: "",
    device: "",
    otherAccessories: "",
    inDate:"",
    contactInfo: "",
    problem:"",
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await getUserData();
     let URL = import.meta.env.VITE_API_URL;
      const url = URL + "dashboard/newEntry";
        const { data: res } = await axios.post(url,data,{
          headers : {
            Authorization : "Bearer " + userInfo.token,
            isAdmin : userInfo.isAdmin,
            userId : userInfo.id,
        }
      });
        console.log({ data: res })
        navigate("/Dashboard")
    } catch (error) {
        console.log(error)
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
            
        ) {


        }
    }
};
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="Newentry-form px-8 pb-4 flex flex-col items-center h-screen w-[100%] ml-[13%] max-w-[87%]  bg-cover bg-[url('/images/entrypage.png')]  justify-center">
        <form className="flex flex-col flex-wrap" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl">New Entry</h1>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
            required
            className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
          />
          <input
            type="text"
            placeholder="Device"
            name="device"
            onChange={handleChange}
            value={data.device}
            required
            className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none  opacity-90"
          />
          <input
            type="text"
            placeholder="Other Accessories"
            name="otherAccessories"
            onChange={handleChange}
            value={data.otherAccessories}
            required
            className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
          />
          <input
            type="date"
            placeholder="Date"
            name="inDate"
            onChange={handleChange}
            value={data.inDate}
            required
            className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
          />
          <input
            type="text"
            placeholder="Contact Number"
            name="contactInfo"
            onChange={handleChange}
            pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
            value={data.contactInfo}
            required
            className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
          />
          <input
            type="text"
            placeholder="Problem"
            name="problem"
            onChange={handleChange}
            value={data.problem}
            className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
          />
          <button type="submit" className="bg-[#F79C67] font-bold text-base my-[5px] rounded-lg p-[15px] ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewEntery;
