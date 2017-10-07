import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>
     {children}
    </Text>
    </TouchableOpacity>
  );
};


const styles = {
  textStyle: {
    alignSelf:'center',
    color: '#F8F8F8',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 30,
    paddingBottom:10,
    fontFamily:'OCR A'
  },

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor:'#000',
    borderRadius: 5,
    borderWidth: 1,
    height:100,
    borderColor: '#F8F8F8',
    //marginLeft:5,
    //marginRight: 5,
  },
};
export { Button };
