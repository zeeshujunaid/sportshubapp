import { View, Text, Image, ScrollView } from "react-native";
import Drawer from "expo-router/drawer";

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#0d1117" }}>
            <Drawer />
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ height: 220, width: "100%" }}>
                        <Image
                            source={{ uri: 'https://i.makeagif.com/media/3-08-2018/A7eg0M.gif' }}
                            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                        />
                    </View>
                    <View style={{ height: 150, width: "100%", flexDirection: "row", justifyContent: "space-around", paddingTop: "10%" }}>
                        <View style={{ width: "27%", alignItems: "center", borderColor: "#4CAF50", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5, flexDirection: "column" }}>
                            <Image
                                source={{ uri: 'https://i.makeagif.com/media/3-08-2018/A7eg0M.gif' }}
                                style={{ height: "70%", width: "100%", resizeMode: "cover" }}
                            />
                            <Text style={{ color: "#ffffff", fontSize: 18 }}>POST ADD</Text>
                        </View>
                        <View style={{ width: "27%", alignItems: "center", borderColor: "#4CAF50", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5, flexDirection: "column" }}>
                            <Image
                                source={{ uri: 'https://i.makeagif.com/media/3-08-2018/A7eg0M.gif' }}
                                style={{ height: "70%", width: "100%", resizeMode: "cover" }}
                            />
                            <Text style={{ color: "#ffffff", fontSize: 18 }}>PROFILE</Text>
                        </View>
                        <View style={{ width: "27%", alignItems: "center", borderColor: "#4CAF50", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5, flexDirection: "column" }}>
                            <Image
                                source={{ uri: 'https://i.makeagif.com/media/3-08-2018/A7eg0M.gif' }}
                                style={{ height: "70%", width: "100%", resizeMode: "cover" }}
                            />
                            <Text style={{ color: "#ffffff", fontSize: 18 }}>SETTING</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
