import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import {Header, Button, Button2, Card, CircleImage, CardSection, Input, Spinner, Text1, Text2 } from '../../common';

class flatBench extends Component {
  render(){
    return(
      <ScrollView>
      <Card>
        <CardSection>
          <Image  style={ styles.image} source={{uri:'https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_960_720.jpg'}} />
        </CardSection>



        <CardSection>
          <Text1 >3 sets of Flat Bench Press</Text1>
        </CardSection>

          <CardSection>
           <Text2 >Set 1 : 20 Repetitions {"\n"} (REST : 30-50 secs) </Text2>
         </CardSection>


           <CardSection>
          <Text2 >Set 2 : 18 Repetitions {"\n"}    (REST : 30-50 secs)</Text2>
        </CardSection>

          <CardSection>
          <Text2>Set 3 : 18-16 Repetitions {"\n"}     (REST : 1-2 mins)</Text2>
        </CardSection>
            </Card>


    </ScrollView>

    );
  }
}

const styles= {

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
export  {flatBench};
