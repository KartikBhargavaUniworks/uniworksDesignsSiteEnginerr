import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class ItemInventoryScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[
                {
                    id:1,
                    name:'Item 1'
                },
                {
                    id:2,
                    name:'Item 2'
                },
                {
                    id:3,
                    name:'Item 3'
                },
                {
                    id:4,
                    name:'Item 4'
                },
                {
                    id:5,
                    name:'Item 5'
                },
            ]
        }
    }
    renderVendorNames = ({ item }) => {
        return (
            <TouchableOpacity style={{backgroundColor: '#FBFBFB'}} >
                <View style={{ flex: 1, height: 100, backgroundColor: '#FBFBFB', flexDirection: 'row', marginHorizontal: '5%' }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginLeft: 15 }} >{item.name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <MaterialIcons name='keyboard-arrow-right' style={{ alignSelf: 'center', marginRight: 15 }} size={30} />
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

    render() {
        return(
            <View style={{flex:1}} >
                <Text style={{ alignSelf: 'center', fontSize: 24, color: '#353535', marginTop:'10%', fontWeight:'bold', opacity:0.7 }} >Project Name</Text>
                <FlatList
                style={{marginTop:'10%'}}
                 data={this.state.items}
                 renderItem={this.renderVendorNames}
                 keyExtractor={item=>item.id.toString()}
                 ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}

export default ItemInventoryScreen;