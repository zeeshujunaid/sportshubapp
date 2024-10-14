import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React from "react";
import { Drawer, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { View, ImageBackground } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { withLayoutContext, useRouter, useNavigation } from "expo-router";

const { Navigator } = createDrawerNavigator();
const DrawerContainer = withLayoutContext(Navigator);

export default () => (
  <DrawerContainer
    screenOptions={{ headerShown: false }}
    drawerContent={(props) => <DrawerContent {...props} />}
  />
);

function DrawerContent(props) {
  const { push } = useRouter();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "30%",
          width: "100%",
          overflow: "hidden",
          borderBottomWidth: 2,
          borderColor: "#E0E0E0",
          borderRadius: 15,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}
      >
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/originals/a1/40/f8/a140f8fda81cd18107df40b215fe89b6.jpg",
          }}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            resizeMode: "cover",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "rgba(220, 20, 60, 0.6)",
              width: "100%",
              textAlign: "center",
              paddingVertical: 12,
            }}
          >
            Neelesh Chaudhary
          </Text>
        </ImageBackground>
      </View>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItem
            label="Home"
            labelStyle={{ fontSize: 17, fontWeight: "600", marginLeft: -10 }}
            icon={() => <Nav name="home" isLogout={false} />}
            onPress={() => {
              push("home");
              navigation.dispatch(DrawerActions.closeDrawer());
            }}
          />
          <DrawerItem
            label="Profile"
            labelStyle={{ fontSize: 17, fontWeight: "600", marginLeft: -10 }}
            icon={() => <Nav name="person" isLogout={false} />}
            onPress={() => {
              push("profile");
              navigation.dispatch(DrawerActions.closeDrawer());
            }}
          />
          <DrawerItem
            label="LOGOUT"
            labelStyle={{ fontSize: 17, fontWeight: "600", marginLeft: -10 }}
            icon={() => <Nav name="logout" isLogout={true} />}
            onPress={() => {
              push("login");
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
    <View
      style={{
        padding: 12,
        borderRadius: 100,
        backgroundColor: isLogout ? "rgba(220, 20, 60, 0.2)" : "rgba(220, 20, 60, 0.2)",
      }}
    >
      <MaterialIcons
        name={name}
        style={{
          fontSize: 26,
          color: "#D50000",
        }}
      />
    </View>
  );
};
