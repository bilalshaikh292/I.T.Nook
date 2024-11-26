import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex fixed flex-col w-[13%] h-screen bg-gray-200 dark:bg-black">
      <div className=" dark:bg-black dashboard-name mx-auto my-5">
        <h1 className="text-3xl dark:text-white">
          I.T.N<span className="text-red-500">OO</span>K
        </h1>
      </div>
      <div className="sidebar-elements flex flex-col">
        <Link
          to={"/Dashboard"}
          className=" dark:border-none border-y-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          DashBoard
        </Link>
        <Link
          className=" dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Users
        </Link>
        <Link
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Admins
        </Link>
        <Link
          to={"/Dashboard/totaltask"}
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          {" "}
          All Jobs
        </Link>
        <Link
          to={"/Dashboard/pendingtask"}
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Pending Jobs
        </Link>
        <Link
          to={"/Dashboard/completedtask"}
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Completed Job
        </Link>
        <Link
          to={"/Dashboard/newEntry"}
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          New Job Entry
        </Link>
        <Link
          to={"/Dashboard/UpdateEntery"}
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Update Job
        </Link>
        <Link
          to={"/Dashboard/deleteJob"}
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Delete Job
        </Link>
        <Link
          className=" dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Analysis
        </Link>
        <Link
          to={"/"}
          className=" dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Home
        </Link>
        <Link
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Products
        </Link>
        <Link
          className=" dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Blogs
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
