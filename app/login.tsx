import { router } from "expo-router";
import { Text, View, Image, TouchableOpacity, Alert, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";

export default function Login() {
    const windowHeight = Dimensions.get('window').height; // Get window height
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#0d1117",
            height: windowHeight, // Use calculated height
        }}>
            <View style={{ height: windowHeight * 0.25, width: "100%", alignItems: "center" }}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/originals/9c/83/88/9c838839fcf2197a8d8007b27ba713a3.gif' }}
                    style={{ height: "100%", width: "100%", resizeMode: "contain" }}
                />
            </View>

            <View style={{ height: windowHeight * 0.40, width: "100%", gap: 15, alignItems: "center" }}>
                <TextInput
                    style={{
                        height: 50, // Fixed height for input
                        borderColor: "#008080",
                        backgroundColor: "#FFFFFF",
                        borderWidth: 2,
                        width: '90%',
                        padding: 10,
                        borderRadius: 5,
                    }}
                    placeholder="Enter your email"
                />

                <TextInput
                    style={{
                        height: 50, // Fixed height for input
                        borderColor: "#008080",
                        backgroundColor: "#FFFFFF",
                        borderWidth: 2,
                        width: '90%',
                        padding: 10,
                        borderRadius: 5,
                    }}
                    placeholder="Enter your password"
                    secureTextEntry
                />

                <View style={{ height: "50%", width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={{
                            height: 50, // Fixed height
                            width: "70%",
                            borderRadius: 5,
                            borderWidth: 2,
                            borderColor: "#008080",
                            backgroundColor: "#008080",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        onPress={() => router.push("/home")}
                    >
                        <Text style={{ color: "#fff" }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
