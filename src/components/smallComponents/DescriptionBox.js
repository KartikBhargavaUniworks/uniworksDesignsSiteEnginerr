import React from 'react';
import { Text, View } from 'react-native';

const DescriptionBox = ({descriptionText}) =>{
  return(
    <View style={{ backgroundColor: '#000000', alignItems: 'center', height: 200, marginBottom: '5%',marginHorizontal:'5%', marginTop: '5%' }} >
    <View style={{ alignItems: 'center' }} >
      <Text style={{ paddingTop: 15, color: '#ffffff', fontSize: 20 }}> Description</Text>
      <View style={{ marginTop: 10, alignItems: 'center', width: '75%' }} >
        <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'center' }}>{descriptionText}</Text>
      </View>
    </View>
  </View>
  )
}

export default DescriptionBox;