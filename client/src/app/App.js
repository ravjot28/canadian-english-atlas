import React, { Component } from "react";
import "./App.css";
import { Route, withRouter, Switch } from "react-router-dom";

import { getCurrentUser } from "../util/Utils";
import { ACCESS_TOKEN } from "../common/constants";

import Login from "./user/login/Login";
import Signup from "./user/signup/Signup";
import Profile from "./user/profile/Profile";
import AppHeader from "../common/AppHeader";
import NotFound from "../common/housekeeping/NotFound";
import LoadingIndicator from "../common/housekeeping/LoadingIndicator";
import PrivateRoute from "../common/housekeeping/PrivateRoute";
import AboutUs from "./helperComponents/AboutUs";
import DownloadAudio from "./helperComponents/DownloadAudio";
import FAQ from "./helperComponents/FAQ";

import MapComponent from "../app/map/MapComponent";
import { Modal } from "antd";

import { Layout, notification } from "antd";
const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRedirectToHome = this.handleRedirectToHome.bind(this);

    notification.config({
      placement: "topRight",
      top: 70,
      duration: 3
    });
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false
        });
      });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(
    redirectTo = "/",
    notificationType = "success",
    description = "You're successfully logged out."
  ) {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);

    notification[notificationType]({
      message: "Canadian English Atlas",
      description: description
    });
  }

  handleLogin() {
    notification.success({
      message: "Canadian English Atlas",
      description: "You're successfully logged in."
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  handleRedirectToHome() {
    this.props.history.push("/");
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <Layout className="app-container">
        <AppHeader
          isAuthenticated={this.state.isAuthenticated}
          currentUser={this.state.currentUser}
          onLogout={this.handleLogout}
        />

        <Content className="app-content">
          <div
            className="container"
            style={{ maxWidth: "100%", paddingLeft: "0px" }}
          >
            <Switch>
              <Route exact path="/" render={props => <MapComponent />} />
              <Route
                exact
                path="/addAudio"
                render={props => (
                  <MapComponent
                    onRedirectoHome={this.handleRedirectToHome}
                    addAudio={true}
                  />
                )}
              />
              <Route
                exact
                path="/aboutUs"
                render={props => {
                  Modal.info({
                    width: "50%",
                    title: "About",
                    content: <AboutUs />,
                    onOk() {}
                  });
                  return <MapComponent />;
                }}
              />
              <Route
                exact
                path="/downloadAudio"
                render={props => {
                  Modal.info({
                    width: "50%",
                    title: "Download Voices",
                    content: <DownloadAudio />,
                    onOk() {}
                  });
                  return <MapComponent />;
                }}
              />
              <Route
                exact
                path="/faq"
                render={props => {
                  Modal.info({
                    width: "50%",
                    title: "FAQ",
                    content: <FAQ />,
                    onOk() {}
                  });
                  return <MapComponent />;
                }}
              />

              <Route
                path="/login"
                render={props => (
                  <Login onLogin={this.handleLogin} {...props} />
                )}
              />
              <Route path="/signup" component={Signup} />
              <Route
                path="/users/:username"
                render={props => (
                  <Profile
                    isAuthenticated={this.state.isAuthenticated}
                    currentUser={this.state.currentUser}
                    {...props}
                  />
                )}
              />
              <PrivateRoute
                authenticated={this.state.isAuthenticated}
                path="/blah"
                component={null}
                handleLogout={this.handleLogout}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(App);
