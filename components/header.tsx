import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title?: string;
}

export default function Header(props: HeaderProps) {
  const navigation:any = useNavigation()

  return (
    <View style={styles.container}>
      <Ionicons name="menu" size={25} color="white" onPress={()=> navigation.toggleDrawer()} />
      <Text style={styles.title}>{props.title || "Home"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 70,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "tomato",
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    color: "white",
    fontWeight: "700",
  },
});