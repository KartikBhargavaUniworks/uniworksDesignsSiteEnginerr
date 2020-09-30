import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

class BookNewScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            categories:[
               { label:'Civil Works', value:'Civil Works'}
            , {label:'Electrical', value:'Electrical'}
            , {label:'Plumbing', value:'Plumbing'}],
            selectedCategory:'',
            showSubTask:false,
            subTask:[
                { label:'Option A', value:'Option A'},
                { label:'Option B', value:'Option B'},
                { label:'Option C', value:'Option C'},
            ],
            selectedSubTask:'',
            showBroadtask:false,
            broadTask:[
                { label:'Option A', value:'Option A'},
                { label:'Option B', value:'Option B'},
                { label:'Option C', value:'Option C'},
            ],
            selectedBroadTask:'',
            showArea:false,
            areas:[
                { label:'Option A', value:'Option A'},
                { label:'Option B', value:'Option B'},
                { label:'Option C', value:'Option C'},
            ],
            selectedArea:'',
            showButton:false
        }
    }

    setCategory=(item)=>{
        this.setState({selectedCategory:item, showSubTask:true})
        
    }
    setSubTask=(item)=>{
        this.setState({selectedSubTask:item, showBroadtask:true})
        
    }
    setBroadTask=(item)=>{
        this.setState({selectedBroadTask:item, showArea:true})
        
    }
    setArea=(item)=>{
        this.setState({selectedArea:item, showButton:true})
        
    }
    render() {
        return (
            <View style={{ flex: 1 }} >
                <Text style={{alignSelf:'center',marginTop:30,color:'#353535', fontSize:18}} >Client name</Text>
                <Text style={{alignSelf:'center',marginTop:30,color:'#353535', fontSize:24, fontWeight:'bold'}} >Book New</Text>
                <DropDownPicker
                    items={this.state.categories}
                   placeholder='Category'
                   placeholderStyle={{color:'#2180ff'}}
                   arrowColor='#2180ff'
                    containerStyle={{ height: 60,marginTop:60, marginHorizontal:'10%'}}
                    style={{ backgroundColor: '#fafafa', }}
                    dropDownStyle={{ backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setCategory(item)}
                    labelStyle={{color:'#2180ff'}}
                />
                {
                    this.state.showSubTask?
                    <DropDownPicker
                    items={this.state.subTask}
                   placeholder='Sub Task'
                   placeholderStyle={{color:'#2180ff'}}
                   arrowColor='#2180ff'
                    containerStyle={{ height: 60,marginTop:30, marginHorizontal:'10%'}}
                    style={{ backgroundColor: '#fafafa', }}
                    dropDownStyle={{ backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setSubTask(item)}
                    labelStyle={{color:'#2180ff'}}
                />:
                null
                }
                {
                    this.state.showBroadtask?
                    <DropDownPicker
                    items={this.state.subTask}
                   placeholder='Broad Task'
                   placeholderStyle={{color:'#2180ff'}}
                   arrowColor='#2180ff'
                    containerStyle={{ height: 60,marginTop:30, marginHorizontal:'10%'}}
                    style={{ backgroundColor: '#fafafa', }}
                    dropDownStyle={{ backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setBroadTask(item)}
                    labelStyle={{color:'#2180ff'}}
                />:
                null
                }
                {
                    this.state.showArea?
                    <DropDownPicker
                    items={this.state.subTask}
                   placeholder='Area'
                   placeholderStyle={{color:'#2180ff'}}
                   arrowColor='#2180ff'
                    containerStyle={{ height: 60,marginTop:30, marginHorizontal:'10%'}}
                    style={{ backgroundColor: '#fafafa', }}
                    dropDownStyle={{ backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setArea(item)}
                    labelStyle={{color:'#2180ff'}}
                />:
                null
                }
                {
                    this.state.showButton?
                    <TouchableOpacity style={styles.approvedButton} onPress={() => this.props.navigation.goBack()} >
                        <Text style={{ fontSize: 20, color: '#ffffff', alignSelf: 'center' }}>Submit</Text>
                    </TouchableOpacity >
                    : null
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    approvedButton: {
        width: "60%",
        height: 55,
        backgroundColor: "#93D152",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        justifyContent: 'center',
        marginTop: 60,
        alignSelf: 'center',
    },

})
export default BookNewScreen