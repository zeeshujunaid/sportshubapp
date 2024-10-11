import { router } from "expo-router";
import { Text, View, Image, TouchableOpacity, Alert,  } from "react-native";
import { TextInput } from "react-native-paper";

export default function Login() {
    return(
    <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // paddingTop:"15%",
        alignItems: 'center',
        backgroundColor: "#0d1117",
        height: "100%",
      }}>
        <View style={{ height: "25%", width: "100%", alignItems: "center", }}>
          <Image
            source={{ uri: 'https://i.pinimg.com/originals/9c/83/88/9c838839fcf2197a8d8007b27ba713a3.gif' }} // Replace with your image URL
            style={{ height: "100%", width: "100%", objectFit: "contain", }}
          />
        </View>
        <View style={{ height: "40%", width: "100%", gap: 15, alignItems: "center", }}>
          <TextInput
            style={{
              height: "15%",
              borderColor:"#008080",
              backgroundColor: "#FFFFFF",
              borderWidth: 2,
              width: '90%',
              padding: 10,
              borderRadius: 5,
            }}
            // onChangeText={text => setEmail(text)}
            placeholder="enter your email"
            // value={email} 
          />
  
          <TextInput
            style={{
              height: "15%",
              borderColor:"#008080",
              backgroundColor: "#FFFFFF",
              borderWidth: 2,
              width: '90%',
              padding: 10,
              borderRadius: 5,
            }}
            // onChangeText={text => setPassword(text)}
            placeholder="enter your password"
            secureTextEntry 
            // value={password} 
          />
          <View style={{ height: "50%", width: "100%", alignItems: "center", justifyContent: "center", }}>
            <TouchableOpacity style={{ height: "50%", width: "70%", borderRadius: 5, borderWidth: 2, borderColor: "#008080", backgroundColor: "#008080", alignItems: "center", justifyContent: "center", }}
              onPress={()=>router.push("/home")}
            >
              <Text>
                LOGIN
              </Text>
            </TouchableOpacity>
            {/* <View style={{ height: "30%", width: "100", paddingTop: "5%",}}>
              <Text style={{color:"#333333",}}>Dont have an account ? <TouchableOpacity onPress={() => router.push("/signup")}><Text style={{ color: "blue", }}>signup</Text></TouchableOpacity></Text>
            </View> */}
          </View>
        </View>
      </View>
  
    )
}