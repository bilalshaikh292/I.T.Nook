import { useNavigate } from "react-router-dom";
function AuthRedirect(){
    const navigate = useNavigate();
    const redirect = () =>{
        localStorage.removeItem('userInfo');
        navigate('/login');
    }
return(
    <>
    <div className="flex w-screen h-screen fixed right-0 top-0 bg-black opacity-50 items-center justify-center">
        <div className="bg-white w-60 h-32 flex items-center justify-center flex-col rounded-xl">
            <h1 className="text-black my-3">
                Session Expired.
            </h1>
            <button onClick={redirect} className="w-32 bg-gray-500 rounded-md text-white">OK</button>
        </div>

    </div>
    </>
)
};
export default AuthRedirect;