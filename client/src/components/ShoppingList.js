import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          {items.map(({ _id, name }) => (
            <ListGroupItem key={_id}>
              {name}
              <Button
                className="remove-btn float-right"
                color="danger"
                size="sm"
                onClick={this.onDeleteClick.bind(this, _id)}
              >
                &times;
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propType = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
