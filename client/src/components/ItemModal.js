import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: this.state.name,
    };

    this.props.addItem(newItem);

    this.toggle();
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  value={this.state.name}
                  onChange={this.onChange}
                ></Input>
                <Button
                  type="submit"
                  color="dark"
                  style={{ marginTop: "2rem" }}
                  block
                >
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
