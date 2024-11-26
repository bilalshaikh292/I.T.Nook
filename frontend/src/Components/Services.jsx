import { useEffect, useState } from "react";
import axios from "axios";
import aos from 'aos';
import 'aos/dist/aos.css'

function Services(props) {
  useEffect(() => {
    downloadServices();
  }, []);

  useEffect(()=>{
    aos.init({duration:2000})
  },[]);

  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);
  async function downloadServices() {
    let URL = import.meta.env.VITE_API_URL;
    const response = await axios.get(URL);
    setdata(response.data);
    setisloading(false);
  }

  const service = data.find((x) => x.id === props.id);
  return (
    <div className="p-4 overflow-hidden">
      {isloading ? (
        <h1 className="dark:text-white text-2xl">Loading</h1>
      ) : (
        <div className="dark:bg-[#0e0f0f] overflow-y-scroll no-scrollbar h-auto p-5 rounded-lg" data-aos="zoom-in">
          <img className="2xl:h-96 lg:h-56 w-full rounded-lg" src={service.image} />
          <h1 className="text-2xl my-4 dark:text-white">{service.name}</h1>
          <p className="dark:text-gray-400">{service.description}</p>
          <h1 className="text-lg my-3 dark:text-white">Technologies</h1>
          <div className="flex gap-4">
            {service.techstack.map((imageurl) => (
              <img className="w-14 h-14" key={imageurl} src={imageurl} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Services;
