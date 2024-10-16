import React from "react";
import Header from "../../components/header";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, ScrollView, Text, View, TouchableOpacity, Alert } from "react-native";
import { auth } from "../../firebaseconfig/firebaseconfig";
import { signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router"; 
import { useState } from "react";
import Index from "../index"
const Profile = () => {

  const [isLoading, setIsLoading] = useState(false);
  

  const router = useRouter(); 

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      const currentUser = auth.currentUser;
      if (currentUser) {
        await currentUser.delete(); 
        await AsyncStorage.removeItem('userID'); 
        Alert.alert("Account deleted successfully");
        router.push("/signup"); 
        setIsLoading(false)
      } else {
        Alert.alert("No user is currently signed in.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  if (isLoading) {
    return <Index />;
}

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <View style={{
          height: 550,
          width: "90%",
          marginTop: 20,
          margin: "auto",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
        }}>
          <View style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
          }}>
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
              }}
              source={{
                uri: "https://i.pinimg.com/originals/a1/40/f8/a140f8fda81cd18107df40b215fe89b6.jpg",
              }}
            />
            <Text style={{
              fontSize: 22,
              fontWeight: "bold",
            }}>Neelesh Chaudhary</Text>

            <View>
              <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                margin: "auto",
                paddingBottom: 10,
              }}>
                <Ionicons name="location" size={25} color="grey" />
                <Text style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}>Pakistan</Text>
              </View>

              <Text style={{ fontSize: 18, color: "grey" }}>
                ahmed@gmail.com
              </Text>
            </View>

            <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20 }}>
              <Image
                source={{ uri: 'https://t3.ftcdn.net/jpg/06/77/45/84/360_F_677458418_wMZuxWgJntonwA8bgw6JQjhhMwbFUzsV.jpg' }}
                style={{ height: 100, width: 200, resizeMode: 'cover' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
