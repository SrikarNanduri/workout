import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Text1 = ({ children }) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <View  style={buttonStyle}>
    <Text style={textStyle}>
     {children}
    </Text>
  </View>

  );
};


const styles = {
  textStyle: {
    alignSelf:'center',
    color: '#F8F8F8',
    fontSize: 19,
    fontWeight: '600',
    fontFamily:'OCR A',
    height:60,
    paddingTop: 15,
    paddingBottom:10,
  },

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor:'#000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F8F8F8',
    //marginLeft:5,
    //marginRight: 5,
  },
};
export { Text1 };
