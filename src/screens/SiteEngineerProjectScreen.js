import React from 'react';
import AccordionDesign from '../components/AccordionDesign';
import { View, StyleSheet, Dimensions } from 'react-native';
import DropDownProjectNames from '../components/DropDownProjectNames';
import DateSelectionComponent from '../components/DateSelectionComponent';
import { ScrollView } from 'react-native-gesture-handler';

const SiteEngineerProjectScreen = ()=>{
    return(
        <ScrollView>
        <View style={{ flex:1, marginBottom:'10%' }} >
            <DropDownProjectNames/>
            <DateSelectionComponent/>
            <AccordionDesign milestoneName='Tile Laying' progressValue={0.75} />
            <AccordionDesign milestoneName='Electrician' progressValue={0.55} />
            <AccordionDesign milestoneName='Carpentry' progressValue={0.45} />
            <AccordionDesign milestoneName='Anything ' progressValue={0.35} />
        </View>
        </ScrollView>
    )
}
  
export default SiteEngineerProjectScreen;