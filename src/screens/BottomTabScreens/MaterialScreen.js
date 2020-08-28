import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';

class MaterialScreen extends Component{


    renderMaterialItems=({})=>{
        return(
            <View style={{ marginTop: '10%' }} >
            <View style={{ flexDirection: 'row', marginHorizontal: '10%' }} >
                <Text style={{ fontSize: 20, color: '#353535', fontWeight: 'bold' }} >Kartik</Text>
                <View style={{ flex: 1, flexDirection: 'row' }} />
                    <CheckBox
                        checked={true}
                        onPress={true}
                    />
            </View>
            <Text style={{ marginHorizontal: '10%', color: "#353535", fontSize: 16, marginTop: 5 }} >Aman</Text>
            <View style={{ flexDirection: 'row', marginTop: '5%', marginHorizontal: '10%' }} >
                <View >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', opacity: 0.8 }} >Specification</Text>
                    <Text style={{ fontSize: 16 }} >{"Red" + ',' + '#2180ff'}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }} />
                <View style={{
                    width: "20%",
                    height: 30,
                    backgroundColor: '#2180ff',
                    borderWidth: 1,
                    borderColor: '#2180ff',
                    borderStyle: "solid",
                    borderRadius: 100,
                    marginTop: 5
                }} />
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: '10%', marginTop: '5%' }} >
                <Text style={{ fontSize: 20, color: '#353535', fontWeight: 'bold' }} >210</Text>
                <View style={{ flex: 1, flexDirection: 'row' }} />
                <Text style={{ fontSize: 20, color: '#353535', fontWeight: 'bold' }} >Rs 41500</Text>
            </View>
        </View>
        )
    }
    render(){
        return(
            <View style={{ flex:1, marginTop:'10%' }} >
                <ScrollView>
                <View style={{ flexDirection:'row', marginHorizontal:'5%' }} >
                    <Text>Material Vendor</Text>
                    <View style={{flex:1, flexDirection:'row'}} />
                    <MaterialIcons name='call' size={24} />
                </View>
                </ScrollView>
            </View>
        )
    }
}

export default MaterialScreen;
