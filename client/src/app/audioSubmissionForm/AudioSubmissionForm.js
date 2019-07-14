import React from "react";
import "./AudioSubmissionForm.css";
import AudioSubmissionConfirmation from "./AudioSubmissionConfirmation";
import Disclaimer from "./Disclaimer";
import WrappedAddAudioForm from "./AddAudioForm";
import WordsRecording from "./WordsRecording";
import FinalSubmissionDisclaimer from "./FinalSubmissionDisclaimer";
import { Steps, Button, message } from "antd";

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
    content: <WrappedAddAudioForm />
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
      current: 0
    };
  }

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
    );
  }
}

export default AudioSubmissionForm;
