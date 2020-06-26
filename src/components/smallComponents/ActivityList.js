import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Picker } from 'react-native';
import { Checkbox } from 'react-native-paper'
import Feather from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ActivityList = () => {

    let activityList = [
        {
            id: 1,
            name: "Activity 1",
            checked:false
        },
        {
            id: 2,
            name: "Activity 2",
            checked:false
        },
        {
            id: 3,
            name: "Activity 3",
            checked:false
        },
        {
            id: 4,
            name: "Activity 4"
        },
        {
            id: 5,
            name: "Activity 5",
            checked:false
        }]

        function handleChange(check, Key) {
            activityList.map((prop,key) =>{
                let value = check
                key = Key
                prop.checked = value
                console.log(prop.checked)
            })
        }

    return (
        <View style={{ flex: 1 }} >
            <View style={{ flexDirection: 'row' }} >
                <Text style={{ opacity: 0.4, color: '#000000', fontSize: 18, marginStart: '10%', marginTop: '2%' }} >2:00 pm</Text>
                <View style={{ marginStart: '5%' }} >
                    {
                        activityList.map((prop, Key) => {
                            return (
                                <View style={{ flexDirection: 'row', marginStart: '10%' }} >
                                    <Text
                                        key={Key}
                                        style={{ fontSize: 18, fontWeight: 'bold', marginTop: '10%' }} >
                                        - {prop.name}
                                    </Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }} />
                                    <Checkbox
                                        status={prop.checked}
                                        onPress={()=>{
                                           handleChange(!prop.checked, Key)
                                        }}
                                    />
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View style={{ marginVertical: 30 }} >
                <TouchableOpacity style={styles.approvedButton} >
                    <View style={{ flex: 1, justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, color: '#ffffff', alignSelf: 'center' }}>Submit</Text>
                    </View>
                </TouchableOpacity >
            </View>
            <View style={{ flexDirection: 'row' }} >
                <Text style={{ opacity: 0.4, color: '#000000', fontSize: 18, marginStart: '10%', marginTop: '2%' }} >7:00 pm</Text>
                <View style={{ marginStart: '5%' }} >
                    {
                        activityList.map((prop, id) => {
                            return (
                                <View style={{ flexDirection: 'row', marginStart: '10%' }} >
                                    <Text
                                        key={id}
                                        style={{ fontSize: 18, fontWeight: 'bold', marginTop: '10%' }} >
                                        - {prop.name}
                                    </Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }} />
                                    <Checkbox
                                        status={prop.checked ? 'checked' : 'unchecked' }
                                        onPress={()=>{
                                            handleChange(!prop.checked)
                                         }}
                                    />
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View style={{ marginVertical: 30 }} >
                <TouchableOpacity style={styles.approvedButton} >
                    <View style={{ flex: 1, justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, color: '#ffffff', alignSelf: 'center' }}>Submit</Text>
                    </View>
                </TouchableOpacity >
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        SiteEngineerFiller: {
            flex: 1,
            flexDirection: "row",
        },
        approvedButton: {
            height: 55,
            width: '60%',
            padding: 25,
            backgroundColor: "#93D152",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 100,
            alignSelf: 'center',
        },
    }
)
export default ActivityList;