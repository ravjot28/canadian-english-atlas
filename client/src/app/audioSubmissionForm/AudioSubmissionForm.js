import React from "react";
import "./AudioSubmissionForm.css";
import AudioSubmissionConfirmation from "./audioSubmissonConfirmation/AudioSubmissionConfirmation";
import Disclaimer from "./disclaimer/Disclaimer";
import WrappedUserInfoForm from "./collectUserInfo/UserInfoForm";
import WordsRecording from "./recordWords/WordsRecording";
import FinalSubmissionDisclaimer from "./finalSubmission/FinalSubmissionDisclaimer";
import { Steps, Button, message, Modal } from "antd";

import { words } from "../../common/constants";
const { Step } = Steps;

const steps = [
  {
    title: "Confirm?",
    content: <AudioSubmissionConfirmation />
  },
  {
    title: "Disclaimer",
    content: <Disclaimer />
  },
  {
    title: "User Information",
    content: <WrappedUserInfoForm />
  },
  {
    title: "Record",
    content: <WordsRecording />
  },
  {
    title: "Submit",
    content: <FinalSubmissionDisclaimer />
  }
];

class AudioSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      userInfo: {
        birthYear: null,
        gender: null,
        englishMotherTounge: null,
        englishFluency: null,
        bornInCanada: null,
        moveToCanada: null,
        emailAddress: null
      }
    };
  }
  componentDidMount() {}

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <Modal
        width="50%"
        visible={this.props.visible}
        title="Add Audio"
        onOk={this.props.handleOk}
        onCancel={this.props.handleCancel}
        footer={[
          <Button key="back" onClick={this.props.handleCancel}>
            Close
          </Button>
        ]}
      >
        <div>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => {
                  this.setState({ loading: true });
                  setTimeout(() => {
                    this.setState({ loading: false, visible: false });
                    message.success("Processing complete!");
                  }, 3000);
                }}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </Modal>
    );
  }
}

export default AudioSubmissionForm;
