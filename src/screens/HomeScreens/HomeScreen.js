import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'Project 1',
                    address: '10909, Walnut Block Indu Fortune FieldsKPHB'
                },
                {
                    id: 2,
                    name: 'Project 2',
                    address: '40101, Olive BlockIndu Fortune FieldsKPHB'
                },
                {
                    id: 3,
                    name: 'Project 3',
                    address: '80904, Pine BlockIndu Fortune FieldsKPHB'
                }
            ]
        }
    }
    renderProjectNames = ({ item }) => {
        return (

            <View style={{ flex: 1, height: 150, backgroundColor: '#FBFBFB', marginHorizontal: '5%' }} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AreaWiseVendorList')} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 25, marginTop: 10 }} >{item.name}</Text>
                    <Text style={{ marginLeft: 30, maxWidth: 190, marginTop: 10 }} >{item.address}</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginHorizontal: '10%', marginTop: 20 }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ItemInventoryScreen")} >
                        <MaterialIcons name='assignment' style={{ color: '#2180ff' }} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: '20%' }} onPress={() => this.props.navigation.navigate("InventoryScreen")}  >
                        <MaterialCommunityIcons name='truck' style={{ color: '#2180ff' }} size={24} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', flex: 1 }} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("FilesScreen")}  >
                        <MaterialIcons name='folder-open' style={{ color: '#2180ff' }} size={24} />
                    </TouchableOpacity>
                </View>
            </View>
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
        return (
            <View style={{ flex: 1, marginTop: '10%' }} >
                <Text style={{ marginLeft: '10%', color: '#353535', fontSize: 30 }} >Welcome</Text>
                <Text style={{ marginLeft: '10%', color: '#353535', fontWeight: 'bold', fontSize: 25 }} >Aman</Text>
                <TouchableOpacity style={styles.rect3} onPress={()=> this.props.navigation.navigate("TrackScreen")} >
                    <Text style={{color:'#ffffff', alignSelf:'center', fontWeight:'bold'}} >Track your orders</Text>
                </TouchableOpacity>
                <FlatList
                    style={{ marginTop: 30 }}
                    data={this.state.data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderProjectNames}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        rect3: {
            height: 50,
            backgroundColor: "#000000",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 100,
            flexDirection: "row",
            marginHorizontal:'20%',
            marginTop:30,
            justifyContent:'center'
        },
    }
)

export default HomeScreen;
