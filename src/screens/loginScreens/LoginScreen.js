import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import FeatherIcon from "react-native-vector-icons/Feather";

function LoginScreen({ navigation }) {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    phoneNumber: '',
    checkPhoneNumber: false
  })

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  return (
      <View style={styles.mainContainer} >
        <View style={styles.signInRow}>
         <Text style={{color:'#353535', fontSize:36}} >Executive Login</Text>
        </View>
        <View style={styles.containerRecatnglePhone}>
          <TextInput style={styles.rect3}
            placeholder="9839xxxxxx"
          />
        </View>
        <View style={styles.containerRecatnglePassword}>
          <View style={styles.rect3} >
            <TextInput style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => handlePasswordChange(val)}
              placeholder="Password"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ?
                <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                />
                :
                <Feather
                  name="eye"
                  color="grey"
                  size={20}
                />
              }
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end', marginRight: '15%', top: 10 }} >
          <TouchableOpacity onPress={()=>navigation.navigate('New Password')}  >
            <Text style={{ color: '#5356C1' }} >Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} >
            <View >
              <View style={styles.icon1Stack}>
                <FeatherIcon name="arrow-right" style={styles.icon1}></FeatherIcon>
                <View style={styles.rect4}>
                  <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height:'100%'
  },
  containerRecatnglePassword: {
    marginTop: 40,
    alignItems: 'center',
  },
  containerRecatnglePhone: {
    marginTop: '20%',
    alignItems: 'center'
  },
  signIn: {
    color: "#121212",
    fontSize: 36,
    height: 50,
    width: 147,
    opacity: 0.5
  },
  signInFiller: {
    flex: 1,
    flexDirection: "row"
  },
  logIn: {
    color: "#121212",
    fontSize: 36,
    height: 50,
    width: 124,

  },
  signInRow: {
    height: 40,
    marginTop: 72,
    marginLeft: 33,
    marginRight: 27,
    alignItems:'center'
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
    paddingStart: 20

  },
  complete: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    alignItems: 'center',
    top:'35%'
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '80%'
  },
  eyeIcon: {
    marginTop: 20,
  },
  icon1: {
    top: 8,
    left: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
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
  }
});

export default LoginScreen;
