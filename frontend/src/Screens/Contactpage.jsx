import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const [data, setData] = useState({
    name: "",
    contactno: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  useEffect(() =>{
    window.scrollTo(0,0);
  }
  ,[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let URL = import.meta.env.VITE_API_URL;
      const url = URL + "users/sendmail";
      const { data: res } = await axios.post(url, data);
      alert("Message Send Successfully");
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert("message Was No Sent ! Try again later.");
      }
    }
  };

  return (
    <>
      <div className="Locate-us flex flex-col justify-center items-center dark:bg-[url('/images/contactDark.jpg')] bg-[url('/images/contact.jpeg')] dark:bg-cover bg-contain">
        <div className=" flex items-center justify-center flex-col dark:bg-[#0e0f0f] bg-white rounded-2xl mt-6 shadow-2xl">
          <h1 className="text-center w-auto text-3xl mt-6 my-3 font-bold text-black dark:text-white">
            Get In Touch
          </h1>
          <form
            className="flex flex-col items-center py-6 p-6 "
            onSubmit={handleSubmit}
          >
            <div className="flex gap-3">
              <input
                className="my-2 w-[520px] h-11 p-2 rounded-md border-none outline-none bg-[#f5f5f5]"
                placeholder="Enter Your Name ?"
                onChange={handleChange}
                name="name"
                value={data.name}
              ></input>
               <input
                className="my-2 w-[520px] h-11 p-2 rounded-md border-none outline-none bg-[#f5f5f5]"
                placeholder="Enter Your Contact ?"
                pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$"
                onChange={handleChange}
                value={data.contactno}
                name="contactno"
                required
              ></input>
            </div>
            <div className="flex gap-3 my-3">
              <input
                className="my-2 w-[1050px] h-32 p-2 rounded-md border-none  outline-none bg-[#f5f5f5]"
                placeholder="Enter a Message For Us ?"
                value={data.message}
                name="message"
                onChange={handleChange}
                required
              ></input>
            </div>
            <button
              className="my-2 w-80 h-11 p-2 rounded-md border-none outline-none text-white text-xl bg-[#274C77] font-bold"
              type="submit"
              required
            >
              Send
            </button>
          </form>
        </div>
        <div className="dark:bg-[#0e0f0f] bg-white p-5 my-5 rounded-2xl shadow-2xl">
          <h1 className="text-3xl mt-4 text-center font-bold dark:text-white text-black">
            Locate Us
          </h1>
          <div className="google-map-code">
            <div className="flex flex-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15084.424760546819!2d72.91534051560241!3d19.059068201403118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c61527645fa1%3A0x98a40fb6ab726bbc!2sI.T.NOOK%20Computer%20Solution.!5e0!3m2!1sen!2sin!4v1706905783285!5m2!1sen!2sin"
                width="600"
                height="450"
                className="m-5 border-none rounded-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="m-5">
                <h1 className="my-3 text-2xl text-[#274C77] dark:text-white">
                  <i
                    className="fa fa-map-marker font-bold text-2xl"
                    aria-hidden="true"
                  ></i>
                  &nbsp;&nbsp;Address
                </h1>
                <p className="font-bold text-xl dark:text-gray-300">
                  23/A/9 Shivaji Nagar, Mumbai-400 043
                </p>
                <h1 className="text-2xl my-3  text-[#274C77] dark:text-white">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  &nbsp;&nbsp;Phone
                </h1>
                <p className="text-xl font-bold dark:text-gray-300">+91 9920018207</p>
                <h1 className="text-2xl my-3 text-[#274C77] dark:text-white">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  &nbsp;&nbsp;Email
                </h1>
                <p className="text-xl font-bold dark:text-gray-300">itnook2002@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactPage;
