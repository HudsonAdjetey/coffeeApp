import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "../../constants/Color";

const CartPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          {/* Image */}
          {/* <Image source={}  /> */}
        </View>
        <View>
          <Text>Cappuccino</Text>
          <Text>with steamed milk</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
});
