import { View, Text, Image, TouchableOpacity, } from "react-native";
import { router } from "expo-router";


export default function Postdiv(){
    return(
        <View style={{ height: 150, width: "100%", flexDirection: "row", justifyContent: "space-around", paddingTop: "5%" }}>
                        {/* Post Add */}
                        <TouchableOpacity
                            onPress={() => {
                                console.log('Navigating to PostAdd');
                                router.push("/(screens)/postadd");
                            }}
                        >
                            <View style={{ flex: 1, alignItems: "center", borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5 }}>
                                <Image
                                    source={{ uri: 'https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-PNG-Images-HD.png' }}
                                    style={{ height: 80, width: "100%", resizeMode: "cover" }}
                                />
                                <Text style={{ color: "#ffffff", fontSize: 16 }}>POST ADD</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Profile */}
                        <View style={{ flex: 1, alignItems: "center", borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('Navigating to Profile');
                                    router.push("/(screens)/profile");
                                }}
                            >
                                <Image
                                    source={{ uri: 'https://i.pinimg.com/originals/a1/40/f8/a140f8fda81cd18107df40b215fe89b6.jpg' }}
                                    style={{ height: 80, width: "100%", resizeMode: "cover" }}
                                />
                                <Text style={{ color: "#ffffff", fontSize: 18 }}>PROFILE</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Settings */}
                        <View style={{ flex: 1, alignItems: "center", borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('Navigating to Settings');
                                }}
                            >
                                <Image
                                    source={{ uri: 'https://img.icons8.com/m_rounded/200/FFFFFF/settings.png' }}
                                    style={{ height: 80, width: "100%", resizeMode: "contain" }}
                                />
                                <Text style={{ color: "#ffffff", fontSize: 18 }}>SETTING</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
    )
}