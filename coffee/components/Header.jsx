import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { img } from "../constants/images";
import Color from "../constants/Color";

const Header = ({ text }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: Color.lightGray,
            fontStyle: "italic",
            fontWeight: "600",
          }}
        >
          {text}
        </Text>
        <Image
          source={img.Profile}
          style={{
            width: 50,
            height: 50,
          }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
