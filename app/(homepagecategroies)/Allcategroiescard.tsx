import { router } from "expo-router";
import { View, Text, ScrollView, ImageBackground } from "react-native";
function Allcategroies() {
    return (
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
                            source={{ uri: 'https://img.freepik.com/free-vector/cricket-banner-batsman-championship-particle-background-use-cover-poster-template-brochure-decorated-flyer-banner_460848-7122.jpg' }}
                            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 16, fontWeight: '800' }}
                            onPress={() => {
                                router.push('/(categroies card)/cricket')
                            }}
                            >Cricket</Text>
                        </ImageBackground>
                    </View>

                    {/* Category 2 */}
                    <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                        <ImageBackground
                            source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/background/20230628/pngtree-white-background-3d-render-of-a-male-hockey-player-striking-the-image_3687658.jpg' }}
                            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 16, fontWeight: '800' }}>Hockey</Text>
                        </ImageBackground>
                    </View>

                    {/* Category 3 */}
                    <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                        <ImageBackground
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1Nnf63IErt2T7nKiycoFQw4eD2h6VSuwaw&s' }}
                            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 16, fontWeight: '800' }}>Basketball</Text>
                        </ImageBackground>
                    </View>
                    {/* Category 4 */}
                    <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                        <ImageBackground
                            source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-football-3d-rendering-soccer-ball-on-black-background-image_3675781.jpg' }}
                            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ textAlign: 'center', color: 'rgba(220, 20, 60, 0.6)', fontSize: 16, fontWeight: '800' }}>Football</Text>
                        </ImageBackground>
                    </View>
                    {/* Category 5 */}
                    <View style={{ width: 90, height: 90, borderRadius: 30, overflow: 'hidden', marginHorizontal: 10 }}>
                        <ImageBackground
                            source={{ uri: 'https://www.shutterstock.com/shutterstock/videos/3416348099/thumb/5.jpg?ip=x480' }}
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