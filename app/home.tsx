import { View, Text, Image, ScrollView,  } from "react-native";
import Header from "../components/header";
import Cricket from "./categroies card/cricket";
import Hockey from "./categroies card/hockey";
import Football from "./categroies card/football";
import Tennis from "./categroies card/tennis";
import Basketball from "./categroies card/basketball";
import Allcategroies from "./categroies card/Allcategroiescard";
export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#0d1117" }}>
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

                    {/* main 3 divs post add, profile, settings */}
                    <View style={{ height: 150, width: "100%", flexDirection: "row", justifyContent: "space-around", paddingTop: "5%" }}>
                        <View style={{ width: "29%", alignItems: "center", borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5 }}>
                            <Image
                                source={{ uri: 'https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-PNG-Images-HD.png' }}
                                style={{ height: "70%", width: "100%", resizeMode: "contain" }}
                            />
                            <Text style={{ color: "#ffffff", fontSize: 16 }}>POST ADD</Text>
                        </View>
                        <View style={{ width: "27%", alignItems: "center", borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5 }}>
                            <Image
                                source={{ uri: 'https://i.pinimg.com/originals/a1/40/f8/a140f8fda81cd18107df40b215fe89b6.jpg' }}
                                style={{ height: "80%", width: "100%", resizeMode: "cover" }}
                            />
                            <Text style={{ color: "#ffffff", fontSize: 18 }}>PROFILE</Text>
                        </View>
                        <View style={{ width: "27%", alignItems: "center", borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 10, backgroundColor: "#1E1E1E", margin: 5 }}>
                            <Image
                                source={{ uri: 'https://img.icons8.com/m_rounded/200/FFFFFF/settings.png' }}
                                style={{ height: "70%", width: "100%", resizeMode: "contain" }}
                            />
                            <Text style={{ color: "#ffffff", fontSize: 18 }}>SETTING</Text>
                        </View>
                    </View>
                </View>
                {/* first "ALL CATEGORIES" section */}
                <Allcategroies />
                <Cricket />
                <Football />
                <Basketball />
                <View style={{ height: 180, width: "100%", flexDirection: "row", justifyContent: "space-around", paddingTop: "5%" }}>
                    <Image source={{ uri: "https://img.freepik.com/free-vector/abstract-dark-sales-background_23-2148429942.jpg" }}
                        style={{ height: "100%", width: "100%", resizeMode: "cover", }}
                    />
                </View>
                <Hockey />
                <Tennis />
            </ScrollView>
        </View>
    );
}
