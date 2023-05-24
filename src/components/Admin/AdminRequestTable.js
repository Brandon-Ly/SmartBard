import { useState, useEffect} from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Interface/Style.css"
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {API_URL} from "../../common/constants";


export default function AdminRequestTable(props) {

    const [requests, setRequests] = useState([]);
    const filters = props.filteredObject;

    const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}/announcements?status=${props.status}`, {
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

    const filteredRequests = requests.filter(item => {
        const isTitleMatch = item.title.toLowerCase().includes(filters.title.toLowerCase())
        const isDateMatch = isDateInRange(item.datefrom, item.dateto, filters.datefrom, filters.dateto);
        const isPriorityMatch = filters.priority ? item.priority : true;
        return isTitleMatch && isDateMatch && isPriorityMatch;
        
        });

    function isDateInRange(itemDateFrom, itemDateTo, filterDateFrom, filterDateTo) {

        const start = filterDateFrom ? new Date(filterDateFrom) : null;
        const end = filterDateTo ? new Date(filterDateTo) : null;
    
        if (start && end) {
            return new Date(itemDateFrom) >= start && new Date(itemDateTo) <= end;
        } else if (start) {
            return new Date(itemDateFrom) >= start;
        } else if (end) {
            return new Date(itemDateTo) <= end;
        } else {
            return true;
        }
        }


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
                    {filteredRequests.map((request) => (
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
