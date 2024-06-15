import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "../../constants/Color";
import { img } from "../../constants/images";
import Ionic from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome6";
import { DataContent } from "../../constants/dataContent";

const Page = () => {
  const [activeData, setActiveData] = useState(0);
  const data = ["All", "Cappuccino", "Espresso", "Americano", "Macchiato"];
  const handleSetActive = (index) => {
    setActiveData(index);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        key={(item, index) => index}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <View>
            <Text
              style={{
                fontSize: 20,
                color: Color.lightGray,
                fontStyle: "italic",
                fontWeight: "600",
              }}
            >
              {index}
            </Text>
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
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
              data={DataContent}
              key={(item) => Math.random()}
              keyExtractor={(item) => item.id++}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    gap: 20,
                    position: "relative",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      marginRight: 10,
                      color: Color.unactive,
                    }}
                  >
                    <View>
                      <View>
                        <Image source={item.img} />
                      </View>
                      <Text>{item.title}</Text>
                      <Text>{item.subContent}</Text>
                      <View>
                        <View>
                          <Text>Gh</Text>
                          <Text style={{ color: "red" }}></Text>
                        </View>

                        <Icon name="plus" color={"red"} />
                      </View>
                    </View>
                  </Text>
                </View>
              )}
            />
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
  },
});
