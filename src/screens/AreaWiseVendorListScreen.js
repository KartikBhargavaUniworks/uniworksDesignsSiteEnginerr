import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AnimatedLoader from "react-native-animated-loader";

class AreaWiseVendorListScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country: null,
            city: null,
            cities: [],
            showAreas: false,
            areas: [
                {
                    name: 'Area 1',

                },
                {
                    name: 'Area 2',

                },
                {
                    name: 'Area 3',

                }, {
                    name: 'Area 4'
                }]
        };
    }

    changeCountry(item) {
        let city = null;
        let cities;
        switch (item.value) {
            case 'fr':
                cities = [
                    { label: 'Paris', value: 'paris' }
                ];
                break;
            case 'es':
                cities = [
                    { label: 'Madrid', value: 'madrid' }
                ];
                break;
        }

        this.setState({
            city,
            cities
        });
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
    changeCity(item) {
        this.setState({
            city: item.value
        });
    }
    show = () => {
        this.setState({ showAreas: !(this.state.showAreas) })
    }
    renderAreas = ({ item }) => {
        return (
            <TouchableOpacity style={{ alignSelf: 'center', marginVertical: '5%' }} >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    render(

    ) {
        return (
            <View style={{ flex: 1 }} >
                <AnimatedLoader
                    visible={false}
                    overlayColor="rgba(255,255,255,0.75)"
                    source={require("../../assets/loader.json")}
                    animationStyle={styles.lottie}
                    speed={1}
                />
                <View style={{ marginTop: '10%' }} >
                    <DropDownPicker
                        items={[
                            { label: 'France', value: 'fr' },
                            { label: 'Spain', value: 'es' },
                        ]}
                        defaultNull
                        placeholder="Project Name"
                        containerStyle={{ height: 40 }}
                        onChangeItem={item => this.changeCountry(item)}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginTop: '5%' }} >

                    <TouchableOpacity onPress={this.show} >
                        <View style={styles.rect3} >
                            <Text style={{ alignSelf: 'center', color: '#000000', fontSize: 16 }} >Hello</Text>
                            <View style={{ flex: 1, flexDirection: 'row' }} />
                            <MaterialIcons name={this.state.showAreas ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} style={{ margin: 20 }} />
                        </View>

                    </TouchableOpacity>

                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookNewScreen')} >
                        <MaterialCommunityIcons name='plus-circle-outline' size={50} style={{ alignSelf: 'center', marginRight: '8%', marginTop: 5 }} />
                    </TouchableOpacity>
                </View>
                {
                    this.state.showAreas ?
                        <View style={styles.rect4} >
                            <FlatList
                                data={this.state.areas}
                                renderItem={this.renderAreas}
                                keyExtractor={id => id.name}
                                ItemSeparatorComponent={this.renderSeparator}
                            />
                        </View>
                        :
                        null
                }

            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        rect3: {
            height: 60,
            backgroundColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 100,
            flexDirection: "row",
            paddingStart: 20,
            marginLeft: '5%',
            width: 200,
            marginRight: '5%'
        },
        rect4: {
            backgroundColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 10,
            flexDirection: "row",
            marginLeft: '10%',
            width: 150,
            marginRight: '5%',
            marginTop: 15
        },
        subcategory: {
            backgroundColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 100,
            padding: 20,
        },
        lottie: {
            width: 100,
            height: 100
        }
    }
)

export default AreaWiseVendorListScreen;
