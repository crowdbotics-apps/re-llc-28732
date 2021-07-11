import React, { Component } from 'react'
import { AppRegistry, View, TextInput, Text, Alert, Button } from 'react-native'
class App extends Component {
  state = {
     username: '',
  };
  handleUsername = () => {
     this.setState({username: this.state.username})

};

handlePassword = () => {

this.setState({password: this.state.password})

};

render() {

const { username, password } = this.state;

return (

<View style={styles.container}>

<TextInput

style={styles.textInput}

placeholder='Username'

value={username}

onChangeText={text => this.handleUsername(text)}/>

<TextInput

style={styles.textInput}

placeholder='Password'

value={password}

onChangeText={text => this.handlePassword(text)}/>

<Button

style={styles.button}

title='Login'

onPress={this.handleUsername}

/>

<Button

style={styles.button}

title='Register'

onPress={this.handlePassword}

/>

<Alert

style={styles.alert}

title='Login Error'

message='Username or Password is incorrect'

onDismiss={() => this.setState({alert: false})}

/>

</View>

);

}

}

const styles = StyleSheet.create({

container: {

flex: 1,

justifyContent: "center",

alignItems: "stretch",

padding: 20

},

textInput: {

height: 40,

padding: 15,

width: "95%",

borderColor: "blue",

borderWidth: 1,

marginBottom: 20

},

button: {

margin: 10,

padding: 10

},

alert: {

padding: 10,

borderRadius: 5

}

})

AppRegistry.registerComponent('App', () => App)

