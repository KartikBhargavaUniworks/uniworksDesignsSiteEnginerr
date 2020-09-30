import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'

class InventoryScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            inventroy:[
                {
                    bookingId:'HYDCNT000042033',
                    vendorName:'Vendor 1',
                    items:'6',
                    amount:'24,500'
                },
                {
                    bookingId:'HYDCNT000042034',
                    vendorName:'Vendor 2',
                    items:'6',
                    amount:'24,500'
                },
                {
                    bookingId:'HYDCNT000042035',
                    vendorName:'Vendor 3',
                    items:'6',
                    amount:'24,500'
                },
                {
                    bookingId:'HYDCNT000042036',
                    vendorName:'Vendor 4',
                    items:'6',
                    amount:'24,500'
                },
                {
                    bookingId:'HYDCNT000042037',
                    vendorName:'Vendor 5',
                    items:'6',
                    amount:'24,500'
                },
            ]
        }
    }


     renderInventory = ({ item }) => {
        return (
            <View style={{ flex: 1, backgroundColor:'#FBFBFB' }} >
                <TouchableOpacity style={{marginHorizontal:'8%'}} onPress={()=>this.props.navigation.navigate("MaterialScreen")}  >
                    <View style={{flexDirection: 'row',
        marginEnd: '5%',}} >
                        <Text style={{ fontSize: 18, fontWeight:'bold' }} >Booking ID : </Text>
                        <Text style={{ fontSize: 18 }} >{item.bookingId}</Text>
                    </View>
                    <Text style={{ color: '#353535', fontSize: 20, fontWeight: 'bold', marginTop:10 }} >{item.vendorName} </Text>
                    <View style={{
                        flexDirection: 'row',
                        marginEnd: '5%',
                        marginTop: 15,
                        marginBottom: 10
                    }} >
                        <Text >{item.items} items</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', bottom: 5 }} >₹ {item.amount}</Text>
                    </View>
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

    render(){
        return(
            <View style={{flex:1}} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop:30 }}>Schedule</Text>
                <FlatList
                 style={{ marginTop:30}}   
                 data={this.state.inventroy}
                 renderItem={this.renderInventory}
                 keyExtractor={item=>item.bookingId}
                 ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}

export default InventoryScreen;
