import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import {getUserData} from "../Components/util";
import AuthRedirect from "../Components/AuthRedirect";

const CompletedEntryTable = () => {
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);
  const navigate = useNavigate();
  const [authError,setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{
   const userInfo = await getUserData();
   let URL = import.meta.env.VITE_API_URL;
    const response = await axios.get(
      URL + "dashboard/completedtask",{
        headers : {
          Authorization : "Bearer " + userInfo.token,
          isAdmin : userInfo.isAdmin,
          userId : userInfo.id,
      }
    }
    );
    console.log(response.data);
    setdata(response.data);
    setisloading(false);
  }
  catch(error){
    if(error.response.status == 401){
        setError(true);
    }
}
  }

  const handleEntryClick = (id) => {
    navigate(`/Dashboard/totaltask/${id}`);
  };

  return (
    <div>
    {authError ? (<>
    <AuthRedirect />
    </>) : (
    <div className="flex max-w-[screen]">
      <div>
        <Sidebar />
      </div>
      {isloading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="px-8 pb-4 flex flex-col items-center h-screen w-[100%] ml-[13%] max-w-[87%] bg-[url('/images/completedpage.jpg')] bg-cover">
            <div>
              <h2 className="text-center my-10 text-white text-2xl">
                Completed Task Table
              </h2>
            </div>

            <div className="rounded-xl overflow-auto w-full">
              <table className="table-auto w-[100%]  border-spacing-0 border-collapse rounded-2xl text-center">
                <thead>
                  <tr className="sticky top-0">
                    <th className=" text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      ID
                    </th>
                    <th className=" text-white text-lg bg-gray-500  px-4 py-2 min-w-[130px]">
                      Name
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-2 min-w-[130px]">
                      Device
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-2 min-w-[130px]">
                      Other Accessories
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-2 min-w-[130px]">
                      Status
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-2 min-w-[130px]">
                      Remark
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-2 min-w-[130px]">
                      Amount
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-2 min-w-[130px]">
                      Money Status
                    </th>
                    <th className=" text-white text-lg bg-gray-500  px-4 py-2 min-w-[130px]">
                      In Date
                    </th>
                    <th className=" text-white text-lg bg-gray-500  px-4 py-2 min-w-[130px]">
                      Out Date
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-2 min-w-[130px]">
                      Contact Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr
                      onClick={() => handleEntryClick(item.id)}
                      className="odd:bg-white even:bg-gray-100 hover:bg-gray-300"
                      key={item._id}
                    >
                      <td className=" px-4 py-2">{item.id}</td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">{item.device}</td>
                      <td className=" px-4 py-2">{item.otherAccessories}</td>
                      <td className=" px-4 py-2">{item.status}</td>
                      <td className=" px-4 py-2">{item.remark}</td>
                      <td className=" px-4 py-2">{item.amount}</td>
                      <td className=" px-4 py-2">{item.moneyStatus}</td>
                      <td className=" px-4 py-2">{item.inDate}</td>
                      <td className=" px-4 py-2">{item.outDate}</td>
                      <td className=" px-4 py-2">{item.contactInfo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
    )}
    </div>
  );
};

export default CompletedEntryTable;
