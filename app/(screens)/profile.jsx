import React from "react";
import Header from "../../components/header";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={{ paddingBottom: 30 }}>
      <Header />
      <ScrollView>
        <View style={styles.contain}>
          <View style={styles.inner}>
            <Image
              style={styles.img}
              source={{
                uri: "https://i.pinimg.com/originals/a1/40/f8/a140f8fda81cd18107df40b215fe89b6.jpg",
              }}
            />
            <Text style={styles.text}>Neelesh Chaudhary</Text>

            <View style={{}}>
              <View style={styles.flexing}>
                <Ionicons name="location" size={25} color="grey" />
                <Text style={styles.text1}>Pakistan</Text>
              </View>

              <Text style={{ fontSize: 18, color: "grey" }}>
                ahmed@gmail.com
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.flexing1}>
          <Text style={styles.text1}>Recent Activity</Text>
          <Text style={styles.text1}>see all</Text>
        </View>

        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 10,
          }}
        >
          <Image
            style={styles.img1}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWoZeM85IBF5i3h2NlxiYJuy1FnupE2rWpQ&s",
            }}
          />
          <View style={styles.box}>
            <Text style={{ fontSize: 22, marginLeft: 10 }}>Chaudhary</Text>
            <Text style={{ fontSize: 14, marginTop: 4, paddingHorizontal: 10 }}>
              orem Ipsum is simply jjj dummy text
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 10,
          }}
        >
          <Image
            style={styles.img1}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWoZeM85IBF5i3h2NlxiYJuy1FnupE2rWpQ&s",
            }}
          />
          <View style={styles.box}>
            <Text style={{ fontSize: 22, marginLeft: 10 }}>Lorem</Text>
            <Text style={{ fontSize: 14, marginTop: 4, paddingHorizontal: 10 }}>
              orem Ipsum is simply jjj dummy text
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 10,
          }}
        >
          <Image
            style={styles.img1}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWoZeM85IBF5i3h2NlxiYJuy1FnupE2rWpQ&s",
            }}
          />
          <View style={styles.box}>
            <Text style={{ fontSize: 22, marginLeft: 10 }}>Lorem Ipsum</Text>
            <Text style={{ fontSize: 14, marginTop: 4, paddingHorizontal: 10 }}>
              orem Ipsum is simply jjj dummy text
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "50%",
    backgroundColor: "lightgrey",
    padding: 8,
  },
  flexing: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: "auto",
    paddingBottom: 10,
  },
  flexing1: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
  },
  contain: {
    height: 350,
    width: "90%",
    marginTop: 20,
    margin: "auto",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  img1: {
    height: 100,
    width: "50%",
  },
  inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 18,
  },
});