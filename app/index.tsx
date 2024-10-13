import { router } from "expo-router";
import { Text, View,Image } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#0d1117", }}>
            <Image
                source={{ uri: 'https://blog.motionisland.com/wp-content/uploads/2022/03/Loading_1.gif' }}
                style={{ height: "50%", width: "100%", objectFit: "contain", }}
            />
            <Text style={{fontSize: 24,  color:"black",}} onPress={()=>router.push("/signup")}>loading...</Text>
        </View>
  );
}
