import { View, Text, Image, ScrollView, } from "react-native";
function Basketball() {
    return (
        < View style={{ width: '100%', alignItems: 'center', paddingBottom: 30, }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingTop: "10%", paddingBottom: "10%", }}>
                <Text style={{ paddingLeft: 29, color: "#ffff", fontSize: 24, fontWeight: '700', textDecorationStyle: "solid" }}>
                    BASKETBALL
                </Text>
                <Text style={{ paddingRight: 10, color: "#ffff", fontSize: 18, fontWeight: '500', textDecorationStyle: "solid" }}>
                    See more
                </Text>
            </View>
            <View style={{ width: '100%', padding: 10 }}>
                <ScrollView
                    horizontal
                    contentContainerStyle={{ alignItems: 'center' }}
                    showsHorizontalScrollIndicator={false}
                >
                    {/* Main category card */}
                    <View style={{ width: 280, height: 150, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10, flexDirection: "row", backgroundColor: "rgba(220, 20, 60, 0.6)", }}>
                        <View style={{ flexDirection: "column", width: "50%", backgroundColor: "rgba(220, 20, 60, 0.6)", height: "100%" }}>
                            <View style={{ height: "50%", width: "100%", backgroundColor: "rgba(220, 20, 60, 0.6)", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "800" }}>MRF BAT</Text>
                                <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "500" }}>new bat not used sign by vk new special</Text>
                            </View>
                            <View style={{ height: "50%", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "900", height: "50%" }}>$900</Text>
                                <Text style={{
                                    textAlign: "center", fontSize: 18, fontWeight: "900", height: "50%",
                                    borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 8,
                                    backgroundColor: "#ffffff",
                                }}>BUY NOW</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", width: "50%", backgroundColor: "#3323af", height: "100%" }}>
                            <Image
                                source={{ uri: "https://m.media-amazon.com/images/I/61VD6F3CiYL._AC_UF894,1000_QL80_.jpg" }}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </View>
                    </View>

                    {/* Repeat similar structure for more cards */}
                    <View style={{ width: 280, height: 150, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10, flexDirection: "row", backgroundColor: "rgba(220, 20, 60, 0.6)", }}>
                        <View style={{ flexDirection: "column", width: "50%", backgroundColor: "rgba(220, 20, 60, 0.6)", height: "100%" }}>
                            <View style={{ height: "50%", width: "100%", backgroundColor: "rgba(220, 20, 60, 0.6)", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "800" }}>MRF BAT</Text>
                                <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "500" }}>new bat not used sign by vk new special</Text>
                            </View>
                            <View style={{ height: "50%", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "900", height: "50%" }}>$900</Text>
                                <Text style={{
                                    textAlign: "center", fontSize: 18, fontWeight: "900", height: "50%",
                                    borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 8,
                                    backgroundColor: "#ffffff",
                                }}>BUY NOW</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", width: "50%", backgroundColor: "#3323af", height: "100%" }}>
                            <Image
                                source={{ uri: "https://m.media-amazon.com/images/I/61VD6F3CiYL._AC_UF894,1000_QL80_.jpg" }}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </View>
                    </View>

                    {/* third card  */}
                    <View style={{ width: 280, height: 150, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10, flexDirection: "row", backgroundColor: "rgba(220, 20, 60, 0.6)", }}>
                        <View style={{ flexDirection: "column", width: "50%", backgroundColor: "rgba(220, 20, 60, 0.6)", height: "100%" }}>
                            <View style={{ height: "50%", width: "100%", backgroundColor: "rgba(220, 20, 60, 0.6)", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "800" }}>MRF BAT</Text>
                                <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "500" }}>new bat not used sign by vk new special</Text>
                            </View>
                            <View style={{ height: "50%", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "900", height: "50%" }}>$900</Text>
                                <Text style={{
                                    textAlign: "center", fontSize: 18, fontWeight: "900", height: "50%",
                                    borderColor: "#B22222", borderWidth: 1, borderRadius: 8, padding: 8,
                                    backgroundColor: "#ffffff",
                                }}>BUY NOW</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", width: "50%", backgroundColor: "#3323af", height: "100%" }}>
                            <Image
                                source={{ uri: "https://m.media-amazon.com/images/I/61VD6F3CiYL._AC_UF894,1000_QL80_.jpg" }}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </View>
                    </View>

                </ScrollView>
            </View>
        </View >
    )
}
export default Basketball