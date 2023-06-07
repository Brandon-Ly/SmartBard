import {Fragment, React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import AdminRequestDetailsComp from "../components/Admin/AdminRequestDetailsComp.js"
import {API_URL} from "../common/constants";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminRequestDetails(props) {

    const [data, setData] = useState([]);
    const {status, postID} = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/announcements?status=${status}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('id_token')}`
                },
                withCredentials: true,
            });
            setData(response.data);
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
            <AdminRequestDetailsComp
                data={data}
                status={status}
                postID={postID}/>
        </Fragment>
    );
}