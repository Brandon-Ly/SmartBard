import { useState, useEffect} from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Interface/Style.css"
import {useNavigate} from "react-router-dom";
import axios from 'axios';


export default function AdminRequestTable(props) {

    const [requests, setRequests] = useState([]);

    const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/announcements?status=${props.status}&datefrom=2000-01-01&dateto=2050-01-01`);
          setRequests(response.data);
        } catch (error) {
          console.log(error);
        }
      }
  
      useEffect(() => {
          fetchData();
        }, [])


    const navigate = useNavigate();

    function handleCreateDetails(announcementid) {
        navigate(`/adminrequest/${props.status}/${announcementid}`);
    }

    return (
        <section>
            <div className="requestTableDiv">
                <Table
                    bordered
                    className="requestTable"
                    size="sm"
                >
                    <thead>
                    <tr>
                        <th width="90%">Request Name</th>
                        <th width="10%">Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {requests.map((request) => (
                        <tr key={request.title} className="requestTableRow">
                            <td>{request.title}</td>
                            <td>
                                <Button className="requestDetailButton" variant="success"
                                        onClick={() => handleCreateDetails(request.announcementid)}>Details</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}
