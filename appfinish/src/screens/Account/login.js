import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Spinner
} from "native-base";

// import { KeyboardAwareScrollView } from 'react-native-form-generator'

// import {
//   ActivityIndicator
// } from 'react-native'


import styles from "./styles";
import { login, resetPassword } from '../../helpers/auth'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}


class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { loginMessage: null }

  // }
  state = { loginMessage: "test" }

  handleSubmit = (e) => {
    // e.preventDefault()
    this.setState({loading:true});

    // console.log(JSON.stringify(this.email))
    console.log("logging in")
    console.log(this.email)
    // console.log(JSON.stringify(this.pw))
    if (this.email && this.pw) {
      this.setState({loading:true});
      // login(this.email, this.pw)
      //   .then((result) => {
      //     this.setState({loading:false});
      //     console.log("logging in")
      //     console.log(result)

      //   })
      //   .catch((error) => {
      //     this.setState({loading:false});
      //     this.setState(setErrorMsg('Invalid username/password.'))
      //   })
    }
    else
      this.setState(setErrorMsg('Missing a field.'))
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  handleFormFocus(event, reactNode){
    this.refs.scroll.scrollToFocusedInput(event, reactNode)
 }

  handleFormChange(formData){
    //formData will be a json object that will contain
    // refs of every field
    //formData.first_name
    //formData.last_name
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>User Login</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Item inlineLabel>
            <Label>Msg:</Label>
            <Label>{this.state.loginMessage}</Label>
            {/* <ActivityIndicator size="large" color="#0000ff" /> */}
           {
             this.state.loading &&
            <Spinner size="large" color="#0000ff" />
           }
          </Item>
          {/* <KeyboardAwareScrollView ref='scroll'> */}
            <Form >
              <Item inlineLabel>
                <Label>Email</Label>
                <Input ref={(email) => this.email = email} />
              </Item>
              <Item inlineLabel last>
                <Label>Password</Label>
                <Input secureTextEntry ref={(pw) => this.pw = pw} />
              </Item>

              {/* {
                this.state.loginMessage &&
                <Item className="alert alert-danger" role="alert">
                  <Label className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></Label>
                  <Label className="sr-only">Error:</Label>
                  &nbsp;{this.state.loginMessage} <Button onClick={this.resetPassword} className="alert-link">Forgot Password?</Button>
                </Item>
              } */}


              <Button onPress={this.handleSubmit} block style={{ margin: 15, marginTop: 50 }}>
                <Text>Sign In</Text>
              </Button>
            </Form>
          {/* </KeyboardAwareScrollView> */}
        </Content>
      </Container>
    );
  }
}

export default Login;
