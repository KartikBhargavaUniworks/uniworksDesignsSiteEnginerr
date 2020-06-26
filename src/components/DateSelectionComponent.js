import React from 'react';
import AccordionDesign from '../components/AccordionDesign';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import DropDownProjectNames from '../components/DropDownProjectNames';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather'


const DateSelectionComponent = () =>{

    return(
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
<Text style={{ fontSize: 20, alignSelf:'center' }} >15/02/2020</Text>
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
    )
};

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      height: '100%',
      width: '100%',
      marginBottom: '15%'
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
      flex: 1,
      flexDirection: "row",
      marginHorizontal:'10%'
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
      width: "100%",
      height: 60,
      backgroundColor: "rgba(255,255,255,1)",
      borderWidth: 1,
      borderColor: "rgba(112,112,112,1)",
      borderStyle: "solid",
      borderRadius: 100,
      flexDirection: "row",
      alignItems: 'center',
      paddingStart:13
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
export default DateSelectionComponent;

