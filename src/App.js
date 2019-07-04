

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Header, Button } from './components';








export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      notesText: '',
      date: '',
    }
  }

  componentDidMount() {
    let day = new Date().getDay();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    //alert(this.state.notesText);
    this.setState({
      date: `${day} / ${month} /${year}`
    })
  }
  addNote = () => {
    //this.state.notes.push(note);


    this.state.notes.push({
      text: this.state.notesText,
      date: this.state.date
    })
    this.setState({
      notes: this.state.notes,
      notesText: ''
    })
    
   /*  // alert(this.state.notes.length)
    this.state.notes.map(item => {
      console.log(`${item.text},${item.date} , ${this.state.notes.length} `)
    }) */

  }
  changeTextHandeler = (text) => {

    this.setState({
      notesText: text
    })
  }
  render() {

    let myNotes = this.state.notes.map((item,key) => {
      //alert("hi " + item.text);
      return (
        <View style={{ alignItems: 'flex-start', backgroundColor: 'green' }}>
              <Button
                whenClicked={this.addNote}
                style={{ borderRadius: 80, width: 30, height: 30, position: 'absolute', top: 0, left: '90%', alignItems: 'center' }}
                textStyle={{ flex: 1, color: 'black', textAlign: 'center', paddingTop: 5 }}
              >X</Button>
          <View style={{ backgroundColor: 'lightgray', width: "80%",   alignItems: 'flex-start', }}>
            <Text style={styles.welcome}> {item.text}  </Text>



          </View>


          <View style={{ backgroundColor: "lightgreen", width: "50%", alignItems: 'flex-start', }}>
            <Text> {item.date}</Text>
          </View>
        </View>
      )
    })



    return (
      <View style={{ flex: 1 }}>
        <View>
          <Header>To Do List</Header>
        </View>

        <View style={{ flex: 1, }}>

          <ScrollView contentContainerStyle={{ flex: 1 }}>
           

              {myNotes}
          


          </ScrollView>
        </View>

        <View style={{ backgroundColor: 'lightblue', height: 100, paddingTop: 50, }}>
          <Button whenClicked={this.addNote} style={{ borderRadius: 80, alignSelf: 'center', width: 90, height: 90, position: 'absolute', top: -50, left: '70%', justifyContent: 'center' }} textStyle={{ color: 'black' }}>ADD</Button>
          <TextInput
            color="gray"
            placeholder="To do"
            backgroundColor='red'
            onChangeText={this.changeTextHandeler}
            value={this.state.notesText}
          />

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    alignItems: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
