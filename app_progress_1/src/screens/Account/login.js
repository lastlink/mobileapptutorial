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
import styles from "./styles";

import { login, resetPassword } from "../../helpers/auth";

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class Login extends Component {

  state = { loginMessage: "test" }

  handleSubmit = (e) => {
    console.log("logging in");
    console.log(JSON.stringify(this.state))


    if (this.state.email && this.state.pw) {
      this.setState({ loading: true });
      this.setState({ loginMessage: this.state.email });

      login(this.state.email, this.state.pw)
        .then((result) => {
          this.setState({loading:false});
          console.log("logging in")
          console.log(result)

        })
        .catch((error) => {
          this.setState({loading:false});
          console.log(JSON.stringify(error))
          this.setState(setErrorMsg('Invalid username/password.'))
        })
    }
  }

  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }

  handleFormFocus(event, reactNode) {
    this.refs.scroll.scrollToFocusedInput(event, reactNode)
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
            <Title>Login User</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Item inlineLabel>
            <Label>Msg:</Label>
            <Label>{this.state.loginMessage}</Label>
            {
              this.state.loading &&
              <Spinner size="large" color="#0000ff" />
            }
          </Item>
          <Form>
            <Item inlineLabel>
              <Label>Username/Email</Label>
              <Input onChangeText={(text) => this.setState({ email: text })} ref={(email) => this.email = email} />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={(text) => this.setState({ pw: text })} ref={(pw) => this.pw = pw} />
            </Item>
          </Form>

          <Button onPress={this.handleSubmit} block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
