import { router } from "expo-router";
import { Text, View,Image } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"white", }}>
            <Image
                source={{ uri: 'https://i.gifer.com/7Ygv.gif' }}
                style={{ height: "50%", width: "100%", objectFit: "contain", }}
            />
            <Text style={{fontSize: 24,  color:"black",}} onPress={()=>router.push("/signup")}>loading...</Text>
        </View>
  );
}
