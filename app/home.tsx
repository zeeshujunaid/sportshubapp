import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import Header from "../components/header";

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#0d1117" }}>
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ height: 230, width: "100%" }}>
                        {/* <Image
                            source={{ uri: 'https://www.mindinventory.com/blog/wp-content/uploads/2022/03/sports-app-ideas.webp' }}
                            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                        /> */}
                        <Image
                            source={{ uri: 'https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1699806826200-8C9W14DGJ7LROEAV27DI/Most+popular+sports+in+the+UK+%281%29.jpg?format=750w' }}
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
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", width: "100%", paddingTop: "10%", paddingBottom: "10%", }}>
                        <Text style={{ paddingLeft: 5, color: "#ffff", fontSize: 24, fontWeight: '700',textDecorationStyle:"solid", }}>ALL CATEGORIES</Text>
                    </View>
                    <View style={{ height: 140, width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <ScrollView
                            horizontal
                            contentContainerStyle={{ alignItems: 'center' }}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://www.shutterstock.com/image-vector/illustration-batsman-playing-cricket-action-600nw-2469264547.jpg' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 20, fontWeight: '800' }}>Cricket</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://www.merchantoftennis.com/cdn/shop/files/f94248_grande.jpg?v=1715879614' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)',fontSize: 20, fontWeight: '800' }}>Tennis</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-hockey-icon-png-image_892007.jpg' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)',fontSize: 20, fontWeight: '800' }}>Hockey</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://png.pngtree.com/png-vector/20240912/ourmid/pngtree-a-black-and-white-new-football-png-image_13790002.png' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)',fontSize: 20, fontWeight: '800' }}>Football</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-basketball-icon-png-image_4221858.jpg' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)',fontSize: 16, fontWeight: '800' }}>Basketball</Text>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ height: 140, width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <ScrollView
                            horizontal
                            contentContainerStyle={{ alignItems: 'center' }}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://www.shutterstock.com/image-vector/illustration-batsman-playing-cricket-action-600nw-2469264547.jpg' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 20, fontWeight: '800' }}>Cricket</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://www.merchantoftennis.com/cdn/shop/files/f94248_grande.jpg?v=1715879614' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)',fontSize: 20, fontWeight: '800' }}>Tennis</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-hockey-icon-png-image_892007.jpg' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)',fontSize: 20, fontWeight: '800' }}>Hockey</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://png.pngtree.com/png-vector/20240912/ourmid/pngtree-a-black-and-white-new-football-png-image_13790002.png' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)',fontSize: 20, fontWeight: '800' }}>Football</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-basketball-icon-png-image_4221858.jpg' }} // Replace with your image URL
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)',fontSize: 16, fontWeight: '800' }}>Basketball</Text>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                    
                </View>
            </ScrollView>
        </View>
    );
}
