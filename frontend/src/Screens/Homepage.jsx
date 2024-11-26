import aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState} from "react";
import { Typewriter } from 'react-simple-typewriter';

function Homepage(){
 const [currentTheme, setCurrentTheme] = useState('');

useEffect(()=>{
aos.init({duration:2000,
    once:true
})
},[])

let handleStorage = () =>{
    const theme =localStorage.getItem('mode')
setCurrentTheme(theme);
}
window.addEventListener('storage', handleStorage);

    return(
        <>
        <div className="HomePage overflow-y-scroll no-scrollbar mt-[-64px] flex flex-wrap overflow-hidden items-center justify-center h-screen bg-cover bg-no-repeat w-[100%] gap-4 bg-[url('/images/homelight.jpg')] dark:bg-[url('/images/homeDark.jpg')]">
        <div className="Homepageinfo w-5/12 p-4 dark:border-gray-300 border-black  border-l-[1px]" data-aos="fade-right"><p className="text-3xl  dark:text-white" >We build software solutions that empowers your <span className="text-red-600"><Typewriter
  words={['Business.', 'Growth.', 'Sales.']}
  loop={true}
  typeSpeed={100}
  deleteSpeed={70}
/>
        </span>
        
</p><br/><p className="dark:text-gray-300 mb-1">At I.T.Nook we build highly optimized application with increadible features for bussiness</p><p className=" dark:text-gray-300 text-sm tracking-wider">OUR SERVICES</p></div>
        
<div className="Homepageimage  w-5/12 p-4" data-aos="fade-left">
        {currentTheme == "dark"
        ?(<img className="h-96" src="/images/homeLogoDark.jpg" alt="" />)
        :(<img className="h-96 w-[450px]" src="/images/home.png" alt=""/>)
        }
        </div>

        </div>
        </>
    );
};
export default Homepage;