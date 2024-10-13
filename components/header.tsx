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
      <Text style={styles.title}>SPORTS HUB</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(178, 34, 34, 1)",
  },
  title: {
    fontSize: 20,
    marginLeft: "28%",
    color: "white",
    fontWeight: "900",
  },
});