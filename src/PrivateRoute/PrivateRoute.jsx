import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="min-h-screen w-full flex justify-center items-center"><span className="loading loading-spinner text-error"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes ={
    children: PropTypes.object

}
export default PrivateRoute;