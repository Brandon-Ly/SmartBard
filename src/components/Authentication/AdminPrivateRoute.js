import useAuth from '../../hooks/UseAuth'
import {Navigate} from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AdminPrivateRoute = () => {

    const {isAdmin} = useAuth();

    return isAdmin ? <Outlet />: <Navigate to='/home'/>

}

export default AdminPrivateRoute;