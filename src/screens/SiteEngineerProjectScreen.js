import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, FlatList, TextInput } from 'react-native-gesture-handler';
import images from '../../assets/images'


class SiteEngineerProjectScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDescription: false,
            Images: [
                images.welcom1Image,
                images.welcom2Image,
                images.welcom3Image,
                images.welcom4Image,
            ],
            preRequisites: [
                'Prerequisite 1',
                'Prerequisite 2',
                'Prerequisite 3',
                'Prerequisite 4'
            ],
            tools: [
                {
                    id: 1,
                    name: 'Tool 1',
                    checked: false
                },
                {
                    id: 2,
                    name: 'Tool 2',
                    checked: false
                },
                {
                    id: 3,
                    name: 'Tool 3',
                    checked: false
                },
                {
                    id: 4,
                    name: 'Tool 4',
                    checked: false
                },
                {
                    id: 5,
                    name: 'Tool 5',
                    checked: false
                }
            ],
            milestones: [
                {
                    id: 1,
                    name: 'Preparing',
                    checked: false,
                    submileStones: [
                        {
                            id: 1,
                            name: 'Stick double sidedindustrial tape',
                            checked: false
                        },
                        {
                            id: 2,
                            name: 'Cut the insulation material/sheet as per section opening',
                            checked: true
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Fixing',
                    checked: true,
                    submileStones: [
                        {
                            id: 1,
                            name: 'Fix the insulation panel',
                            checked: false
                        },
                        {
                            id: 1,
                            name: 'Fix of steel/aluminium sheets ',
                            checked: true
                        }
                    ]
                }
            ],
            showMileStone: [
                {
                    id: 1,
                    show: false
                },
                {
                    id: 2,
                    show: false
                }
            ]
        }
    }

    handleShowDescription = () => {
        this.setState({ showDescription: !this.state.showDescription })
    }
    renderImages = ({ item }) => {
        return (
            <View>
                <Image
                    style={{ height: 300, width: Dimensions.get('window').width }}
                    source={item}
                />
            </View>
        )
    }
    renderPrerequisites = ({ item }) => {
        return (
            <View>
                <Text style={{ marginHorizontal: '10%', fontSize: 18 }} >- {item}</Text>
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
    changeValueCheckBox = (val, bool) => {
        let toolsData = this.state.tools
        toolsData.forEach(item => {
            if (val.id == item.id) {
                item.checked = bool
            }
        })
        this.setState({ tools: toolsData })
    }
    renderTools = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row' }} >
                <CheckBox
                    disabled={false}
                    value={item.checked}
                    onValueChange={(bool) => this.changeValueCheckBox(item, bool)}
                />
                <Text style={{ fontSize: 14 }} >{item.name}</Text>
            </View>
        )
    }
    show = (milestone) => {
        let showmile = this.state.showMileStone
        showmile.forEach(item => {
            if (milestone.id == item.id) {
                item.show = !item.show
            }
        })
        this.setState({ showMileStone: showmile })
    }
    renderSubMileStone = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', marginLeft: '8%' }} >
                <MaterialIcons name='error-outline' size={30} color='#ff0000' style={{ alignSelf: 'center' }} />
                <Text style={{ maxWidth: '60%', marginLeft: 10 }} >{item.name}</Text>
                <View style={{ flex: 1, flexDirection: 'row' }} />
                <CheckBox
                    disabled={false}
                    value={item.checked}
                />
                {
                    item.checked ?
                        <MaterialIcons name='photo-camera' size={30} style={{ marginRight: 15 }} />
                        : <View style={{ marginRight: 47 }} />
                }
            </View>
        )
    }

    renderMilestone = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => this.show(item)} >
                    <View style={{ flexDirection: 'row', marginLeft: '10%' }} >
                        <Text style={{ color: '#353535', fontSize: 18 }} >{item.name}</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }} />
                        <CheckBox
                            disabled={false}
                            value={item.checked}
                        />
                        <MaterialIcons name='keyboard-arrow-up' size={30} style={{ marginRight: '10%', marginLeft: '10%' }} />
                    </View>

                </TouchableOpacity>
                {
                    this.state.showMileStone[item.id - 1].show ?
                        <FlatList
                            style={{ marginTop: 30 }}
                            data={item.submileStones}
                            renderItem={this.renderSubMileStone}
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                        :
                        null
                }
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: '10%' }} >
                <Text style={{ alignSelf: 'center', fontSize: 18, color: '#353535' }} >Project Name</Text>
                <Text style={{ alignSelf: 'center', fontSize: 30, color: '#909090', fontWeight: 'bold', marginTop: 15 }} >Wall Construction</Text>
                <ScrollView>
                    <View style={{ backgroundColor: '#000000', alignItems: 'center', marginTop: '5%' }} >
                        <View style={{ alignItems: 'center', marginBottom: '5%' }} >
                            <Text style={{ paddingTop: 15, color: '#ffffff', fontSize: 20 }}> Description</Text>
                            <View style={{ marginTop: 10, alignItems: 'center', width: '75%' }} >
                                {
                                    this.state.showDescription ?
                                        <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'left', }}>Here will be the description</Text>
                                        :
                                        <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'left', }}>Here will be the description</Text>
                                }
                            </View>
                            <View style={{ marginTop: '5%' }} >
                                <View style={styles.knowMore} >
                                    <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }} onPress={this.handleShowDescription}>
                                        <Text style={{ color: '#ffffff' }} >See More</Text>
                                        <MaterialIcons name='keyboard-arrow-right' color='#ffffff' size={20} style={{ marginStart: '10%' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={{ alignSelf: 'center', fontSize: 25, color: '#000000', marginTop: 15 }} >Drawings</Text>
                    <FlatList
                        style={{ flex: 1, marginTop: 20 }}
                        data={this.state.Images}
                        renderItem={this.renderImages}
                        horizontal={true}
                    />
                    <Text style={{ alignSelf: 'center', fontSize: 25, color: '#000000', marginTop: 25 }} >Prerequisites</Text>
                    <FlatList
                        style={{ marginTop: 20 }}
                        data={this.state.preRequisites}
                        renderItem={this.renderPrerequisites}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                    <Text style={{ alignSelf: 'center', fontSize: 25, color: '#000000', marginTop: 25 }} >Tools and Workforce</Text>
                    <FlatList
                        style={{ marginTop: 20, marginHorizontal: '10%' }}
                        data={this.state.tools}
                        renderItem={this.renderTools}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                    <TextInput
                        placeholder='Skilled'
                        keyboardType='numeric'
                        placeholderTextColor='#aaaaaa'
                        style={{ height: 40, width: 60, backgroundColor: '#D1D1D1', marginTop: 20, marginHorizontal: '10%', textAlign: 'center' }}
                    />
                    <TextInput
                        placeholder='Skilled'
                        keyboardType='numeric'
                        placeholderTextColor='#aaaaaa'
                        style={{ height: 40, width: 60, backgroundColor: '#D1D1D1', marginTop: 20, marginHorizontal: '10%', textAlign: 'center' }}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: '10%' }} >
                        <TextInput
                            placeholder='Skilled'
                            keyboardType='numeric'
                            placeholderTextColor='#aaaaaa'
                            style={{ height: 40, width: 120, backgroundColor: '#D1D1D1', textAlign: 'center' }}
                        />
                        <View style={{ flex: 1, flexDirection: 'row' }} />
                        <TouchableOpacity style={{ backgroundColor: '#0099FF', borderRadius: 10, height: 40, width: 90, justifyContent: 'center' }} >
                            <Text style={{ alignSelf: 'center', color: '#ffffff' }} >Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ alignSelf: 'center', fontSize: 25, color: '#000000', marginTop: 35 }} >Milestones</Text>
                    <FlatList
                        style={{ marginTop: 20 }}
                        data={this.state.milestones}
                        renderItem={this.renderMilestone}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20, marginRight: '10%' }} >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 20, alignSelf: 'center' }} >Work Done</Text>
                        <TextInput
                            style={{ height: 40, width: 80, backgroundColor: '#D1D1D1', textAlign: 'center' }}
                            placeholder='45789'
                            placeholderTextColor="#000000"
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20, marginRight: '10%' }} >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 20, alignSelf: 'center' }} >Site Cleaned</Text>
                        <CheckBox

                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20, marginRight: '10%' }} >
                        <Text style={{ color: '#5D83C6', fontSize: 16 }} >Report an issue</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginRight: '10%', marginLeft: '10%' }} >
                        <Text style={{ color: '#353535', fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }} >Address</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }} />
                        <MaterialIcons name='share' size={30} />
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: '20%', marginTop: 30 }} >
                        <Text style={styles.TypeStyle, { fontSize: 20 }} >Type</Text>
                        <View style={styles.signInFiller}></View>
                        <Text style={styles.Number, { fontSize: 20 }}>Number</Text>
                    </View>
                    <View style={{
                        marginTop: 15,
                        marginLeft: '20%', marginRight: '25%', flexDirection: 'row'
                    }}>
                        <Text style={styles.TypeStyle} >Skills</Text>
                        <View style={styles.signInFiller}></View>
                        <Text style={styles.Number}>1</Text>
                    </View>
                    <View style={{
                        marginTop: 15,
                        marginLeft: '20%',
                        marginRight: '25%', flexDirection: 'row'
                    }}>
                        <Text style={styles.TypeStyle} >Semi Skilled</Text>
                        <View style={styles.signInFiller}></View>
                        <Text style={styles.Number}>1</Text>
                    </View>
                    <View style={{
                        marginTop: 15,
                        marginLeft: '20%',
                        marginRight: '25%', flexDirection: 'row'
                    }}>
                        <Text style={styles.TypeStyle} >Unskilled</Text>
                        <View style={styles.signInFiller}></View>
                        <Text style={styles.Number}>1</Text>
                    </View>
                    <TouchableOpacity style={styles.approvedButton} onPress={() => this.props.navigation.goBack()} >
                        <Text style={{ fontSize: 20, color: '#ffffff', alignSelf: 'center' }}>Submit</Text>
                    </TouchableOpacity >
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    knowMore: {
        width: 120,
        height: 40,
        backgroundColor: "#000000",
        borderWidth: 1,
        borderColor: "#ffffff",
        borderStyle: "solid",
        borderRadius: 100,
        flexDirection: "row",
        alignItems: 'center',
        paddingStart: 10,
    },
    TypeStyle: {
        color: "#000000",
    },
    signInFiller: {
        flex: 1,
        flexDirection: "row"
    },
    Number: {
        color: "#121212",
    },
    approvedButton: {
        width: "60%",
        height: 55,
        backgroundColor: "#93D152",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        justifyContent: 'center',
        marginTop: 30,
        alignSelf: 'center'
    },

})

export default SiteEngineerProjectScreen;