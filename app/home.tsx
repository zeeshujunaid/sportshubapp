import { View, Text } from "react-native";
import Drawer from "expo-router/drawer";
export default function Home() {
    return (
        <View style={{flex:1,backgroundColor: "#0d1117",flexDirection:"row",}}>
            <Drawer />
            <View style={{height:"100%",width:"100%",}}>
                <Text style={{color:"#FFFFFF",paddingTop:"100%",}}>home page new </Text>
            </View>
        </View>
    );
}
