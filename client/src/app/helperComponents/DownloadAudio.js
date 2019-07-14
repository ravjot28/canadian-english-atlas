import React from "react";
import { Form, Slider, Select, Button } from "antd";

const { Option } = Select;

const words = [
  "bag",
  "cot",
  "gang",
  "past",
  "spa",
  "band",
  "deck",
  "house",
  "pasta",
  "test",
  "boat",
  "duck",
  "how",
  "pool",
  "tie",
  "boot",
  "face",
  "kiss",
  "seat",
  "tight",
  "caught",
  "far",
  "pack",
  "sharp",
  "too"
];
const children = words.map(word => {
  return <Option key={word}>{word}</Option>;
});

const genders = ["Female", "Male", "Non-binary/third gender", "Other"];
const genderOptions = genders.map(gender => (
  <Option key={gender}>{gender}</Option>
));

const montherTounge = ["yes", "no"];
const montherToungeOptions = montherTounge.map(mt => (
  <Option key={mt}>{mt}</Option>
));
const movedInCanada = [
  "before age 5",
  "between 5 and 12",
  "between 13 and 20",
  "age 21 or older",
  "I have never lived in Canada"
];

const movedInCanadaOptions = movedInCanada.map(mic => (
  <Option key={mic}>{mic}</Option>
));

class RegistrationForm extends React.Component {
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Select the word(s) to be downloaded">
          {getFieldDecorator("words", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select the words!"
              }
            ]
          })(
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select"
              onChange={this.handleChange}
            >
              {children}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Select Gender(s)">
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
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select"
              onChange={this.handleChange}
            >
              {genderOptions}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="English as mother tongue">
          {getFieldDecorator("motherTounge", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select your mother tounge!"
              }
            ]
          })(
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select"
              onChange={this.handleChange}
            >
              {montherToungeOptions}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Moved in Canada">
          {getFieldDecorator("movedInCanadaOptions", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select moved in Canada!"
              }
            ]
          })(
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={["before age 5"]}
              onChange={this.handleChange}
            >
              {movedInCanadaOptions}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Select Age">
          <Slider
            range
            step={1}
            defaultValue={[20, 50]}
            onChange={this.onChange}
            onAfterChange={this.onAfterChange}
            max={120}
            min={1}
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Download
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
