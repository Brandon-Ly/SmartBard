import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import classes from "./RequestTable.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    title: "Dummy 1",
    status: "Pending",
  },
  {
    title: "Dummy 2",
    status: "Pending",
  },
  {
    title: "Dummy 3",
    status: "Rejected",
  },
  {
    title: "Dummy 4",
    status: "Accepted",
  },
];

export default function RequestTable(props) {
  const requests = data.filter((request) => {
    return request.status === props.status;
  });

  return (
    <section>
      <div className={classes.reactTable}>
        <Table
          striped
          bordered
          className={classes.bdr}
          size="sm"
        >
          <thead>
            <tr>
              <th width="70%">Request Name</th>
              <th width="20%">Status</th>
              <th width="10%">Details</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.title} className={classes.row}>
                <td className={classes.td}>{request.title}</td>
                <td className={classes.td}>{request.status}</td>
                <td className={`${classes.td} ${classes.button}`}>
                  <Button variant="success">Details</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}
