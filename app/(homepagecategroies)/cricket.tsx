import { useRouter } from 'expo-router';
import { View, Text, Image, ScrollView, TouchableOpacity, } from "react-native";
function Cricket() {
    const router = useRouter();
    return (
        <View style={{ width: '100%', alignItems: 'center', paddingBottom: 30,backgroundColor:"#0d1117" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingTop: "10%", paddingBottom: "10%", }}>
                <Text style={{ paddingLeft: 29, color: "#ffff", fontSize: 24, fontWeight: '700', textDecorationStyle: "solid" }}>
                    CRICKET
                </Text>
                <TouchableOpacity onPress={() => router.push("../mainpagecategroies/cricket")}>
                <Text style={{ paddingRight: 10, color: "#ffff", fontSize: 18, fontWeight: '500', textDecorationStyle: "solid" }}>
                    See more
                </Text>
                </TouchableOpacity>
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
                                {/* <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "500" }}>new bat not used sign by vk new special</Text> */}
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
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoKi5QP20Z7kWLxlTzgqktJPT_P_ZK8h3WA&s" }}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </View>
                    </View>

                    {/* Repeat similar structure for more cards */}
                    <View style={{ width: 280, height: 150, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10, flexDirection: "row", backgroundColor: "rgba(220, 20, 60, 0.6)", }}>
                        <View style={{ flexDirection: "column", width: "50%", backgroundColor: "rgba(220, 20, 60, 0.6)", height: "100%" }}>
                            <View style={{ height: "50%", width: "100%", backgroundColor: "rgba(220, 20, 60, 0.6)", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "800" }}>GRAY NICOLAS</Text>
                                {/* <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "500" }}>new bat not used sign by vk new special</Text> */}
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
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6UUU-TZw2k5861_UFctjz2orTQUr0gxnrID8Jyc8YL6WhwACOi1NfTjgXvtxMU3KpjQ&usqp=CAU" }}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </View>
                    </View>

                    {/* third card  */}
                    <View style={{ width: 280, height: 150, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10, flexDirection: "row", backgroundColor: "rgba(220, 20, 60, 0.6)", }}>
                        <View style={{ flexDirection: "column", width: "50%", backgroundColor: "rgba(220, 20, 60, 0.6)", height: "100%" }}>
                            <View style={{ height: "50%", width: "100%", backgroundColor: "rgba(220, 20, 60, 0.6)", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "800" }}>DELTA GLOVES</Text>
                                {/* <Text style={{ textAlign: "center", fontSize: 13, fontWeight: "500" }}>new bat not used sign by vk new special</Text> */}
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
                                source={{ uri: "https://deltacricket.com/wp-content/uploads/2021/12/gloves-design-570x760@2x.jpg" }}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </View>
                    </View>

                </ScrollView>
            </View>
        </View >
    )
}
export default Cricket