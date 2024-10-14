import { router } from "expo-router";
import { Text, View, Image, TouchableOpacity, Alert, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import Index from "../../app/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig/firebaseconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSignin = async () => {
        setIsLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const uid = response.user.uid;
            
            // Save the user ID in AsyncStorage
            await AsyncStorage.setItem('userID', uid); 
            
            Alert.alert("Login successful");
            router.push("/home");
        } catch (error) {
            Alert.alert("Error",);
        } finally {
            setIsLoading(false);
        }
  
        // Clear input fields
        setEmail('');
        setPassword('');
    };
  
    if (isLoading) {<Index/>}

    const windowHeight = Dimensions.get('window').height;
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#0d1117",
            height: windowHeight,
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
                        height: 50, 
                        backgroundColor: "#FFFFFF",
                        width: '90%',
                        padding: 10,
                        borderColor: "#B22222",
                        borderWidth: 1, 
                        borderRadius: 8, 
                    }}
                    placeholder="Enter your email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <TextInput
                    style={{
                        height: 50, 
                        backgroundColor: "#FFFFFF",
                        width: '90%',
                        padding: 10,
                        borderColor: "#B22222",
                        borderWidth: 1, 
                        borderRadius: 8,
                    }}
                    placeholder="Enter your password"
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                    value={password}
                />

                <View style={{ height: "50%", width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={{
                            height: 50, 
                            width: "70%",
                            backgroundColor: "rgba(220, 20, 60, 0.6)",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        onPress={handleSignin}
                    >
                        <Text style={{ color: "#fff" }}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: "center", height: "30%", width: "100%", paddingTop: 3, justifyContent: "center" }}>
                        <Text style={{ color: "#ffffff", }}>Don't have an account?
                            <TouchableOpacity onPress={() => router.push("/signup")}>
                                <Text style={{ color: "rgba(220, 20, 60, 0.6)", paddingTop: "5%",fontSize:18, }}> signup</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
