import React from "react";
import { Button, Select, Descriptions } from "antd";
const ButtonGroup = Button.Group;

const { Option } = Select;
const SubmissionInfoWindow = props => (
  <div>
    <div>
      <Descriptions title="Submission Info">
        <Descriptions.Item label="SubmissionId">
          {props.submissionId}
        </Descriptions.Item>
        <Descriptions.Item label="Age">90</Descriptions.Item>
        <Descriptions.Item label="Gender">Female</Descriptions.Item>
        <Descriptions.Item label="English mother tongue">No</Descriptions.Item>
        <Descriptions.Item label="Time in Canada">
          before age 5
        </Descriptions.Item>
      </Descriptions>
    </div>
    <div>
      <Select defaultValue="bag" style={{ width: 120 }}>
        <Option value="bag">bag</Option>
        <Option value="past">past</Option>
        <Option value="deck">deck</Option>
        <Option value="test">test</Option>
        <Option value="how">how</Option>
      </Select>
    </div>
    <div>
      <ButtonGroup>
        <Button>Play</Button>
        <Button>Download</Button>
        <Button>Download All</Button>
      </ButtonGroup>
    </div>
  </div>
);

export default SubmissionInfoWindow;
