import Header from "../../components/header";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

export default function Postadd() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            height: "100%",
            backgroundColor: "#0d1117", 
        }}>
            <Header />
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', 
                width: '100%',
            }}>
                <View style={{
                    width: "90%", 
                    gap: 34,
                    alignItems: "center",
                }}>
                    <TextInput
                        style={{
                            height: 50,
                            backgroundColor: "#FFFFFF",
                            width: '100%',
                            padding: 10,
                            borderWidth: 2,
                            borderRadius: 5,
                            borderColor: "#B22222",
                        }}
                        placeholder="Enter product name"
                    />
                    <TextInput
                        style={{
                            height: 50,
                            backgroundColor: "#FFFFFF",
                            width: '100%',
                            borderWidth: 2,
                            padding: 10,
                            borderRadius: 5,
                            borderColor: "#B22222",
                        }}
                        placeholder="Enter product price"
                    />
                    <TextInput
                        style={{
                            height: 50,
                            backgroundColor: "#FFFFFF",
                            width: '100%',
                            padding: 20,
                            borderWidth: 2,
                            borderRadius: 5,
                            borderColor: "#B22222",
                        }}
                        placeholder="Enter Description"
                    />
                    
                    <TouchableOpacity
                        style={{
                            height: 50,
                            width: "70%",
                            paddingTop: 4,
                            borderRadius: 5,
                            borderWidth: 2,
                            borderColor: "#B22222",
                            backgroundColor: "rgba(220, 20, 60, 0.6)",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{ color: 'white' }}>POSTADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
