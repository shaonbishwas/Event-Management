import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./authProvider/AuthProvider";


const MainRoute = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <div className="min-h-screen w-full flex justify-center items-center"><span className="loading loading-spinner text-error"></span></div>
    }
    return (
        <div className="">
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoute;