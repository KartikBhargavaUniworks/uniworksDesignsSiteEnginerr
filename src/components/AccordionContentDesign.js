import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Picker, CheckBox } from 'react-native';
import Feather from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DescriptionBox from './smallComponents/DescriptionBox';
import ActivityList from './smallComponents/ActivityList';

const AccordionContentDesign = ({ mileStoneNames }) => {
    var data = {
        descriptionText: 'Here will be the description'
    }
    return (
        <ScrollView>
            <View style={styles.mainContainer} >
                <View style={{ alignItems: 'center', marginTop: '13%' }}>
                    <Text style={{ color: '#909090', fontSize: 30 }}>{mileStoneNames}</Text>
                </View>
                <View style={{ marginTop: '5%', flexDirection: 'row', marginHorizontal: '10%' }} >
                    <TouchableOpacity >
                        <View style={styles.icon1Stack}>
                            <FeatherIcon name="arrow-left" style={styles.icon1}></FeatherIcon>
                            <View style={styles.rect4}>
                                <FeatherIcon name="arrow-left" style={styles.icon2}></FeatherIcon>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.signInFiller} >
                        <View style={styles.rect3} >
                            <Text style={{ fontSize: 20 }} >Area 1</Text>
                        </View>
                    </View>
                    <TouchableOpacity >
                        <View style={styles.icon1Stack}>
                            <FeatherIcon name="arrow-right" style={styles.icon1}></FeatherIcon>
                            <View style={styles.rect4}>
                                <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <DescriptionBox descriptionText={data.descriptionText} />
                <ActivityList/>
                <View style={{ alignItems: 'flex-end', marginTop: 15, marginRight: '10%' }} >
                    <View style={{ flexDirection: 'row' }} >
                        <View style={{ alignSelf: 'center', marginRight: '2%' }} >
                            <Text  >Site Cleaned</Text>
                        </View>
                        <CheckBox
                        />
                    </View>
                </View>
                <View style={{ marginTop: '15%', alignItems: 'flex-end', marginRight: '10%' }} >
                    <Text style={{ color: '#5D83C6', fontSize: 16 }} >Report an issue</Text>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    SiteEngineerFiller: {
        flex: 1,
        flexDirection: "row",
    },
    SiteEngineerRow: {
        flexDirection: "row",
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 150,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    TypeStyle: {
        color: "#000000",
    },
    signInFiller: {
        marginLeft: '15%',
        flex: 1,
        flexDirection: "row"
    },
    Number: {
        color: "#121212",
    },
    ModalRow: {
        flexDirection: "row",
        marginTop: '10%',
        marginLeft: '20%',
        marginRight: '20%'
    },
    icon2: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        height: 41,
        width: 40,
        marginTop: 8,
        marginLeft: 9
    },
    icon1Stack: {
        width: 60,
        height: 60
    },
    rect4: {
        top: 0,
        width: 60,
        height: 60,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        left: 0
    },
    rect3: {
        width: "75%",
        height: 60,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        flexDirection: "row",
        alignItems: 'center',
        paddingStart: 20
    },
    approvedButton: {
        width: "100%",
        height: 55,
        padding: 25,
        backgroundColor: "#93D152",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        flexDirection: "row",
        alignItems: 'center',
    },
    DropDownMenu: {
        width: "60%",
        height: '100%',
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        alignItems: 'flex-end',
        paddingStart: 0,
        alignItems: 'center',
        marginRight: '5%',
        marginHorizontal: '5%'
    },
    icon1: {
        top: 8,
        left: 9,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 40
    },
    textInputPhone: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        flexDirection: 'row',
        maxWidth: '90%'
    },

})

export default AccordionContentDesign;