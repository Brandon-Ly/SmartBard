import {Navigate, Outlet} from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

const AuthPrivateRoute = () => {

    const {isAuthenticated} = useAuth();

    return isAuthenticated ? <Outlet/> : <Navigate to='/'/>

}

export default AuthPrivateRoute;