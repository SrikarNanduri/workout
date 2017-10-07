import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import {Header, Button, Button2, Card, CircleImage, CardSection, Input, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';

class Biceps extends Component {
  render(){
    return(
      <ScrollView>
      <Card>
        <CardSection>
        <Image  style={ styles.image} source={{uri:'https://cdn.pixabay.com/photo/2017/01/09/14/43/dumbbell-1966704_960_720.jpg'}} />
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.chinUps()}>
          Chin Ups
        </Button2>
      </CardSection>

      <CardSection>
        <Button2 onPress={() => Actions.barbellCurls()}>
          Barbell Curls
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.dumbbellCurls()}>
          Dumbbell Curls
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.preacherCurls()}>
          Preacher Curls
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.cableCurls()}>
          Cable Curls
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.concentrationCurls()}>
         Concentration Curls
       </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.dumbbellHammers()}>
         Dumbbell Hammers
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

export {Biceps};
