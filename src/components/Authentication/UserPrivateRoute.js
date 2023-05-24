import { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth'
import {Navigate, useParams} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { API_URL } from '../../common/constants';
import axios from 'axios';

const UserPrivateRoute = () => {

    const { userID } = useAuth();
    const { postID } = useParams();
    const [announcement, setAnnouncement] = useState(null);
    const { validateLogin } = useAuth();

    useEffect(() => {
        const fetchAnnouncement = async () => {
          try {
            await validateLogin();
            const response = await axios.get(`${API_URL}/announcements/${postID}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('id_token')}`,
              },
              withCredentials: true,
            });
            const fetchedAnnouncement = response.data;
            setAnnouncement(fetchedAnnouncement);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchAnnouncement();
      }, [postID]);

      if (!announcement || !announcement.title) {
        return <div>Loading...</div>;
      }


    return announcement && userID === parseInt(announcement.userid) ? <Outlet />: <Navigate to='/home'/>

}

export default UserPrivateRoute;