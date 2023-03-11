import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {Fragment, React} from "react";
import AdminRequestDetailsComp from "../components/Admin/AdminRequestDetailsComp.js"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default function AdminRequestDetails(props) {

    const [data, setData] = useState([]);
    const {status, postID} = useParams();

    const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/announcements?status=${status}&datefrom=2000-01-01&dateto=2050-01-01`);
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