// import libraries for the components
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Make a components.

class Header extends Component {
  render() {
return(
  <View style={styles.viewStyle}>
<Text style={styles.textStyle}>{this.props.headerText}</Text>
</View>
);
}
}

const styles = StyleSheet.create({
viewStyle: {
  backgroundColor:'#000',
  justifyContent:'center',
  alignItems:'center',
  height: 60,
  paddingTop: 15,
  paddingBottom: 15,
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  elevation: 2,
  position: 'relative'
},

  textStyle: {
    fontSize: 25,
    color:'#F8F8F8'

  }
});
export {Header};

//Make the component available to other parts of the app
