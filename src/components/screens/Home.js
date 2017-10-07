import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  render(){
    return(
      <ScrollView>
      <Card>
        <CardSection>

          <Image style={ styles.imageStyle} source={{uri:'https://cdn.pixabay.com/photo/2016/11/21/22/56/naked-1847866_960_720.jpg'}}
          />

        </CardSection>

        <CardSection>
        <Button onPress={() => Actions.Lats()}>
          Lats
        </Button>
      </CardSection>

      <CardSection>
        <Button onPress={() => Actions.Chest()}>
          Chest
        </Button>
        </CardSection>

        <CardSection>
        <Button onPress={() => Actions.Biceps()}>
          Biceps
        </Button>
        </CardSection>

        <CardSection>
        <Button onPress={() => Actions.Shoulder()}>
          Shoulder
        </Button>
        </CardSection>

        <CardSection>
        <Button onPress={() => Actions.Triceps()}>
          Triceps
        </Button>
        </CardSection>

        <CardSection>
        <Button onPress={() => Actions.Legs()}>
         Legs
        </Button>
        </CardSection>

        <CardSection>
        <Button onPress={() => Actions.Abs()}>
          Abs
        </Button>

      </CardSection>

      </Card>
      </ScrollView>

    );
  }
}

const styles= {

imageStyle: {
  height:250,
  flex: 1,
  borderRadius: 10,
  width: null,
  marginTop:12,
},
};

export {Home};
