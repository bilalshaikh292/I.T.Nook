import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import {getUserData} from "../Components/util";
import AuthRedirect from "../Components/AuthRedirect";

const DeleteJob = () => {
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
      const result = await axios.get(URL + "dashboard/allTaskId",{
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
  }
  };

  const getData = async () => {
    if (id !== -1) {
      setIsLoading(true);
      try {
        const userInfo = await getUserData();
      let URL = import.meta.env.VITE_API_URL;
        const data = await axios.get(URL +`dashboard/task/${id}`,{
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

  const deleteJob = async() =>{
const id = data[0].id;
if(confirm(`The ID: ${id} will be deleted`)){
  try{
  let userInfo = await getUserData();
  let URL = import.meta.env.VITE_API_URL;
    const response = await axios.delete(URL + `dashboard/deleteEntry/${id}`,{
      headers : {
        Authorization : "Bearer " + userInfo.token,
        isAdmin : userInfo.isAdmin,
        userId : userInfo.id,
        
    }
  })
    alert(response.data.message);
    navigate('/Dashboard/totaltask')
  }
  catch(error){
    console.error("Error Deleting Data:", error);
  }
}
else{
navigate('/Dashboard/deleteJob')
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
        <div className="px-8 pb-4 flex flex-col items-center h-screen w-[100%] overflow-hidden ml-[13%] max-w-[87%] bg-[url('/images/completedpage.jpg')] bg-cover">
          <div>
            <h2 className="text-center my-10 text-white text-2xl">Delete An Entry</h2>
          </div>
          <div className="flex items-center justify-center gap-6">

          <div>
            <select
              placeholder="Select ID to Delete"
              name="name"
              onChange={handleChange}
              defaultValue={-1}
              className="text-[14px] my-[5px] bg-[#edf5f3] rounded-lg p-[15px] w-[370px] outline-none border-none opacity-90"
              >
              <option value="-1">
                Select ID to Delete
              </option>
              {ids.map((id, index) => (
                <option key={index} value={id}>
                  {id}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={getData} className="bg-[#F79C67] font-bold text-base my-3 w-[150px] rounded-lg p-[15px]">
            <i class="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;Search
            </button>
          </div>
              </div>
          <div className="rounded-xl overflow-auto w-full">
            {data.length === 0 ? (<p></p>) : (
              <div className="flex gap-5 items-center rounded-2xl xl:flex-col 2xl:flex-row w-[100%] p-4">
                <div className="rounded-xl overflow-auto w-[100%]">
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
                    <tr key={item._id} className="bg-gray-100 hover:bg-gray-300">
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
                      <td className=" px-4 py-2">
                        {item.inDate}
                      </td>
                      <td className=" px-4 py-2">
                        {item.outDate}
                      </td>
                      <td className=" px-4 py-2">
                        {item.contactInfo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <div>
              <button onClick={deleteJob} className="bg-[#F79C67] font-bold text-base h-12 w-[100px] h rounded-lg">
              <i class="fa-solid fa-trash"></i>&nbsp;&nbsp;Delete
            </button>
            </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    )}
    </div>
  );
};

export default DeleteJob;
