import { View, Text, ScrollView, ImageBackground } from "react-native";
function Allcategroies(){
    return(
        <View style={{ width: '100%', alignItems: 'center', paddingBottom: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", width: "100%", paddingTop: "10%", paddingBottom: "10%" }}>
                        <Text style={{ paddingLeft: 5, color: "#ffff", fontSize: 24, fontWeight: '700', textDecorationStyle: "solid" }}>
                            ALL CATEGORIES
                        </Text>
                    </View>
                    <View style={{ height: 140, width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <ScrollView
                            horizontal
                            contentContainerStyle={{ alignItems: 'center' }}
                            showsHorizontalScrollIndicator={false}
                        >
                            {/* Category 1 */}
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://www.shutterstock.com/image-vector/illustration-batsman-playing-cricket-action-600nw-2469264547.jpg' }}
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 16, fontWeight: '800' }}>Cricket</Text>
                                </ImageBackground>
                            </View>

                            {/* Category 2 */}
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-hockey-icon-png-image_892007.jpg' }}
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 16, fontWeight: '800' }}>Hockey</Text>
                                </ImageBackground>
                            </View>

                            {/* Category 3 */}
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://www.shutterstock.com/image-vector/vector-illustration-silhouettes-basketball-player-600w-1877881808.jpg' }}
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 16, fontWeight: '800' }}>Basketball</Text>
                                </ImageBackground>
                            </View>
                            {/* Category 4 */}
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://www.shutterstock.com/image-vector/vector-illustration-silhouettes-basketball-player-600w-1877881808.jpg' }}
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 16, fontWeight: '800' }}>Football</Text>
                                </ImageBackground>
                            </View>
                            {/* Category 5 */}
                            <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                                <ImageBackground
                                    source={{ uri: 'https://www.shutterstock.com/image-vector/vector-illustration-silhouettes-basketball-player-600w-1877881808.jpg' }}
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 16, fontWeight: '800' }}>Tennis</Text>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                </View>
    )
}
export default Allcategroies