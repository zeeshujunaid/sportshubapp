import { router } from "expo-router";
import { Text, View, Image } from "react-native";
import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
//   useEffect(()=>{
//     checkUser()
// },[])

// const checkUser = async ()=>{
//     const userId = await AsyncStorage.getItem('userID')
//     if (userId !== null) {
//         router.push("/home")
// console.log("user found going home");
//     }else(
//        router.push("/login")
//     )
// }
// console.log(checkUser);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000", }}>
      <Image
        source={{ uri: 'https://blog.motionisland.com/wp-content/uploads/2022/03/Loading_1.gif' }}
        style={{ height: "50%", width: "100%", objectFit: "contain", }}
      />
    </View>
  );
}
