import { useEffect } from "react";
import { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(){
let [darkMode , setDarkMode] = useState(true);
const navigate = useNavigate();


const getUserInfo = () => {
    return localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : {isAdmin: false};
  };
 
useEffect(() =>{
    if(darkMode){
        document.documentElement.classList.add("dark");
        localStorage.setItem("mode","dark")
        window.dispatchEvent( new Event('storage') )
    }
    else{
        document.documentElement.classList.remove("dark")
        localStorage.setItem("mode","light")
        window.dispatchEvent( new Event('storage') )
    }
},[darkMode]);

const data = getUserInfo();

const logout = () => {
  localStorage.removeItem('userInfo');
  navigate('/')
    };

return(
    <div className="header sticky top-0 w-full overflow-hidden flex bg-gray-200 dark:bg-black z-10 dark:border-b-[0.2px] dark:border-gray-500">
        <div className="logo mr-[auto] p-3 ml-2 text-3xl dark:text-white"><Link to={'/'}>I.T.N<span className="text-red-500">OO</span>K</Link></div>
    <div className="Navbarele flex gap-4 p-4 text-lg ">
    <Link to={'/'} className="hover:underline underline-offset-8 decoration-red-400 hover:text-red-500 dark:text-white dark:hover:text-red-500 " href="#" >Home</Link>
    <Link to={'/blogs'} className="hover:underline underline-offset-8 decoration-red-400 hover:text-red-500 dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 " href="#" >Blogs</Link>
   <div className="dropdown">
    <button className="dropbtn hover:underline underline-offset-8 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500">Services &nbsp;<i className="fa fa-caret-down"></i></button>
    <div className="dropdown-content mt-1 fixed rounded-md bg-gray-200 dark:bg-gray-600">
      <Link to={'/services'} className="hover:underline underline-offset-8 border-b-2  border-gray-800 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:bg-[#0e0f0f]" href="#">Software</Link>
      <Link to={'/hardwareServices'} className="hover:underline underline-offset-8 border-b-2 border-gray-800 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:bg-[#0e0f0f]" href="#">Hardware</Link>
    </div>
  </div> 
    <Link to={'/shop'} className="hover:underline underline-offset-8 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500" href="#">Shop</Link>
    <Link to={'/contact'} className="hover:underline underline-offset-8 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500" href="#">contact</Link>
    {data.name 
    ?(<>
       <div className="dropdown">
    <button className="dropbtn hover:underline underline-offset-8 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500 dark:hover:text-red-500">{data.name} &nbsp;<i className="fa fa-caret-down"></i></button>
    <div className="dropdown-content mt-1 fixed rounded-md bg-gray-200 dark:bg-gray-600">
    <Link  to={`/userData/${data.name}`} className="hover:underline underline-offset-8 border-b-2 border-gray-800 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:bg-[#0e0f0f]" href="#">Profile</Link>
    <Link className="hover:underline underline-offset-8 border-b-2 border-gray-800 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:bg-[#0e0f0f]" href="#">Track Order</Link>
    <button 
        onClick={logout}
          className="hover:underline underline-offset-8 border-b-2 py-[12px] px-[16px] w-[100%] text-left border-gray-800 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:bg-[#0e0f0f]"
          >
          Logout
</button>
    </div>
  </div> 
    </>)
    :(<Link  to={'/login'} className="hover:underline underline-offset-8 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500" href="#">Login</Link>)
    }
    {data.isAdmin
    ?(<Link to={'/Dashboard'} className="hover:underline underline-offset-8 decoration-red-500 hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500 dark:text-white dark:hover:text-red-500" href="#">DashBoard</Link>)
    :('')
}
<button onClick={() => {setDarkMode(!darkMode)}} className="bg-gray-300 w-8 h-8 dark:bg-gray-600 rounded-md text-black  dark:text-yellow-500">{darkMode ?<i className=" fa-solid fa-sun"></i>:<i className=" text-black fa-solid fa-moon"></i>}</button>
    </div>
    </div>
)
}
export default Header;