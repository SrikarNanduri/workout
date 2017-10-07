import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button2 = ({ onPress, children }) => {
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
    fontSize: 18,
    fontWeight: '600',
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
export { Button2 };
