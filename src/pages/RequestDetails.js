import {Fragment, React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {API_URL} from "../common/constants";
import useAuth from "../hooks/UseAuth";
import RequestDetailsComp from "../components/Request/RequestDetailsComp.js"
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default function RequestDetails(props) {

    const [data, setData] = useState([]);
    const {status, postID} = useParams();
    const {validateLogin} = useAuth();

    const fetchData = async () => {
        try {
            await validateLogin();
            const announcementResponse = await axios.get(`${API_URL}/announcements?status=${status}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('id_token')}`
                },
                withCredentials: true,
            });

            setData(announcementResponse.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
        console.log("called");
    }, [])

    return (
        <Fragment>
            <RequestDetailsComp
                data={data}
                status={status}
                postID={postID}/>
        </Fragment>
    );
}