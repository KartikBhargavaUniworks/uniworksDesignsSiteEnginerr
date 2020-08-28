import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


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

            <View style={{ flex: 1, height: 120, backgroundColor: '#FBFBFB', flexDirection: 'row', marginHorizontal: '5%' }} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AreaWiseVendorList')} >
                    <View style={{ alignSelf: 'center' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 25, marginTop: 10 }} >{item.name}</Text>
                        <Text style={{ marginLeft: 30, maxWidth: 150, marginTop: 10 }} >{item.address}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row' }} />
                <TouchableOpacity style={{justifyContent: 'center',flex:1}} onPress={()=>this.props.navigation.navigate('FilesScreen')} >
                    <MaterialIcons name='folder-open' style={{  marginRight: '10%', color: '#2180ff' }} size={24} />
                </TouchableOpacity>
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

export default HomeScreen;
