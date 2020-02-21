// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import ToDoActions from "../redux/actions/ToDoActions";

// END IMPORT ACTIONS

/** APIs

* actionsToDo.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsToDo.list
*	@description CRUD ACTION list
*

**/


class ToDoList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsToDo.loadToDoList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsToDo.deleteToDo(this.state.idDelete).then(data => {
      this.props.actionsToDo.loadToDoList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Body",
        type: "custom",
        label: "Body"
      }, 
      {
        id: "DueDate",
        type: "date",
        label: "DueDate"
      }, 
      {
        id: "Responsible",
        type: "string",
        label: "Responsible"
      }, 
      {
        id: "Subject",
        type: "string",
        label: "Subject"
      },
    ];
    const link = "/todos/";

    return (
      <div>
        <h1>ToDo List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Body</TableCell>
              <TableCell align="right">DueDate</TableCell>
              <TableCell align="right">Responsible</TableCell>
              <TableCell align="right">Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/todos/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Body }</TableCell>
                <TableCell align="right">{ row.DueDate }</TableCell>
                <TableCell align="right">{ row.Responsible }</TableCell>
                <TableCell align="right">{ row.Subject }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/todos/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsToDo: bindActionCreators(ToDoActions, dispatch),
  };
};

// Validate types
ToDoList.propTypes = { 
  actionsToDo: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ToDoListReducer.listToDo
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
