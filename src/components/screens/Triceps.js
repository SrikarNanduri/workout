import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import {Header, Button, Button2, Card, CircleImage, CardSection, Input, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';

class Triceps extends Component {
  render(){
    return(
      <ScrollView>
      <Card>
        <CardSection>
        <Image  style={ styles.image} source={{uri:'https://cdn.pixabay.com/photo/2015/11/16/01/21/kettlebell-1045067_960_720.jpg'}} />
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.oneArm()}>
          One Arm Tricep Extension
        </Button2>
      </CardSection>

      <CardSection>
        <Button2 onPress={() => Actions.tricepExt()}>
          Tricep Extension
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.Ezbar()}>
          EZ-Bar Skull Crusher
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.cableExt()}>
          Cable Extension
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.closeGrip()}>
          Close Grip Bench Press
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.diamond()}>
         Diamond Push Up
       </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.dips()}>
          Dips
       </Button2>
        </CardSection>

      </Card>
      </ScrollView>
    );
  }
}

const styles= {
  thumbnailContainerStyle:{
  justifyContent:'center',
  alignItems:'center',
  marginLeft:10,
  marginRight:10,
},

image:{
  justifyContent:'center',
  alignItems: 'center',
  height: 200,
  width:200,
  borderRadius: 100,
  marginLeft:100,
  marginRight:150,
  marginTop:25,
},
};

export {Triceps};
