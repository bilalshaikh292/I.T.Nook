import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserSidebar() {
  const navigate = useNavigate();

  const logout = () => {
localStorage.removeItem('userInfo');
navigate('/')
  };

  const getUserInfo = () => {
    return localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : {isAdmin: false};
  };

  const data = getUserInfo();

  return (
    <div className="flex fixed flex-col w-[13%] h-screen bg-gray-200 dark:bg-black border-t-2 border-gray-400">
      <div className="sidebar-elements flex flex-col mt-3">
        <Link
        to={`/userData/${data.name}`}
          className=" dark:border-none border-y-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Edit Profile
        </Link>
        <Link
          className=" dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          Track Order
        </Link>
        <Link
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          E Wallet
        </Link>
        <Link
          to={""}
          className="dark:border-none border-b-[1px] p-2  dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          href="#"
        >
          {" "}
          Order History
        </Link>
        <button 
        onClick={logout}
          className="dark:border-none border-b-[1px] p-2 text-left dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 "
          >
          Logout
</button>
      </div>
    </div>
  );
}
export default UserSidebar;
