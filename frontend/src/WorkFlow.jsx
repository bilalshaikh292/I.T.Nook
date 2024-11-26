import Aos from 'aos';
import { useEffect } from 'react';

function WorkFlow(){

    useEffect(()=>{
        Aos.init({duration:2000,
            once:true
        })
      },[]);

    return(
        <div className="bg-gray-200 dark:bg-black flex justify-center items-center flex-col">
        <h1 className="text-2xl dark:text-white m-8">Our Workflow</h1>
        <img src="/images/workflow.jpg" alt="" />
        <div>
        <div>
            <i className=" text-2xl dark:text-red-500 fa-solid fa-location-dot relative top-[3.2rem] right-2"></i><h1 className="p-5 border-l-[2px]  dark:text-white  dark:border-white w-[500px] text-xl border-black"><i className="fa-solid fa-lightbulb mr-2 dark:text-white"></i>Conceptualization</h1>
            <p className=" w-[500px] pl-5 pr-5 pt-5 pb-5 border-l-[2px] dark:text-gray-400 dark:border-white border-black">Initial stage where we engage in brainstorming sessions to generate creative and feasible ideas. The aim is to identify solutions that address key challenges faced by your target audience.</p>
        
        </div>
        <div className="mt-[-33px]">
            <i className=" text-2xl fa-solid dark:text-red-500 fa-location-dot relative top-[3.2rem] right-2"></i><h1 className="p-5 border-l-[2px] dark:text-white dark:border-white  w-[500px] text-xl border-black"><i className="fa-solid fa-brain mr-2 dark:text-white"></i>Strategic Planning</h1>
            <p className=" w-[500px] pl-5 pr-5 pt-5 pb-5 border-l-[2px] dark:text-gray-400 dark:border-white border-black"> We create a structured roadmap that defines the goals, milestones, and timelines for the project. This phase ensures that all team members are aligned with the objectives and the path to delivery.
            </p>
        
        </div>
        <div className="mt-[-33px]" data-aos="fade-down">
            <i className=" text-2xl fa-solid dark:text-red-500 fa-location-dot relative top-[3.2rem] right-2"></i><h1 className="p-5 border-l-[2px] dark:text-white dark:border-white  w-[500px] text-xl border-black"><i className="fa-brands fa-searchengin mr-2 dark:text-white"></i>In-Depth Research</h1>
            <p className=" w-[500px] pl-5 pr-5 pt-5 pb-5 border-l-[2px] dark:text-gray-400 dark:border-white border-black">We perform market analysis, competitive research, and user studies to gather data that will inform design and development. This step helps ensure the product is relevant and efficient. </p>
        
        </div>
        <div className="mt-[-33px]" data-aos="fade-down">
            <i className=" text-2xl fa-solid dark:text-red-500 fa-location-dot relative top-[3.2rem] right-2"></i><h1 className="p-5 border-l-[2px] dark:text-white dark:border-white  w-[500px] text-xl border-black"><i className="fa-solid fa-pen-ruler mr-2 dark:text-white"></i>User-Centered Design</h1>
            <p className=" w-[500px] pl-5 pr-5 pt-5 pb-5 border-l-[2px] dark:text-gray-400 dark:border-white border-black">At this phase, we create wireframes, prototypes, and visual designs that focus on user experience and interface. The goal is to create a seamless and intuitive design that resonates with users. </p>
        
        </div>
        <div className="mt-[-33px]" data-aos="fade-down">
            <i className=" text-2xl fa-solid dark:text-red-500 fa-location-dot relative top-[3.2rem] right-2"></i><h1 className="p-5 border-l-[2px] dark:text-white dark:border-white  w-[500px] text-xl border-black"><i className="fa-solid fa-code mr-2 dark:text-white"></i>Development & Build</h1>
            <p className=" w-[500px] pl-5 pr-5 pt-5 pb-5 border-l-[2px] dark:text-gray-400 dark:border-white border-black">Our engineers translate the design into functional code, building the core architecture and features of the product. This includes front-end, back-end, and database development to ensure full functionality. </p>
        
        </div>
        <div className="mt-[-33px]" data-aos="fade-down">
            <i className=" text-2xl fa-solid dark:text-red-500 fa-location-dot relative top-[3.2rem] right-2"></i><h1 className="p-5 border-l-[2px] dark:text-white dark:border-white  w-[500px] text-xl border-black"><i className="fa-solid fa-vial-virus mr-2 dark:text-white"></i>Rigorous Testing</h1>
            <p className=" w-[500px] pl-5 pr-5 pt-5 pb-5 border-l-[2px] dark:text-gray-400 dark:border-white border-black">Before deployment, the product undergoes thorough testing, including functionality, performance, and security testing. Bugs and issues are identified and fixed to ensure a seamless user experience. </p>
        
        </div>
        <div className="mt-[-33px]" data-aos="fade-down">
            <i className=" text-2xl fa-solid dark:text-red-500 fa-location-dot relative top-[3.2rem] right-2"></i><h1 className="p-5 border-l-[2px] dark:text-white dark:border-white  w-[500px] text-xl border-black"><i className="fa-solid fa-rocket mr-2 dark:text-white"></i>Launch & Deployment</h1>
            <p className=" w-[500px] pl-5 pr-5 pt-5 pb-5 border-l-[2px] dark:text-gray-400 dark:border-white border-black">Once the product is fully tested and approved, we move forward with the deployment process. The product is launched in the production environment and made live for end-users.
            </p>
        
        </div>
        <div className="mt-[-33px]" data-aos="fade-down">
            <i className=" text-2xl fa-solid dark:text-red-500 fa-location-dot relative top-[3.2rem] right-2"></i><h1 className="p-5 border-l-[2px] dark:text-white dark:border-white  w-[500px] text-xl border-black"><i className="fa-solid fa-headset mr-2 dark:text-white"></i>Support & Maintenance</h1>
            <p className=" w-[500px] pl-5 pr-5 pt-5 pb-5 border-l-[2px] dark:text-gray-400 dark:border-white border-black">Post-launch, we provide continuous monitoring, updates, and maintenance to ensure the product remains stable and performs optimally. Any new issues are addressed, and updates are made as required.</p>
        </div>

        </div>
        
        </div>
    );
}

export default WorkFlow;

