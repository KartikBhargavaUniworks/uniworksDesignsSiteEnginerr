import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native-gesture-handler';

class MaterialScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            materials: [
                {
                    id: 1,
                    name: 'Material Name 1',
                    brandName: 'Brand Name 1',
                    color: 'blue',
                    colorCode: '#2180ff',
                    quantity: '',
                    checked:false
                },
                {
                    id: 2,
                    name: 'Material Name 2',
                    brandName: 'Brand Name 2',
                    color: 'blue',
                    colorCode: '#2180ff',
                    quantity: '',
                    checked:true
                },
                {
                    id: 3,
                    name: 'Material Name 3',
                    brandName: 'Brand Name 3',
                    color: 'blue',
                    colorCode: '#2180ff',
                    quantity: '',
                    checked:true
                },
                {
                    id: 4,
                    name: 'Material Name 4',
                    brandName: 'Brand Name 4',
                    color: 'blue',
                    colorCode: '#2180ff',
                    quantity: '',
                    checked:false
                }
            ]
        }
    }


    renderMaterialItems = ({ item }) => {
        return (
            <View  >
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ fontSize: 20, color: '#353535', fontWeight: 'bold' }} >{item.name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <CheckBox
                        style={{ alignSelf: 'center',marginRight:10 }}
                        checked={item.checked       }
                    />
                </View>
                <Text style={{ color: "#353535", fontSize: 16 }} >{item.brandName}</Text>
                <View style={{ flexDirection: 'row', marginTop:10}} >
                    <View >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', opacity: 0.8 }} >Specification</Text>
                        <Text style={{ fontSize: 16 }} >{item.color + ',' + item.colorCode}</Text>
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
                <View style={{ flexDirection: 'row',marginTop:10 }} >
                    <TextInput
                     keyboardType='numeric'
                     placeholderTextColor='#aaaaaa'
                     placeholder='Quantity'
                        style={{ fontSize: 14, height: 30, width: 90, backgroundColor: '#D1D1D1',textAlign:'center' }}
                    />
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, color: '#2180ff', fontWeight: 'bold' }} >Quality Check</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 30
                }}
            />
        );
    };
    render() {
        return (
            <View style={{ flex: 1, marginTop: '10%' }} >
                <View style={{ flexDirection: 'row', marginHorizontal: '5%' }} >
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }} >Material Vendor</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <MaterialIcons name='call' size={24} />
                </View>
                <FlatList
                    style={{ marginTop: '10%', marginHorizontal:'8%' }}
                    data={this.state.materials}
                    renderItem={this.renderMaterialItems}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}

export default MaterialScreen;
