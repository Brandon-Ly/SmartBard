import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Interface/Style.css"
import {useNavigate} from "react-router-dom";
import data from '../../data.js'

export default function RequestTable(props) {
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
