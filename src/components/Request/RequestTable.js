import {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Interface/Style.css";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {API_URL} from "../../common/constants";

export default function RequestTable(props) {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/announcements?status=${props.status}&datefrom=2000-01-01&dateto=2050-01-01`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('id_token')}`
                },
                withCredentials: true,
            });
            setData(response.data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [data])

    const requests = data.filter((request) => {
        return request.status === props.status;
    });

    const navigate = useNavigate();

    function handleCreateDetails(announcementId) {
        navigate(`/request/${announcementId}`);
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
                                        onClick={() => handleCreateDetails(request.id)}>Details</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}
