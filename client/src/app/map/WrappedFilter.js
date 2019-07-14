import React, { Component } from "react";
import Draggable from "react-draggable";
import { Form, Select, InputNumber, Button } from "antd";

const { Option } = Select;

class Filter extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };

  onChange = value => {
    console.log(`slider onChangge ${value}`);
  };

  onAfterChange = value => {
    console.log(`slider onChangge ${value}`);
  };
  handleSubmit = e => {
    console.log("Submit");
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    return (
      <Draggable cancel="strong">
        <div
          style={{
            position: "fixed",
            padding: "10px",
            left: "0px",
            top: "400px",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            border: "1px solid black",
            zIndex: "100",
            width: "13%"
          }}
        >
          <div style={{ textAlign: "center", fontSize: "20px" }}>
            <strong>Filter</strong>
          </div>
          <Form layout="horizontal">
            <Form.Item label="Gender">
              <Select
                mode="multiple"
                defaultValue="female"
                style={{ width: 200 }}
                onChange={this.handleChange}
              >
                <Option value="female">Female</Option>
                <Option value="male">Male</Option>
                <Option value="nonBinary">Non-binary/third gender</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Minimum Age">
              <InputNumber
                min={1}
                max={102}
                defaultValue={20}
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item label="Maximum Age">
              <InputNumber
                min={1}
                max={102}
                defaultValue={100}
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item label="English mother tounge">
              <Select
                mode="multiple"
                defaultValue="yes"
                style={{ width: 200 }}
                onChange={this.handleChange}
              >
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Time in Canada">
              <Select
                defaultValue="beforeAge5"
                style={{ width: 200 }}
                onChange={this.handleChange}
              >
                <Option value="beforeAge5">before age 5</Option>
                <Option value="between5And12">between 5 and 12</Option>
                <Option value="between13And20">between 13 and 20</Option>
                <Option value="age21OrOlder">age 21 or older</Option>
                <Option value="neverLived">I have never lived in Canada</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit}>
                Filter
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Draggable>
    );
  }
}
const WrappedFilter = Form.create({ name: "filter" })(Filter);

export default WrappedFilter;
