import React from "react";
import Setup from "./src/boot/setup";
// const firebase = require("firebase");
// Initialize Firebase

// import * as config from "./src/config.js";
// const firebaseConfig = config.firebaseConfig
// console.log('printing config')
// console.log(firebaseConfig)

// firebase.initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// Create a reference with .ref() instead of new Firebase(url)
// const rootRef = firebase.database().ref();
// const itemsRef = rootRef.child('items');

export default class App extends React.Component {
  /*constructor(props) {
    super(props);
    // this.state = {
    //   dataSource: new ListView.DataSource({
    //     rowHasChanged: (row1, row2) => row1 !== row2,
    //   })
    // };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }*/

  render() {
    return <Setup />;
  }
}
