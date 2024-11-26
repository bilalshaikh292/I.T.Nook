import { useEffect, useState } from 'react';
import Services from '../Components/Services';
import './screens.css';
import aos from 'aos';
import 'aos/dist/aos.css'

function Servicepage() {
    const [id, setid] = useState(1);
    const [reload,setRelaoding] = useState(true)

    useEffect(() => {
        aos.init({ duration: 2000,
            once:true
         });
    }, [reload]);

    return (
        <div className="servicepage h-screen w-100% flex overflow-hidden gap-6 bg-[#f5f5f5] dark:bg-black py-5" >
            <div className="servicesname flex flex-col w-[28rem] h-[90%] overflow-y-auto mr-6 ml-7">
                <h1 className="mb-3 text-lg font-bold dark:text-white">We are here here to kick start your business with our skilled service.</h1>
                <button className={id === 1 ? "servicedetials p-2 dark:bg-[#510400] flex bg-gray-200 rounded-md my-2" : "servicedetials p-2 bg-gray-200 dark:bg-[#0e0f0f] flex rounded-md my-2"} onClick={() => setid(1)}><div><i className="fa-solid fa-globe px-2 pr-4 py-1 text-lg text-red-500"></i></div><div><h1 className="mb-1 dark:text-white">Website Development</h1><p className="text-sm text-gray-600 dark:text-white">Turning your ideas into powerful digital experiences</p></div></button>
                <button className={id === 2 ? "servicedetials p-2 dark:bg-[#510400] flex bg-gray-200 rounded-md my-2" : "servicedetials p-2 bg-gray-200 dark:bg-[#0e0f0f] flex rounded-md my-2"} onClick={() => setid(2)}><div><i className="fa-solid fa-desktop px-2 pr-4 py-1 text-lg text-red-500"></i></div><div><h1 className="mb-1 dark:text-white">UI/UX Design</h1><p className="text-sm text-gray-600 dark:text-white">Crafting seamless interfaces that keep users engaged</p></div></button>
                <button className={id === 3 ? "servicedetials p-2 dark:bg-[#510400] flex bg-gray-200 rounded-md my-2" : "servicedetials p-2 bg-gray-200 dark:bg-[#0e0f0f] flex rounded-md my-2"} onClick={() => setid(3)}><div><i className="fa-solid fa-mobile px-2 pr-4 py-1 text-lg text-red-500"></i></div><div><h1 className="mb-1 dark:text-white">Mobile Application</h1><p className="text-sm text-gray-600 dark:text-white" > Bringing your business to customers fingertips with intuitive apps</p></div></button>
                <button className={id === 4 ? "servicedetials p-2 dark:bg-[#510400] flex bg-gray-200 rounded-md my-2" : "servicedetials p-2 bg-gray-200 dark:bg-[#0e0f0f] flex rounded-md my-2"} onClick={() => setid(4)}><div><i className="fa-solid fa-layer-group px-2 pr-4 py-1 text-lg text-red-500"></i></div><div><h1 className="mb-1 dark:text-white">Platform Development</h1><p className="text-sm text-gray-600 dark:text-white">Building scalable solutions that grow with your business</p></div></button>
                <button className={id === 5 ? "servicedetials p-2 dark:bg-[#510400] flex bg-gray-200 rounded-md my-2" : "servicedetials p-2 bg-gray-200 dark:bg-[#0e0f0f] flex rounded-md my-2"} onClick={() => setid(5)}><div><i className="fa-solid fa-cloud px-2 pr-4 py-1 text-lg text-red-500"></i></div><div><h1 className="mb-1 dark:text-white">Cloud Computing</h1><p className="text-sm text-gray-600 dark:text-white">Empowering your operations with the flexibility of the cloud</p></div></button>
                <button className={id === 6 ? "servicedetials p-2 dark:bg-[#510400] flex bg-gray-200 rounded-md my-2" : "servicedetials p-2 bg-gray-200 dark:bg-[#0e0f0f] flex rounded-md my-2"} onClick={() => setid(6)}><div><i className="fa-brands fa-hive px-2 pr-4 py-1 text-lg text-red-500"></i></div><div><h1 className="mb-1 dark:text-white">Block Chain</h1><p className="text-sm text-gray-600 dark:text-white">Securing and decentralizing your data with cutting-edge blockchain solutions</p></div></button>
                <button className={id === 7 ? "servicedetials p-2 dark:bg-[#510400] flex bg-gray-200 rounded-md my-2" : "servicedetials p-2 bg-gray-200 dark:bg-[#0e0f0f] flex rounded-md my-2"} onClick={() => setid(7)}><div><i className="fa-solid fa-gear px-2 pr-4 py-1 text-lg text-red-500"></i></div><div><h1 className="mb-1 dark:text-white">AI/ML</h1><p className="text-sm text-gray-600 dark:text-white">Automating and enhancing decision-making through intelligent algorithms.</p></div></button>
                <button className={id === 8 ? "servicedetials p-2 dark:bg-[#510400] flex bg-gray-200 rounded-md my-2" : "servicedetials p-2 bg-gray-200 dark:bg-[#0e0f0f] flex rounded-md my-2"} onClick={() => setid(8)}><div><i className="fa-solid fa-chart-simple px-2 pr-4 py-1 text-lg text-red-500"></i></div><div><h1 className="mb-1 dark:text-white">Digital Marketing</h1><p className="text-sm text-gray-600 dark:text-white">Amplifying your brand's presence across the digital landscape</p></div></button>
                <button className={id === 9 ? "servicedetials p-2 dark:bg-[#510400] flex bg-gray-200 rounded-md my-2" : "servicedetials p-2 bg-gray-200 dark:bg-[#0e0f0f] flex rounded-md my-2"} onClick={() => setid(9)}><div><i className="fa-solid fa-phone px-2 pr-4 py-1 text-lg text-red-500"></i></div><div><h1 className="mb-1 dark:text-white">Tech Consultancy</h1><p className="text-sm text-gray-600 dark:text-white">Guiding your technological journey with expert insights and solutions.</p></div></button>
            </div>
           <div className='w-[100%] h-auto overflow-auto'><Services id={id} /> </div> 
        </div>
    );
}
export default Servicepage;