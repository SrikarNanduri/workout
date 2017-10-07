import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import {Header, Button, Button2, Card, CircleImage, CardSection, Input, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';

class Lats extends Component {
  render(){
    return(
      <ScrollView>
      <Card>
        <CardSection>
          <Image  style={ styles.image} source={{uri:'https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_960_720.jpg'}} />
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.latPulldown()}>
          Lat Pull Down's
        </Button2>
      </CardSection>

      <CardSection>
        <Button2 onPress={() => Actions.seatedCablerow()}>
          Seated Cable Row
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.closeGrippd()}>
          Close Grip Lat Pull Down's
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.bentOver()}>
          Bent Over Barbell Row
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.Tbar()}>
          T-Bar Row
        </Button2>
        </CardSection>

        <CardSection>
        <Button2 onPress={() => Actions.Dumbbellrows()}>
         Dumbbell Rows
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
imageStyle: {
  height:300,
  flex: 1,
  width: null,
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

export {Lats};
