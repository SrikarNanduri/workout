import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import {Header, Button, Button2, Card, CircleImage, CardSection, Input, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';

class Shoulder extends Component {
  render(){
    return(
      <ScrollView>
      <Card>
        <CardSection>
        <Image  style={ styles.image} source={{uri:'https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_960_720.jpg'}} />
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.militaryPress()}>
          Military Press
        </Button2>
      </CardSection>

      <CardSection>
        <Button2 onPress={() => Actions.dumbbellPress()}>
          Dumbbell Press
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.shoulderMachine()}>
          Shoulder Machine
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.dumbbellLateral()}>
          Dumbbell Lateral Raise
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.dumbbellRaise()}>
          Dumbbell Front Raise
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.upRightrow()}>
         Up Right Row
       </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.arnoldPress()}>
         Arnold Press
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

export {Shoulder};
