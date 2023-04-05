import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Table, Button} from 'react-bootstrap'
import axios from 'axios';
import {API_URL} from "../../common/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css"

export default function AdminRequestTable(props) {

    const [requests, setRequests] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/announcements?status=${props.status}&datefrom=2000-01-01&dateto=2050-01-01`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('id_token')}`
                },
                withCredentials: true,
            });
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
            <div className="admin-request-table-div">
                <Table
                    bordered
                    className="admin-request-table"
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
                        <tr key={request.title} className="admin-request-table-row">
                            <td>{request.title}</td>
                            <td>
                                <Button className="admin-request-details-button" variant="success"
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
