import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import {getUserData} from "../Components/util";
import AuthRedirect from "../Components/AuthRedirect";

const UpdateTask = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ids, setIds] = useState([]);
  const [id, setId] = useState(-1);
  const [data, setData] = useState([]);
  const [authError,setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getId();
  }, []);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const getId = async () => {
    try {
      const userInfo = await getUserData();
      let URL = import.meta.env.VITE_API_URL;
      const result = await axios.get(URL +"dashboard/allTaskId",{
        headers : {
          Authorization : "Bearer " + userInfo.token,
          isAdmin : userInfo.isAdmin,
          userId : userInfo.id,
          
      }
    });
      const idList = result.data.map((item) => item.id);
      setIds(idList);
      setIsLoading(false);
    }         
    catch(error){
      if(error.response.status == 401){
          setError(true);
      }
      setIsLoading(false);
  }
  };

  const handleEntryClick = (id) => {
    navigate(`/Dashboard/UpdateEntery/${id}`);
  };

  const getData = async () => {
    const userInfo = await getUserData();
    if (id !== -1) {
      setIsLoading(true);
      try {
        let URL = import.meta.env.VITE_API_URL;
        const data = await axios.get(URL + `dashboard/task/${id}`,{
          headers : {
            Authorization : "Bearer " + userInfo.token,
            isAdmin : userInfo.isAdmin,
            userId : userInfo.id,
            
        }
      });
        console.log(data.data);
        setId(-1);
        setData(data.data);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
      setIsLoading(false);
    } else {
      alert("Please Select An Id");
    }
  };

  return (
    <div>
    {authError ? (<>
    <AuthRedirect />
    </>) : (
    <div className="flex">
      <Sidebar />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="px-8 pb-4 flex flex-col items-center h-screen w-[100%] ml-[13%] max-w-[87%] bg-[url('/images/completedpage.jpg')] bg-cover">
          <div>
            <h2 className="text-center my-10 text-white text-2xl">Update An Entry</h2>
          </div>
          <div className="flex items-center gap-5">
          <div>
            <select
              placeholder="Select ID to update"
              name="name"
              onChange={handleChange}
              defaultValue={-1}
              className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
            >
              <option value="-1">
                Select ID to update
              </option>
              {ids.map((id, index) => (
                <option key={index} value={id}>
                  {id}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={getData} className="bg-[#F79C67] font-bold text-base my-[20px] w-[150px] rounded-lg p-[15px]">
              Search
            </button>
          </div>
          </div>
          <div className="rounded-xl overflow-auto w-full">
            {data.length === 0 ? (<p></p>) : (
              <table className="table-auto w-[100%]  border-spacing-0 border-collapse rounded-2xl text-center">
                <thead>
                  <tr>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      ID
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Name
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Device
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Other Accessories
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Status
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Remark
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Amount
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Money Status
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      IN Date
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      OUT Date
                    </th>
                    <th className="text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Contact Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item._id} onClick={() => handleEntryClick(item.id)} className="bg-gray-100 hover:bg-gray-300" style={{ cursor: "pointer" }}>
                      <td className=" px-4 py-2">
                        {item.id}
                      </td>
                      <td className=" px-4 py-2">
                        {item.name}
                      </td>
                      <td className=" px-4 py-2">
                        {item.device}
                      </td>
                      <td className=" px-4 py-2">
                        {item.otherAccessories}
                      </td>
                      <td className=" px-4 py-2">
                        {item.status}
                      </td>
                      <td className=" px-4 py-2">
                        {item.remark}
                      </td>
                      <td className=" px-4 py-2">
                        {item.amount}
                      </td>
                      <td className=" px-4 py-2">
                        {item.moneyStatus}
                      </td>
                      <td>
                        {item.inDate}
                      </td>
                      <td>
                        {item.outDate}
                      </td>
                      <td className=" px-4 py-2">
                        {item.contactInfo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
    )}
    </div>
  )
};

export default UpdateTask;
