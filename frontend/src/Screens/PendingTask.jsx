import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import {getUserData} from "../Components/util";
import AuthRedirect from "../Components/AuthRedirect";


const PendingEntityTable = () => {
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [authError,setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{
    const userInfo = await getUserData();
  let URL = import.meta.env.VITE_API_URL;
    const response = await axios.get(
      URL + "dashboard/pendingtask",{
        headers : {
          Authorization : "Bearer " + userInfo.token,
          isAdmin : userInfo.isAdmin,
          userId : userInfo.id,
          
      }
    }
    );
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
    navigate(`/Dashboard/pendingtask/${id}`);
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
          <div className="px-8 pb-4 flex flex-col items-center h-screen w-[100%] ml-[13%] max-w-[87%] bg-[url('/images/pendingpage.jpg')] bg-cover">
            <div>
              <h2 className="text-center my-10 text-2xl text-white">Pending Jobs</h2>
            </div>
            <div className="rounded-xl overflow-auto w-full">
              <table className="table-auto w-[100%]  border-spacing-0 border-collapse rounded-2xl text-center">
                <thead>
                <tr className="sticky top-0">
                    <th className=" text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      ID
                    </th>
                    <th className="b text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Name
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Device
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Other Accessories
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Status
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Remark
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Money
                    </th>
                    <th className="b text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Date
                    </th>
                    <th className=" text-white text-lg bg-gray-500 px-4 py-3 min-w-[130px]">
                      Contact Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item._id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-300" onClick={() => handleEntryClick(item.id)} style={{ cursor: "pointer" }}>
                      <td className=" px-4 py-2">
                        {item.id}
                      </td>
                      <td className="px-4 py-2">
                        {item.name}
                      </td>
                      <td className="px-4 py-2">
                        {item.device}
                      </td>
                      <td className="px-4 py-2">
                        {item.otherAccessories}
                      </td>
                      <td className="px-4 py-2">
                        {item.status}
                      </td>
                      <td className="px-4 py-2">
                        {item.remark}
                      </td>
                      <td className="px-4 py-2">
                        {item.amount}
                      </td>
                      <td className="px-4 py-2">
                        {item.inDate}
                      </td>
                      <td className="px-4 py-2">
                        {item.contactInfo}
                      </td>
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

export default PendingEntityTable;
