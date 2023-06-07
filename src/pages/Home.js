import React, {useEffect, useState} from 'react';
import Announcements from '../components/Announcement/Announcements';
import {API_URL} from "../common/constants";
import PriorityAnnouncement from '../components/Announcement/PriorityAnnouncement';
import useAuth from "../hooks/UseAuth";
import axios from 'axios';

export default function Home() {

    const [data, setData] = useState([]);
    const [foundPost, setFoundPost] = useState(null);
    const {validateLogin} = useAuth();

    const fetchData = async () => {
        try {
            await validateLogin();
            const response = await axios.get(`${API_URL}/announcements`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('id_token')}`
                },
                withCredentials: true,
            });
            setData(response.data);

        } catch (error) {

        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    /*
    Find the first post where the priority is true. This is assuming that there can only ever be one post with a true property 
    (This should always be the case with a priority announcement) 
    */
    useEffect(() => {
        if (data.length > 0) {
            const foundItem = data.find(item => item.priority === true);
            if (foundItem) {
                setFoundPost(foundItem);
            } else {
                console.log("No item with priority found");
            }
        } else {
            console.log("Data is empty");
        }
    }, [data])


    return (
        <React.Fragment>
            <PriorityAnnouncement priorityPost={foundPost}/>
            <Announcements data={data}/>
        </React.Fragment>
    )
}

