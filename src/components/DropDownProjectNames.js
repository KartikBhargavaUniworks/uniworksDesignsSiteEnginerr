import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const DropDownProjectNames = () => {

    const [data, setData] = useState({
        show: false
    })

    const handleShowContent = () => {
        setData(
            {
                show: !data.show
            }
        )
    }

    let projectNames = [
        {
            id:1,
            name: "Project1"
        },
        {
            id:2,
            name: "Project 2"
        }]

    return (
        <View>
            <TouchableOpacity style={{ marginTop: '15%', marginHorizontal: 32 }} onPress={() => handleShowContent()} >
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ color: '#353535', fontSize: 18, }} >Projects</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <TouchableOpacity  >
                        <View>
                            {data.show ?
                                <MaterialIcons name='keyboard-arrow-down' size={24} />
                                :
                                <MaterialIcons name='keyboard-arrow-up' size={24} />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            {data.show ?
                <View style={{ marginHorizontal: 32, marginTop: '5%' }} >
                    {
                        projectNames.map((prop, id) =>{
                            return(
                                <TouchableOpacity>
                                    <Text   >{prop.name} </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                :
                null}
        </View>
    )
}

export default DropDownProjectNames;