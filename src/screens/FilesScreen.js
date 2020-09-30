import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


class FilesScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            data:[
                {
                    id:1,
                    name:'Project 1',
                    address:'10909, Walnut Block Indu Fortune FieldsKPHB'
                },
                {
                    id:2,
                    name:'Project 2',
                    address:'40101, Olive BlockIndu Fortune FieldsKPHB'
                },
                {
                    id:3,
                    name:'Project 3',
                    address:'80904, Pine BlockIndu Fortune FieldsKPHB'
                }
            ]
        }
    }
    renderProjectNames=({item})=>{
        return(
            <TouchableOpacity>
                <View style={{ flex:1, height:100, backgroundColor:'#FBFBFB',flexDirection:'row', marginHorizontal:'5%' }} > 
            <Text style={{ fontSize:20, fontWeight:'bold', alignSelf:'center', marginLeft:15 }} >{item.name}</Text>
            <View style={{ flex:1, flexDirection:'row' }} />
            <MaterialIcons name = 'keyboard-arrow-right' style={{alignSelf:'center', marginRight:15}} size={24} />
            </View>
            </TouchableOpacity>
        )
    }

    renderSeparator = () => {
    return (
      <View
        style={{
          height: 10
        }}
      />
    );
  };
    render(){
        return(
            <View style={{ flex:1 , marginTop:'10%'}} >
                <View style={{ flexDirection:'row', justifyContent:'center' }} >
                <Text style={{ alignSelf:'center', color:'#353535', fontWeight:'bold', fontSize:30 }} >Files</Text>
                </View>
                <FlatList
                style={{marginTop:15}}
                data={this.state.data}
                keyExtractor={item=>item.id.toString()}
                renderItem={this.renderProjectNames}
                ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}

export default FilesScreen;
