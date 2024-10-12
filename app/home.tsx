import { View, Text, Image, ScrollView } from "react-native";
import Header from "../components/header";

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#0d1117" }}>
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ height: 230, width: "100%" }}>
                        <Image
                            source={{ uri: 'https://i.makeagif.com/media/3-08-2018/A7eg0M.gif' }}
                            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                        />
                    </View>
                    <View style={{ height: 150, width: "100%", flexDirection: "row", justifyContent: "space-around", paddingTop: "5%" }}>
                        <View style={{ width: "29%", alignItems: "center", borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5, flexDirection: "column" }}>
                            <Image
                                source={{ uri: 'https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-PNG-Images-HD.png' }}
                                style={{ height: "70%", width: "100%", resizeMode: "contain" }}
                            />
                            <Text style={{ color: "#ffffff", fontSize: 16 }}>POST ADD</Text>
                        </View>
                        <View style={{ width: "27%", alignItems: "center", borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5, flexDirection: "column" }}>
                            <Image
                                source={{ uri: 'https://i.pinimg.com/originals/a1/40/f8/a140f8fda81cd18107df40b215fe89b6.jpg' }}
                                style={{ height: "80%", width: "100%", resizeMode: "cover" }}
                            />
                            <Text style={{ color: "#ffffff", fontSize: 18 }}>PROFILE</Text>
                        </View>
                        <View style={{ width: "27%", alignItems: "center", borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5, flexDirection: "column" }}>
                            <Image
                                source={{ uri: 'https://img.icons8.com/m_rounded/200/FFFFFF/settings.png' }}
                                style={{ height: "70%", width: "100%", resizeMode: "contain" }}
                            />
                            <Text style={{ color: "#ffffff", fontSize: 18 }}>SETTING</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
