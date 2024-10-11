import {
    DrawerItem,
    createDrawerNavigator,
    DrawerContentScrollView,
  } from "@react-navigation/drawer";
  import React from "react";
  import { Drawer, Text } from "react-native-paper";
  import { MaterialIcons } from "@expo/vector-icons";
  import { View, StyleSheet, Image } from "react-native";
  import { DrawerActions } from "@react-navigation/native";
  import { withLayoutContext, useRouter, useNavigation } from "expo-router";
  import Profile from "./profile";

  const { Navigator } = createDrawerNavigator();
  const DrawerContainer = withLayoutContext(Navigator);
  
  export default () => (
    <DrawerContainer
      drawerContent={(props) => <DrawerContent {...props} />}
    />
  );
  
  function DrawerContent(props) {
    const { push } = useRouter();
    const navigation = useNavigation();
  
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <Drawer.Section>
            <DrawerItem
              label="Home"
              labelStyle={styles.labelStyle}
              icon={() => <Nav name="home" />}
              onPress={() => {
                push("home");
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
            />
            <DrawerItem
              label="Profile"
              labelStyle={styles.labelStyle}
              icon={() => <Nav name="person" />}
              onPress={() => {
                push("profile");
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
            />
            <DrawerItem
              label="Notifications"
              labelStyle={styles.labelStyle}
              icon={() => <Nav name="notifications" />}
              onPress={() => {
                push("Notification");
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
            />
            <DrawerItem
              label="Settings"
              labelStyle={styles.labelStyle}
              icon={() => <Nav name="lock" />}
              onPress={() => {
                push("SettingsScreen");
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
            />
            <DrawerItem
              label="Help"
              onPress={() => {
                push("Help");
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
              labelStyle={styles.labelStyle}
              icon={() => <Nav name="info" />}
            />
            <DrawerItem
              label="Invite Friends"
              labelStyle={styles.labelStyle}
              icon={() => <Nav name="supervisor-account" />}
              onPress={() => {
                push("InviteScreen");
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
            />
          </Drawer.Section>
        </DrawerContentScrollView>
      </View>
    );
  }
  
  const Nav = ({ name, isLogout }) => {
    return (
      <View style={isLogout ? styles.box1 : styles.box}>
        <MaterialIcons
          name={name}
          style={isLogout ? styles.icon1 : styles.icon}
        />
      </View>
    );
  };
  const CustomNav = ({ name, isLogout }) => {
    return (
      <View style={styles.box}>
        {/* <MaterialIcons
          name={name}
          style={isLogout ? styles.icon1 : styles.icon}
        /> */}
        <Text style={{ fontSize: 20, color: "#62E1EF" }}>🚀</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    cover: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      position: "absolute",
      width: "100%",
      height: 240,
      top: -65,
    },
    coverImg: {
      width: "100%",
      height: 240,
      top: -65,
      objectFit: "cover",
    },
    content: {
      bottom: 34,
      fontSize: 16,
      color: "white",
      paddingLeft: 20,
      fontWeight: "bold",
      position: "absolute",
      justifyContent: "flex-start",
    },
    name: {
      fontSize: 22,
      color: "white",
      marginBottom: 5,
      fontWeight: "bold",
    },
    email: {
      fontSize: 14,
      color: "white",
      fontWeight: "600",
    },
    box: {
      padding: 10,
      borderRadius: 100,
      backgroundColor: "#E9FBFD",
    },
    customBox: {
      padding: 10,
      borderRadius: 100,
      backgroundColor: "#E9FBFD",
    },
    box1: {
      padding: 10,
      borderRadius: 100,
      backgroundColor: "rgba(255, 24, 67, 0.1)",
    },
    icon: {
      color: "#68E3F2",
      fontSize: 20,
    },
    icon1: {
      color: "#FF1843",
      fontSize: 20,
    },
    labelStyle: {
      fontSize: 17,
      marginLeft: -15,
      fontWeight: "600",
    },
    view: {
      flex: 1,
      paddingTop: 20,
      alignItems: "center",
    },
    row: {
      width: "90%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    heading: {
      fontSize: 18,
      fontWeight: "600",
      marginVertical: 30,
    },
    but: {
      height: 45,
      width: "48%",
      borderWidth: 2,
      borderRadius: 100,
      borderColor: "#62E1EF",
      backgroundColor: "#62E1EF",
    },
    but1: {
      height: 45,
      width: "48%",
      borderWidth: 2,
      borderRadius: 100,
      borderColor: "#62E1EF",
    },
  });