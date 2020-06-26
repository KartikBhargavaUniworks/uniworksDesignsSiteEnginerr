import React, { useState } from 'react';
import { Text, View , ProgressBarAndroid} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AccordionContentDesign from './AccordionContentDesign';

const AccordionDesign = ({ milestoneName, progressValue }) => {

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
    return (
        <View style={{ flex: 1 }} >
            <TouchableOpacity style={{ marginTop: '15%', marginHorizontal: 32 }} onPress={() => handleShowContent()} >
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ color: '#353535', fontSize: 30, fontWeight: 'bold' }} >{milestoneName}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <View style={{ alignSelf: 'center' }} >
                        <TouchableOpacity  >
                            <View  >
                                {data.show ?
                                    <MaterialIcons name='keyboard-arrow-down' size={24} />
                                    :
                                    <MaterialIcons name='keyboard-arrow-up' size={24} />
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <ProgressBarAndroid
          styleAttr="Horizontal"
          style={{ marginTop:'12%', color:'#2274f0' }}
          indeterminate={false}
          progress={progressValue}
        />
            </TouchableOpacity>
            <View>
                {
                    data.show?
                    <AccordionContentDesign mileStoneNames='Tile Playing' />
                    :
                    null
                }
            </View>
        </View>
    )
}

export default AccordionDesign;