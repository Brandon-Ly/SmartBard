import useAuth from '../../hooks/UseAuth'
import {Navigate} from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AuthPrivateRoute = () => {

    const {isAuthenticated} = useAuth();

    return isAuthenticated ? <Outlet />: <Navigate to='/'/>

}

export default AuthPrivateRoute;