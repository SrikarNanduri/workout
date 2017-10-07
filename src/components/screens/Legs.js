import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import {Header, Button, Button2, Card, CircleImage, CardSection, Input, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';

class Legs extends Component {
  render(){
    return(
      <ScrollView>
      <Card>
        <CardSection>
        <Image  style={ styles.image} source={{uri:'https://cdn.pixabay.com/photo/2015/07/02/10/26/training-828760_960_720.jpg'}} />
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.Squats()}>
          Squats
        </Button2>
      </CardSection>

      <CardSection>
        <Button2 onPress={() => Actions.calvesLeg()}>
          Calves Leg Press
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.dumbbellWalkinglunge()}>
          Dumbbell Walking Lunge
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.legExt()}>
          Leg Extensions
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.calfRaises()}>
          Calf Raises
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.gobletSquat()}>
         Goblet Squats
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

export {Legs};
