import { View, Text, Image, ScrollView, TouchableOpacity, } from "react-native";
import Header from "../components/header";
import Cricket from "./(homepagecategroies)/cricket";
import Hockey from "./(homepagecategroies)/hockey";
import Football from "./(homepagecategroies)/football";
import Tennis from "./(homepagecategroies)/tennis";
import Basketball from "./(homepagecategroies)/basketball";
import Allcategroies from "./(homepagecategroies)/Allcategroiescard";
import Postadd from "../components/maindiv"


export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#0d1117" }}>
            {/* header  */}
            <Header />
            {/* main container image */}
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ height: 230, width: "100%" }}>
                        <Image
                            source={{ uri: 'https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1699806826200-8C9W14DGJ7LROEAV27DI/Most+popular+sports+in+the+UK+%281%29.jpg?format=750w' }}
                            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                        />
                    </View>
                    {/* three main div */}
                    <Postadd />
                </View>
                {/* first "ALL CATEGORIES" section */}
                <Allcategroies />
                <Cricket />
                <Football />
                <Basketball />
                {/* add section  */}
                <View style={{ height: 180, width: "100%", flexDirection: "row", justifyContent: "space-around", paddingTop: "5%" }}>
                    <Image source={{ uri: "https://img.freepik.com/free-vector/abstract-dark-sales-background_23-2148429942.jpg" }}
                        style={{ height: "100%", width: "100%", resizeMode: "cover", }}
                    />
                </View>
                {/* add section  */}
                <Hockey />
                <Tennis />
            </ScrollView >
        </View >
    );
}
