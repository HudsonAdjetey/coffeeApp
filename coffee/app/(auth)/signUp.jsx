import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "../../constants/Color";
import { icon, img } from "../../constants/images";
import { Link } from "expo-router";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 24,
          height: "100%",
        }}
      >
        {/* header view */}
        <View
          style={{
            marginTop: 50,
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: Color.active,
              letterSpacing: 1,
              fontWeight: "500",
            }}
          >
            {" "}
            Swift Shop
          </Text>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={img.Logo}
            resizeMode="contain"
          />
        </View>
        {/* header view */}
        <View
          style={{
            marginTop: 50,
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              color: Color.white,
              fontSize: 26,
              letterSpacing: 1,
              fontWeight: "400",
              marginBottom: 25,
            }}
          >
            Create an account
          </Text>
        </View>
        <View>
          <TextInput
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Color.lightGray,
              paddingVertical: 5,

              fontSize: 17,
              paddingHorizontal: 10,
              marginBottom: 18,
              color: Color.white,
            }}
            placeholder="Username"
            placeholderTextColor={Color.lightGray}
            autoFocus={false}
          />
          <TextInput
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Color.lightGray,
              paddingVertical: 5,

              fontSize: 17,
              paddingHorizontal: 10,

              marginBottom: 18,
              color: Color.white,
            }}
            placeholder="email@domain.com"
            placeholderTextColor={Color.lightGray}
            autoFocus={false}
            keyboardType="email-address"
          />
          <TextInput
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Color.lightGray,
              paddingVertical: 5,

              fontSize: 17,
              paddingHorizontal: 10,

              marginBottom: 18,
              color: Color.white,
            }}
            autoFocus={false}
            placeholder="Password"
            placeholderTextColor={Color.lightGray}
            secureTextEntry
          />
          {/* <Link href={"/"}> */}
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: Color.dark,
              paddingVertical: 13,

              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: Color.white,
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* </Link> */}
          <Link
            href={"/signIn"}
            style={{
              fontSize: 16,
              marginTop: 10,
              textAlign: "right",
              marginBottom: 14,
            }}
            replace
          >
            <Text
              style={{
                color: Color.lightGray,
                fontSize: 16,
              }}
            >
              Already have an account
            </Text>
          </Link>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              alignItems: "center",
              gap: 15,
            }}
          >
            <View
              style={{
                height: 2,
                backgroundColor: Color.lightGray,
                flex: 1,
              }}
            />
            <Text
              style={{
                color: Color.lightGray,
                fontSize: 16,
              }}
            >
              or continue with
            </Text>
            <View
              style={{
                height: 2,
                width: "100%",
                backgroundColor: Color.lightGray,

                flex: 1,
              }}
            />
          </View>

          {/* <Link asChild > */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Color.white,
              paddingVertical: 15,
              borderRadius: 10,

              marginTop: 20,
              gap: 15,
            }}
          >
            <Image
              source={icon.GoogleIcon}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: Color.dark,
              }}
            >
              Google
            </Text>
          </TouchableOpacity>
          {/* </Link> */}
          <View>
            <Link
              style={{
                marginTop: 19,
                color: Color.lightGray,
                fontSize: 16,
                lineHeight: 25,
              }}
              href={""}
            >
              <Text>By clicking continue, you agree to our </Text>{" "}
              <Text
                style={{
                  color: Color.white,
                }}
              >
                Terms of Service{" "}
              </Text>
              <Text>and</Text>{" "}
              <Text
                style={{
                  color: Color.white,
                }}
              >
                Privacy Policy
              </Text>
            </Link>
          </View>
        </View>
      </View>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.primary} />
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // setting a custom bg color
    backgroundColor: Color.primary,
  },
});
