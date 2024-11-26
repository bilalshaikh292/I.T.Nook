import { Link } from "react-router-dom";

function Contact_button()
{
    return(
        <div className="flex justify-center py-5 items-center flex-col bg-[#f5f5f5] dark:bg-black">
        <h1 className="text-xl m-4 dark:text-white">Need a Consultation?</h1>
        <Link to={'/contact'}>
        <div className="w-screen px-44">
        <button className="bg-gray-200 dark:text-white dark:bg-[#0e0f0f] w-full mx-5 shadow-lg dark:shadow-blue-500 m-5 h-44 rounded-xl"><h1 className="m-2 text-lg  dark:text-white">Let’s level up your brand, together</h1><span className="dark:text-gray-400">CONTACT US</span></button>
        </div>
        </Link>
        </div>
    )
}

export default Contact_button;