import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

class CircleImage extends Component {
  render() {
  return(
    <View>
      <Image style={ styles.image} source={this.props.imageUrl} />

    </View>

  );
}
}

const styles= {
  image:{
    height: 50,
    width:50,
    borderRadius: 25,
  },
};
export {CircleImage};
