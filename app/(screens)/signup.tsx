import { router } from "expo-router";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import Index from "../../app/index";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebaseconfig/firebaseconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithGoogle } from '../../firebaseconfig/firebaseconfig';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                router.push("/home");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSignup = async () => {
        setIsLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const uid = response.user.uid;

            await AsyncStorage.setItem('userID', uid);
            const userData = { name, email, city, uid };
            await setDoc(doc(db, 'users', uid), userData);

            Alert.alert("Signup successful");
            router.push("/home");
        } catch (error) {
            Alert.alert("Something went wrong");
        } finally {
            setIsLoading(false);
        }

        setName('');
        setCity('');
        setEmail('');
        setPassword('');
    };

    if (isLoading) {
        return <Index />;
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            paddingTop: "20%",
            alignItems: 'center',
            backgroundColor: "#0d1117",
            height: "100%",
        }}>
            <View style={{ height: "25%", width: "100%", alignItems: "center" }}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/originals/9e/c0/02/9ec0026c5a03de6cf7d2bdd91a1b305d.gif' }}
                    style={{ height: "100%", width: "100%", resizeMode: 'contain' }}
                />
            </View>
            <View style={{ height: "40%", width: "100%", gap: 14, alignItems: "center" }}>
                <TextInput
                    style={{
                        height: 50,
                        backgroundColor: "#FFFFFF",
                        width: '90%',
                        padding: 10,
                        borderWidth: 2,
                        borderRadius: 5,
                        borderColor: "#B22222",
                    }}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />
                <TextInput
                    style={{
                        height: 50,
                        backgroundColor: "#FFFFFF",
                        width: '90%',
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 5,
                        borderColor: "#B22222",
                    }}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                />
                <TextInput
                    style={{
                        height: 50,
                        backgroundColor: "#FFFFFF",
                        width: '90%',
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 5,
                        borderColor: "#B22222",
                    }}
                    value={city}
                    onChangeText={setCity}
                    placeholder="Enter your city"
                />
                <TextInput
                    style={{
                        height: 50,
                        backgroundColor: "#FFFFFF",
                        width: '90%',
                        padding: 10,
                        borderWidth: 2,
                        borderRadius: 5,
                        borderColor: "#B22222",
                    }}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                />
                <View style={{ height: "60%", paddingTop: "5%", width: "100%", alignItems: "center", justifyContent: "center" }}>
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
                        onPress={handleSignup}
                    >
                        <Text style={{ color: 'white' }}>SIGNUP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleGoogleSignIn} style={{ marginTop: 20 }}>
                        <Image
                            source={{ uri: 'https://i.imgur.com/yczPzHD.png' }}
                            style={{ height: 100, width: 200, resizeMode: 'cover' }}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: "center", height: "30%", width: "100%", paddingTop: 3, justifyContent: "center" }}>
                        <Text style={{ color: "#ffffff" }}>Already have an account?
                            <TouchableOpacity onPress={() => router.push("/login")}>
                                <Text style={{ color: "rgba(220, 20, 60, 0.6)", paddingTop: "5%", fontSize: 18 }}> Login</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
