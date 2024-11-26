import axios from "axios";
import { useEffect, useState } from "react";
import { getUserData } from "./util";
import AuthRedirect from "./AuthRedirect";

function DashboardCard() {
  useEffect(() => {
    getData();
  }, []);

  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [authError, setError] = useState(false);

  async function getData() {
    try {
      const userInfo = await getUserData();
      let URL = import.meta.env.VITE_API_URL;
      const response = await axios.get(URL + "dashboard/Data", {
        headers: {
          Authorization: "Bearer " + userInfo.token,
          isAdmin: userInfo.isAdmin,
          userId: userInfo.id,
        },
      });

      setdata(response.data);
      setisloading(false);
    } catch (error) {
      if (error.response.status == 401) {
        setError(true);
      }
    }
  }

  return (
    <div>
      {authError ? (
        <>
          <AuthRedirect />
        </>
      ) : (
        <div className="flex gap-3 mt-10">
          {isloading ? (
            <h1>Loading</h1>
          ) : (
            <>
              <div className="Dashboard-card flex bg-gray-200 w-52 h-28 rounded-md">
                <div className="card-info">
                  <h1 className="text-lg p-4">Total earning</h1>
                  <h1 className="px-4">{data.totalEarnings}</h1>
                </div>
                <div></div>
              </div>
              <div className="Dashboard-card flex bg-gray-200 w-52 h-28 rounded-md">
                <div className="card-info">
                  <h1 className="text-lg p-4">Total Task</h1>
                  <h1 className="px-4">{data.total_task}</h1>
                </div>
                <div></div>
              </div>
              <div className="Dashboard-card flex bg-gray-200 w-52 h-28 rounded-md">
                <div className="card-info">
                  <h1 className="text-lg p-4">Pending Task</h1>
                  <h1 className="px-4">{data.pending_task}</h1>
                </div>
                <div></div>
              </div>
              <div className="Dashboard-card flex bg-gray-200 w-52 h-28 rounded-md">
                <div className="card-info">
                  <h1 className="text-lg p-4">Completed Task</h1>
                  <h1 className="px-4">{data.task_completed}</h1>
                </div>
                <div></div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default DashboardCard;
