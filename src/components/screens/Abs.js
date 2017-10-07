import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import {Header, Button, Button2, Card, CircleImage, CardSection, Input, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';

class Abs extends Component {
  render(){
    return(
      <ScrollView>
      <Card>
        <CardSection>
        <Image  style={ styles.image} source={{uri:'https://cdn.pixabay.com/photo/2017/02/28/10/40/abs-2105416_960_720.jpg'}} />
        </CardSection>


        <CardSection>
        <Button2 onPress={() => Actions.legRise()}>
          Leg Rises
        </Button2>
      </CardSection>

      <CardSection>
        <Button2 onPress={() => Actions.Planks()}>
          Planks
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.Crunches()}>
          Crunches
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.reverseCrunches()}>
          Reverse Crunches
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.sittingTwists()}>
          Sitting Twists
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.crossBody()}>
         Cross Body Crunches
       </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.mountainClimbers()}>
         Mountain Climbers
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

export  {Abs};
