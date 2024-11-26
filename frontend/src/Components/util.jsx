export const getUserData = async() =>{
    try{
        let data = await JSON.parse(localStorage.getItem('userInfo'));
        let userInformation = {
            token : data.token,
            id : data._id,
            isAdmin : data.isAdmin,
        };
        return userInformation;
    }
    catch{
        return "";
    }
};

export const deleteUserData = async() => {
    try{
        await localStorage.removeItem('userInfo');
    }
    catch(error){
        console.log(error);
    }
};