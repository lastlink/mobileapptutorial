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




class Account extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading:false
    }

    this.eventHandler = this.eventHandler.bind(this);
    this.UserLogout = this.UserLogout.bind(this);
    this.UserView = this.UserView.bind(this);


    console.log("loggind props for accounts:...")
    console.log(JSON.stringify(props))
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

  // TODO: move logout to sidebar
  UserLogout = () => {
    console.log("logging off")
    this.setState({ loading: true });
    logout().then((result) => {
      console.log("log off finished")
      this.setState({ loading: false });
      // this.props.navigation.dispatch("Account")
      // console.log(result)
      // this.setState({ userprofile: result });

    })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(JSON.stringify(error))
        // this.setState(setErrorMsg("Invalid username/password."))
      })

  }
  eventHandler(event) {
    console.log("logging off")

    this.setState({ loading: true });
    // this.anotherFunction();
    // this.setState((prevState) => ({
    //     toggle: !prevState.toggle
    //   })
    // );
  }

   UserView() {
    let isLoggedIn = retrieveProfile();
    console.log("checking if user logged in")
    // console.log(props)
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
            <Button full danger onPress={() => this.UserLogout()}>
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
    />;

  }

  render() {
    const { userprofile } = this.props;



    
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
          {this.UserView()} 
          {/* <UserView {...this.props} /> */}
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
