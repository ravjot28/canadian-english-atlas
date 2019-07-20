import React from "react";

import { Form, Select, Radio, Input } from "antd";
const { Option } = Select;

class AddAudioForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleChange = value => console.log(`selected ${value}`);

  onChange = value => {
    console.log("onChange: ", value);
  };

  onAfterChange = value => {
    console.log("onAfterChange: ", value);
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form.Item label="Select your birth year:">
          {getFieldDecorator("words", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select your birth year!"
              }
            ]
          })(
            <Select
              defaultValue="before1915"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="before1915">before 1915</Option>
              <Option value="1916">1916</Option>
              <Option value="1917">1917</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Select your gender:">
          {getFieldDecorator("gender", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select your gender!"
              }
            ]
          })(
            <Select
              defaultValue="female"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="female">Female</Option>
              <Option value="male">Male</Option>
              <Option value="nonBinary">Non-binary/third gender</Option>
              <Option value="other">Other</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="Do you consider English your mother tongue (the language you
                learned first as a child and still use/understand)"
        >
          <div>
            {getFieldDecorator("radio-group", {
              rules: [
                {
                  required: true,
                  message: "Please input your mother tongue"
                }
              ]
            })(
              <Radio.Group>
                <Radio value="Yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            )}
          </div>
        </Form.Item>
        <Form.Item label="If not, what is your mother tongue?">
          {getFieldDecorator("mothertongue", {
            rules: [
              {
                required: true,
                message: "Please input your mother tongue"
              }
            ]
          })(<Input placeholder="Please input your mother tongue" />)}
        </Form.Item>
        <Form.Item label="How would you rate your fluency in English?:">
          {getFieldDecorator("fluency", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select the fluency!"
              }
            ]
          })(
            <Select
              defaultValue="nativeSpeaker"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="nativeSpeaker">native speaker</Option>
              <Option value="highlyFluent">highly fluent</Option>
              <Option value="intermediate">
                intermediate level of fluency
              </Option>
              <Option value="beginner">beginner</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Were you born in Canada?">
          <div>
            {getFieldDecorator("radio-group", {
              rules: [
                {
                  required: true,
                  message: "Please select the option"
                }
              ]
            })(
              <Radio.Group>
                <Radio value="Yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            )}
          </div>
        </Form.Item>
        <Form.Item label="If no, at what age did you move to Canada?:">
          {getFieldDecorator("age", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select at what age did you move to Canada!"
              }
            ]
          })(
            <Select
              defaultValue="beforeAge5"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="beforeAge5">before age 5</Option>
              <Option value="between5And12">between 5 and 12</Option>
              <Option value="between13And20">between 13 and 20</Option>
              <Option value="age21OrOlder">age 21 or older</Option>
              <Option value="neverLived">I have never lived in Canada</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Is there an email address where we can contact you about your participation if necessary?">
          {getFieldDecorator("emailaddress")(
            <Input placeholder="Please input your email address" />
          )}
        </Form.Item>
      </div>
    );
  }
}

const WrappedAddAudioForm = Form.create({ name: "addForm" })(AddAudioForm);

export default WrappedAddAudioForm;
