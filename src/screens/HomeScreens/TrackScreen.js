import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class TrackScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            construction: [
                {
                    id: '1',
                    bookingId: 'HYDCNT000042032',
                    nameVendor: 'Vendor 1',
                    ETA: '32'
                },
                {
                    id: '2',
                    bookingId: 'HYDCNT000042033',
                    nameVendor: 'Vendor 2',
                    ETA: '32'
                },
                {
                    id: '3',
                    bookingId: 'HYDCNT000042034',
                    nameVendor: 'Vendor 3',
                    ETA: '32'
                },
                {
                    id: '4',
                    bookingId: 'HYDCNT000042032HYDCNT000042032',
                    nameVendor: 'Vendor 4',
                    ETA: '32'
                }
            ],
            material: [
                {
                    id: '1',
                    bookingId: 'HYDCNT000042032',
                    nameVendor: 'Vendor 1',
                    ETA: '32'
                },
                {
                    id: '1',
                    bookingId: 'HYDCNT000042032HYDCNT00042032',
                    nameVendor: 'Vendor 1',
                    ETA: '32'
                }
            ]
        }
    }
    renderConstructionTrack = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, borderRadius: 20, marginHorizontal: '8%', borderColor: '#4D9730', borderStyle: "solid", borderWidth: 1, }} >
                <View style={{ flexDirection: 'row', margin: 20 }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#353535' }} >Booking ID : </Text>
                    <Text style={{ maxWidth: '60%', fontSize: 18, fontWeight: 'bold', color: '#353535', opacity: 0.5, alignSelf: 'center' }} >{item.bookingId}</Text>
                </View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#353535', marginLeft: 20 }} >{item.nameVendor}</Text>
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft:20 }} >
                    <Text style={{ color: '#353535', fontSize: 18, fontWeight: 'bold' }} >ETA : </Text>
                    <Text style={{ color: '#353535', fontSize: 16, fontWeight: 'bold', opacity: 0.5, marginTop:3 }} >{item.ETA} min</Text>
                    <View style={{flex:1, flexDirection:'row'}} />
                    <MaterialCommunityIcons name='map-marker-outline' size={50} style={{alignSelf:'flex-end', bottom:20, marginRight:20}} />
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
        return (
            <View style={{ flex: 1 }} >
                <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 18, opacity: 0.5, marginTop: '10%' }} >Project Name</Text>
                <FlatList
                style={{marginTop:15}}
                    data={this.state.construction}
                    renderItem={this.renderConstructionTrack}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}

export default TrackScreen;
