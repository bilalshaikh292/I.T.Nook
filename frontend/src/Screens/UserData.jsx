import axios from "axios";
import {getUserData, deleteUserData } from "../Components/util";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";

function UserData(){

    useEffect(() => {
        getData();
      }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editname, setEditName] = useState(false);
    const [editemail, setEditemail] = useState(false);
    const [loading, isLoading] = useState(false);
    const [updatePassword,setPassword] = useState(false);
    const [oldPassword,setoldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [newRePassword,setNewRePassword] = useState("");


    const navigate = useNavigate();

    const getData = async () => {
        try {
            const userInfo = await getUserData();
            let URL = import.meta.env.VITE_API_URL;
            const result = await axios.get(URL + "users/getUserData", {
                headers: {
                    userid: userInfo.id,
                }
            });
            setName(result.data.name);
            setEmail(result.data.email);
        } catch (error) {
            console.log(error);
        }
    };

    const verifyPass = async(oldp,newp,renewp) => {
        if(oldp === newp){
            return false;
        }
        if(newp !== renewp){
            return false;
        }
        return true;
    }

    const sendData = async () => {
        try {
            isLoading(true);
            let URL = import.meta.env.VITE_API_URL;
            const userInfo = await getUserData();
            const result = await axios.put(URL + "users/updateDetials", {
                updatedName: name,
                updatedEmail: email,
            }, {
                headers: {
                    userid: userInfo.id,
                }
            });
            isLoading(false);
            navigate('/');
        } catch (error) {
            console.log(error);
            isLoading(false);
        }
    };

    const sendPassData = async () => {
        try {
            isLoading(true);
            const userInfo = await getUserData();
            let URL = import.meta.env.VITE_API_URL;
            if(await verifyPass(oldPassword,newPassword,newRePassword)){
            const result = await axios.put(URL + "users/updatePassword", {
                oldPass: oldPassword,
                newPass: newPassword,
            }, {
                headers: {
                    userid: userInfo.id,
                }
            });
            deleteUserData();
            isLoading(false);
            navigate('/');
        }
        else{
            isLoading(false);
        }
        } catch (error) {
            console.log(error);
            isLoading(false);
        }
    };  

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="px-8 pb-4 flex items-center h-screen  justify-center w-[100%] ml-[13%] max-w-[87%]">
                    <div className="flex px-8 items-center justify-center shadow-2xl bg-[#f5f5f5] w-auto h-auto rounded-lg flex-col">
                        <div className="m-5">
                            <img className="w-32 h-32" src="/images/userLogo.png" alt="User Logo" />
                        </div>
                        <div className="mr-8 ml-8 w-full">
                            <div className="flex my-5 items-center w-[100%] gap-5">
                                <p className="text-xl min-w-[120px] flex items-center">UserName :</p>
                                {editname ? (
                                    <input
                                        className="w-full h-11 p-2 rounded-md border-none outline-none mr-auto"
                                        name="name"
                                        value={name}
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}  // Correct handler for updating name
                                    />
                                ) : (
                                    <p className="mr-auto text-xl flex items-center h-11">{name}</p>
                                )}

                                <button onClick={() => setEditName(!editname)}>
                                    <i className="fa-solid fa-pen-to-square fa-lg"></i>
                                </button>
                            </div>

                            <div className="flex my-5 items-center w-[100%] gap-5">
                                <p className="text-xl min-w-[120px] flex items-center">Email :</p>
                                {editemail ? (
                                    <input
                                        className="w-full h-11 p-2 rounded-md border-none outline-none mr-auto"
                                        name="email"
                                        value={email}
                                        type="text"
                                        onChange={(e) => setEmail(e.target.value)}  // Correct handler for updating email
                                    />
                                ) : (
                                    <p className="mr-auto text-xl flex items-center h-11">{email}</p>
                                )}

                                <button onClick={() => setEditemail(!editemail)}>
                                    <i className="fa-solid fa-pen-to-square fa-lg"></i>
                                </button>
                            </div>
                        </div>
                        {
                            editemail || editname ? (
                                <button
                                    onClick={() => sendData()}
                                    className="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Save
                                </button>
                            ) : null
                        }
                        <div className="flex justify-center gap-10 my-2">
                            <button onClick={() => setPassword(!updatePassword)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Edit Password
                            </button>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Add Details
                            </button>
                            </div>
                            {updatePassword ? (
                                <>
                                <form className="w-full"> 
                                <div className="mb-5 w-full flex flex-col items-center">
                                
                                 <input
                                        className="w-full max-w-[750px] my-2 h-11 p-2 rounded-md border-none outline-none mr-auto"
                                        name="oldPassword"
                                        value={oldPassword}
                                        type="text"
                                        placeholder="Old Password"
                                        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                        onChange={(e) => setoldPassword(e.target.value)} 
                                    />
                                    <input
                                        className="w-full max-w-[750px] h-11 p-2 rounded-md border-none outline-none mr-auto"
                                        name="newPassword"
                                        value={newPassword}
                                        type="text"
                                        required
                                        placeholder="New Password"
                                        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                        onChange={(e) => setNewPassword(e.target.value)}  
                                    />
                                    <input
                                        className="w-full max-w-[750px] h-11 p-2 my-2 rounded-md border-none outline-none mr-auto"
                                        name="newRePassword"
                                        value={newRePassword}
                                        type="text"
                                        required
                                        placeholder="Retype New Password"
                                        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                        onChange={(e) => setNewRePassword(e.target.value)} 
                                    />
                                <button
                                type="submit"
                                    onClick={() => sendPassData()}
                                    className="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Save
                                </button>
                                    </div>
                                    </form>
                                </>
                            ) : (<></>)}

                    </div>
                </div>
            )}
        </>
    );
}

export default UserData;
