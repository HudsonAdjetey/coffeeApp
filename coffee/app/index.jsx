import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { img } from "../constants/images";
import Color from "../constants/Color";
import { Link, router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginTop: 190,
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            width: 290,
            height: 290,
          }}
          source={img.CupHolder}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 34,
            textAlign: "center",
            textTransform: "capitalize",
            fontWeight: "400",
            color: Color.white,
            letterSpacing: 1,
          }}
        >
          great ideas come from great coffee
        </Text>
        <Text
          style={{
            color: Color.lightGray,
            fontSize: 18,
            marginTop: 15,
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          itaque quam praesentium quos quibusdam, aspernatur
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 24,
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        {/* <Link href={"/(auth)/signIn"} asChild> */}
        <TouchableOpacity
          onPress={() => router.push("/signIn")}
          style={{
            marginBottom: 30,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 16,
            backgroundColor: Color.secondary,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: Color.white,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        {/* </Link> */}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // setting a custom bg color
    backgroundColor: Color.choco,
  },
});
