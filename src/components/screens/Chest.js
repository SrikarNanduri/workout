import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import {Header, Button, Button2, Card, CircleImage, CardSection, Input, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';

class Chest extends Component {
  render(){
    return(
      <ScrollView>
      <Card>
        <CardSection>
        <Image  style={ styles.image} source={{uri:'https://cdn.pixabay.com/photo/2017/08/11/00/10/street-workout-2629179_960_720.jpg'}} />
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.pushUps()}>
          Push Ups
        </Button2>
      </CardSection>

      <CardSection>
      <Button2 onPress={() => Actions.pullUps()}>
        Pull Ups
      </Button2>
    </CardSection>

      <CardSection>
        <Button2 onPress={() => Actions.flatBench()}>
          Flat Bench Press
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.inclineDumbbell()}>
          Incline Dumbbell Press
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.declinePress()}>
          Decline Dumbbell Press
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.flatFly()}>
          Flat Bench Dumbbell Fly
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.inclineFly()}>
          Incline Dumbbell Fly
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.chestDips()}>
         Chest Dips
       </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.chestExt()}>
         Chest Extensions
       </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.landmine()}>
         Landmine Press
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

export {Chest};
