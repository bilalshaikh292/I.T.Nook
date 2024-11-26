import DashboardCard from "../Components/DashboardCards";
import Sidebar from "../Components/Sidebar";
import NewProduct from "./NewProductEntry";

function Dashboard() {
  return (
    <div className="flex max-w-[screen]">
      <div>
        <Sidebar />
      </div>
      <div className="px-8 pb-4 flex flex-col items-center h-screen w-auto ml-[13%] max-w-[87%]">
        <DashboardCard />
      </div>
    </div>
  );
}
export default Dashboard;
