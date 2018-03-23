import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  List,
  Spinner
} from "native-base";
import styles from "./styles";
import { retrieveProfile, logout } from "../../helpers/auth";

const datas = [
  {
    route: "Login",
    text: "User Login"
  },
  {
    route: "Register",
    text: "Register"
  }
  // ,
  // {
  //   route: "Logout",
  //   text: "Logout"
  // }
];
// var isLoggedIn=null;
// function logoutUser(){

// }
function UserLogout() {
  this.setState({ loading: true });
  logout().then((result) => {
    this.setState({ loading: false });

  })
    .catch((error) => {
      this.setState({ loading: false });
      console.log(JSON.stringify(error))
      // this.setState(setErrorMsg("Invalid username/password."))
    })
}



class Account extends Component {
  constructor(props) {
    super(props);
  }
  //   console.log("side bar props")
  //   console.log(props)
  //   var userprofile = retrieveProfile();
  //   // console.log("current profile is:");
  //   // console.log(userprofile);
  //   this.state = {
  //     userprofile
  //   };
  // }
  render() {
    function UserView(props) {
      const isLoggedIn = retrieveProfile();
      console.log("checking if user logged in")
      console.log(isLoggedIn)
      if (isLoggedIn) {
        return <List>
          <ListItem>
            <Left>
              <Text>
                Profile
              </Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              {
                this.state.loading &&
                <Spinner size="large" color="#0000ff" />
              }
              <Button full danger onPress={() => UserLogout()}>
                <Text>Logout</Text>
              </Button>
            </Left>
          </ListItem>
        </List>;
      }
      return <List
        dataArray={datas}
        renderRow={data =>
          <ListItem
            button
            onPress={() => props.navigation.navigate(data.route)}
          >
            <Left>
              <Text>
                {data.text}
              </Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>}
      />;

    }
    // let { UserView } = this.props;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Account Management</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <UserView {...this.props}/>
          {/* <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          /> */}
        </Content>
      </Container>
    );
  }
}

export default Account;
