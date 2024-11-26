import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import AuthRedirect from "../Components/AuthRedirect";
import {getUserData} from "../Components/util";

function UpdatePendingEntry() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [updatedData, setUpdatedData] = useState({
    outDate : "none",
    moneyStatus : "unpaid",
    amount: 0,
  });
  const [customRemark, setCustomRemark] = useState("");
  const [isCustomRemark, setIsCustomRemark] = useState(false);
  const [authError,setError] = useState(false);
  

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const userInfo = await getUserData();
      let URL = import.meta.env.VITE_API_URL;
      const response = await axios.get(URL +`dashboard/taskdetials/${id}`,{
        headers : {
          Authorization : "Bearer " + userInfo.token,
          isAdmin : userInfo.isAdmin,
          userId : userInfo.id,
          
      }
    });
      setUpdatedData({
        moneyStatus : response.data[0].moneyStatus,
        amount : response.data[0].amount,
        outDate : response.data[0].outDate ,
      })
      setData(response.data);
      setIsLoading(false);
    } 
    catch(error){
      if(error.response.status == 401){
          setError(true);
      }
  }
  };

  const handleUpdate = async () => {
    try {
      const userInfo = await getUserData();
      let URL = import.meta.env.VITE_API_URL;
      const updatedRemark = isCustomRemark ? customRemark : updatedData.remark;
      const response = await axios.put(URL + `/dashboard/updateCompletedTask/${id}`,
         updatedData,
         {
        headers : {
          Authorization : "Bearer " + userInfo.token,
          isAdmin : userInfo.isAdmin,
          userId : userInfo.id,
          
      }
    }).then(navigate("/Dashboard/totaltask"));
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Error updating entity details");
    }
  };

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

console.log(updatedData)

  return (
    <div>
    {authError ? (<>
    <AuthRedirect />
    </>) : (
    <div className="flex w-full">
      <Sidebar />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="px-8 pb-4 flex flex-col items-center justify-center h-screen w-[100%] ml-[13%] max-w-[87%]  bg-[url('/images/updatepage.jpg')] bg-cover">
            <h1 className="py-5 text-2xl text-center">Update Entry ID: <strong>{id}</strong></h1>
            <div>
              {data.map((entity, index) => (
                <div key={index}>
                  <p className="text-xl my-2">Name : &nbsp;<strong>{entity.name}</strong></p>
                  <p className="text-xl my-2">Device : &nbsp;<strong>{entity.device}</strong></p>
                  <p className="text-xl my-2">Status : &nbsp;<strong>{entity.status}</strong></p>
                  <p className="text-xl my-2">Money : &nbsp;<strong>{entity.amount}</strong></p>
                  <p className="text-xl my-2">Money Status : &nbsp;<strong>{entity.moneyStatus}</strong></p>
                </div>
              ))}
              <div>
                <h1 className="my-5 text-xl text-center">Update the Above Entry</h1>
                <form className="flex flex-col items-center">
                <div className="flex items-center">
                <p className="font-bold text-xl">Out Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</p>
                <input
            type="date"
            placeholder="Date"
            name="outDate"
            onChange={handleChange}
            value={data.outDate}
            required
            className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
          />
          </div>
          <div className="flex items-center">
          <p className="font-bold text-xl">Money Status&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</p>
                <select
                    name="moneyStatus"
                    value={updatedData.moneyStatus}
                    onChange={handleChange}
                    className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
                  >
                    <option value="unpaid">unpaid</option>
                    <option value="paid">paid</option>
                  </select>
                  </div>
                  <div className="flex items-center">
                  <p className="font-bold text-xl">Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</p>
                  <input
                    type="text"
                    placeholder="Money Status"
                    name="amount"
                    value={updatedData.amount}
                    onChange={handleChange}
                    className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
                  />
                  </div>
                  {/* Add more input fields based on your data structure */}
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-[#F79C67] font-bold text-base my-[5px] rounded-lg p-[15px]"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    )}
    </div>
  );
}

export default UpdatePendingEntry;
