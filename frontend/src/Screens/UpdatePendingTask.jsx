import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import {getUserData} from "../Components/util";
import AuthRedirect from "../Components/AuthRedirect";

function UpdateEntry() {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);
  const navigate = useNavigate();
  const [authError,setError] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    device: "",
    otherAccessories: "",
    status: "",
    remark: "",
    amount: 0,
    moneyStatus: "",
    inDate: "",
    outDate: "",
    contactInfo: "",
    problem: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const userInfo = await getUserData();
      let URL = import.meta.env.VITE_API_URL;
      const response = await axios.get(
        URL + `dashboard/pendingtask/${id}`,
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
            isAdmin: userInfo.isAdmin,
            userId: userInfo.id,
          },
        }
      );
      const data = response.data;
      setdata(data);
      setUpdatedData({
        name: data[0].name,
        device: data[0].device,
        other_accessories: data[0].otherAccessories,
        status: data[0].status,
        remark: data[0].remark,
        amount: data[0].amount,
        moneyStatus: data[0].moneyStatus,
        inDate: data[0].moneyStatus,
        outdate: data[0].outDate,
        contactInfo: data[0].contactInfo,
        problem: data[0].problem,
      });
      setisloading(false);
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
      const response = await axios
        .put(
          URL + `dashboard/Updatetask/${id}`,
          updatedData,
          {
            headers: {
              Authorization: "Bearer " + userInfo.token,
              isAdmin: userInfo.isAdmin,
              userId: userInfo.id,
            },
          }
        )
        .then(navigate("/Dashboard"));
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Error updating entity details");
    }
  };
  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };
  return (
    <div>
    {authError ? (<>
    <AuthRedirect />
    </>) : (
    <div className="flex w-full">
      <Sidebar />
      {isloading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="px-8 pb-4 flex flex-col items-center justify-center overflow-auto min-h-screen h-[100%] w-[100%] ml-[13%] max-w-[87%] bg-[url('/images/updatePending.jpg')] bg-cover">
            <h1 className="py-5 text-2xl text-center ">
              Details for Entity ID: {id}
            </h1>
            <div>
              {data.map((entity, index) => (
                <div key={index}>
                  <p className="text-xl my-[5px]">
                    Name: <span className="font-bold">{entity.name}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    Device: <span className="font-bold">{entity.device}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    Other Accessories:{" "}
                    <span className="font-bold">{entity.otherAccessories}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    Status: <span className="font-bold">{entity.status}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    Remark: <span className="font-bold">{entity.remark}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    Amount: <span className="font-bold">{entity.amount}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    Money Status1:{" "}
                    <span className="font-bold">{entity.moneyStatus}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    In Date: <span className="font-bold">{entity.inDate}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    Out Date:{" "}
                    <span className="font-bold">{entity.outDate}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    Contact Info:{" "}
                    <span className="font-bold">{entity.contactInfo}</span>
                  </p>
                  <p className="text-xl my-[5px]">
                    problem: <span className="font-bold">{entity.problem}</span>
                  </p>
                </div>
              ))}
              <div>
                <h1 className="my-5 text-2xl text-center">
                  Update the Above Entry
                </h1>
                <form className="flex flex-col items-start bg-black bg-opacity-40 pt-10 p-5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <p className="font-bold text-xl dark:text-white">
                        Name&nbsp;&nbsp;:&nbsp;&nbsp;
                      </p>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={updatedData.name}
                        onChange={handleChange}
                        className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[210px] outline-none border-none opacity-90"
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="font-bold text-xl dark:text-white">
                        Device&nbsp;&nbsp;:&nbsp;&nbsp;
                      </p>
                      <input
                        type="text"
                        placeholder="Device"
                        name="device"
                        value={updatedData.device}
                        onChange={handleChange}
                        className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[210px] outline-none border-none opacity-90"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold text-xl dark:text-white">
                      Other Accessories&nbsp;&nbsp;:&nbsp;&nbsp;
                    </p>
                    <input
                      type="text"
                      placeholder="Other Accessories"
                      name="other_accessories"
                      value={updatedData.otherAccessories}
                      onChange={handleChange}
                      className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[400px] outline-none border-none opacity-90"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center ">
                      <p className="font-bold text-xl dark:text-white">
                        Status&nbsp;&nbsp;:&nbsp;&nbsp;
                      </p>

                      <input
                        type="text"
                        placeholder="Status"
                        name="status"
                        value={updatedData.status}
                        onChange={handleChange}
                        className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[205px] outline-none border-none opacity-90"
                      />
                    </div>
                    <div className="flex items-center ">
                      <p className="font-bold text-xl dark:text-white">
                        Remark&nbsp;&nbsp;:&nbsp;&nbsp;
                      </p>
                      <input
                        type="text"
                        placeholder="Remark"
                        name="remark"
                        value={updatedData.remark}
                        onChange={handleChange}
                        className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[205px] outline-none border-none opacity-90"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <p className="font-bold text-xl dark:text-white">
                        Amount&nbsp;&nbsp;:&nbsp;&nbsp;
                      </p>
                      <input
                        type="text"
                        placeholder="Amount"
                        name="amount"
                        value={updatedData.amount}
                        onChange={handleChange}
                        className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[100px] outline-none border-none opacity-90"
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="font-bold text-xl dark:text-white">
                        Money Status&nbsp;&nbsp;:&nbsp;&nbsp;
                      </p>
                      <input
                        type="text"
                        placeholder="Money Status"
                        name="moneyStatus"
                        value={updatedData.moneyStatus}
                        onChange={handleChange}
                        className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[235px] outline-none border-none opacity-90"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <p className="font-bold text-xl dark:text-white">
                        In Date&nbsp;&nbsp;:&nbsp;&nbsp;
                      </p>
                      <input
                        type="date"
                        placeholder="Date"
                        name="inDate"
                        onChange={handleChange}
                        value={data.inDate}
                        required
                        className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[195px] outline-none border-none opacity-90"
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="font-bold text-xl dark:text-white">
                        Out Date&nbsp;&nbsp;:&nbsp;&nbsp;
                      </p>
                      <input
                        type="date"
                        placeholder="Date"
                        name="outDate"
                        onChange={handleChange}
                        value={data.outDate}
                        required
                        className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[195px] outline-none border-none opacity-90"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold text-xl dark:text-white">
                      Contact Information&nbsp;&nbsp;:&nbsp;&nbsp;
                    </p>
                    <input
                      type="text"
                      placeholder="Contact Info"
                      name="contact_info"
                      value={updatedData.contactInfo}
                      onChange={handleChange}
                      className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[380px] outline-none border-none opacity-90"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold text-xl dark:text-white">
                      Problem&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                    </p>
                    <input
                      type="text"
                      placeholder="Problem"
                      name="problem"
                      value={updatedData.problem}
                      onChange={handleChange}
                      className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[490px] outline-none border-none opacity-90"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="bg-[#F79C67] font-bold text-base my-[10px] mt-6 rounded-lg p-[15px] mr-auto ml-auto"
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
export default UpdateEntry;
