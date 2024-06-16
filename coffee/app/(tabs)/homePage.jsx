import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "../../constants/Color";
import { img } from "../../constants/images";
import Ionic from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome6";
import { DataContent, dataBeans } from "../../constants/dataContent";
import { Link, router, usePathname } from "expo-router";
import Product from "../../components/Product";
import Header from "../../components/Header";
import ProductListing from "../../components/ProductListing";

const Page = () => {
  const [activeData, setActiveData] = useState(0);
  const data = ["All", "Cappuccino", "Espresso", "Americano", "Macchiato"];
  const handleSetActive = (index) => {
    setActiveData(index);
  };
  const [pathname, setPathname] = usePathname();
  const [query, setQuery] = useState("");
  const navigateToIndPage = (item) => {
    console.log(item);
    if (pathname.startsWith("/indPage")) {
      router.setParams({ item });
    } else {
      router.push(
        `/indPage/[query]?item=${encodeURIComponent(JSON.stringify(item))}`
      );
    }
  };

  const { width } = Dimensions.get("screen" || "window");
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataBeans}
        numColumns={width > 450 ? 2 : 1}
        key={(item, index) => index}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginRight: width < 450 ? 0 : 14,
              marginBottom: 20,
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            {/* PRODUCT LISTING */}
            <ProductListing
              item={item}
              width={width}
              navigateToIndPage={() => navigateToIndPage()}
            />
            {/* PRODUCT LISTING */}
          </View>
        )}
        ListHeaderComponent={() => (
          <View>
            {/* HEADER */}
            <Header text={"Welcome back, Hudson"} />
            <Text
              style={{
                marginTop: 30,
                color: Color.white,
                fontSize: 28,
                width: 200,
                lineHeight: 37,
                fontWeight: "600",
                marginBottom: 30,
              }}
            >
              Find the best coffee for you
            </Text>
            <View
              style={{
                backgroundColor: "#141921",
                flexDirection: "row",
                height: 60,
                gap: 10,
                justifyContent: "center",
                borderRadius: 15,
              }}
            >
              <Ionic
                name="search"
                size={30}
                style={{
                  alignSelf: "center",
                  marginLeft: 10,
                }}
                color={"#52555A"}
              />
              <TextInput
                style={{
                  flex: 1,
                  paddingHorizontal: 15,
                  color: Color.white,
                  fontSize: 17,
                  letterSpacing: 1.2,
                }}
                placeholder="Find your coffee..."
                placeholderTextColor={"#52555A"}
              />
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
              data={data}
              key={(item, index) => index}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    flex: 1,
                    gap: 20,
                    position: "relative",
                    height: 40,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      marginRight: 10,
                      color:
                        activeData === index ? Color.active : Color.unactive,
                    }}
                    onPress={() => handleSetActive(index)}
                  >
                    {item}
                  </Text>
                </View>
              )}
            />
            <Product
              DataContent={DataContent}
              Icon={Icon}
              navigateToIndPage={() => navigateToIndPage()}
            />

            <Text
              style={{
                fontSize: 25,
                color: Color.white,
                marginVertical: 20,
              }}
            >
              Coffee Beans
            </Text>
          </View>
        )}
      />
      <StatusBar barStyle={"light-content"} />
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 90,
  },
});
