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
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(38, 43, 51, 0.63)",
                  flex: 1,
                  height: 290,
                  padding: 12,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigateToIndPage(item)}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      width: width > 450 ? 140 : "100%",

                      borderRadius: 10,
                      marginBottom: 15,
                    }}
                    source={item.img}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    color: Color.white,
                    fontWeight: "600",
                    letterSpacing: 1,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    letterSpacing: 1,
                    color: Color.lightGray,
                  }}
                >
                  {item.subContent}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 15,
                    gap: 25,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 23,
                        color: Color.secondary,
                        marginTop: 14,
                      }}
                    >
                      Gh
                    </Text>
                    <Text
                      style={{
                        fontSize: 24,
                        color: Color.white,
                        marginTop: 14,
                        fontWeight: "600",
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: Color.secondary,
                      flexDirection: "row",
                      width: 40,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Icon name="plus" color={"white"} size={24} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        ListHeaderComponent={() => (
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
                Welcome back, Hudson
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
