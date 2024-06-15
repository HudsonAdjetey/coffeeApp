import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import Color from "../../constants/Color";
import { icon } from "../../constants/images";
import Icon from "react-native-vector-icons/Ionicons";

const IndPage = () => {
  const { item } = useLocalSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const decodedItem = JSON.parse(decodeURIComponent(item));
    if (decodedItem) {
      setData([decodedItem]);
    }
  }, [item]);

  console.log("Received item:", item);

  return (
    <View
      style={{
        backgroundColor: Color.primary,
        flex: 1,
      }}
    >
      {data.map((item, index) => (
        /* CONTENT */
        <View key={index}>
          {/* HEADER BANNER */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "red",
              width: "100%",
              height: 460,
            }}
          >
            <Image
              source={item.img}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
              resizeMethod="resize"
            />
            {/* SUBCONTENT */}
            <View
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                width: "100%",
                paddingVertical: 15,
                paddingHorizontal: 20,
              }}
            >
              <BlurView
                intensity={8}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: "100%",
                  width: "100%",
                }}
                blurReductionFactor={1}
              />
              {/* TITLE AND TOP ICONS */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "white",
                      fontWeight: "600",
                      letterSpacing: 1,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: Color.lightGray,
                      fontWeight: "600",
                      letterSpacing: 1,
                    }}
                  >
                    From Africa
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#141921",
                      height: 65,
                      width: 65,
                      padding: 5,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{
                        width: "80%",
                        height: "80%",
                      }}
                      source={icon.Bean}
                      resizeMode="cover"
                    />
                  </View>
                  <View
                    style={{
                      height: 65,
                      width: 65,
                      backgroundColor: "#141921",

                      borderRadius: 10,
                      padding: 5,
                      alignItems: "center",
                      gap: 5,
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={35} name="location" color={Color.secondary} />
                  </View>
                </View>
              </View>
              {/* TITLE AND TOP ICONS */}
              {/* BASE CONTENT */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Icon name="star-sharp" size={30} color={Color.secondary} />
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "600",
                      color: Color.white,
                    }}
                  >
                    4.5
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: Color.white,
                      maxWidth: 185,
                      textAlign: "center",

                      padding: 10,
                      paddingVertical: 15,
                      borderRadius: 10,
                      backgroundColor: "#141921",
                    }}
                  >
                    Medium Roasted
                  </Text>
                </View>
              </View>
              {/* BASE CONTENT */}
            </View>
            {/* SUBCONTENT */}
          </View>
          {/* HEADER BANNER */}

          {/* DESCRIPTION */}
          <View
            style={{
              paddingHorizontal: 24,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                color: Color.lightGray,
                fontSize: 25,
                fontWeight: "600",
                marginTop: 20,
              }}
            >
              Desription
            </Text>
            <Text
              style={{
                color: Color.white,
                lineHeight: 24,
                fontSize: 16,
                marginTop: 10,
                fontWeight: "400",
              }}
            >
              {item.description}
            </Text>
          </View>
          {/* DESCRIPTION */}

          {/* SIZE */}
          <View
            style={{
              paddingHorizontal: 24,
            }}
          >
            <Text
              style={{
                color: Color.lightGray,
                fontSize: 25,
                fontWeight: "600",
                marginTop: 20,
              }}
            >
              Size
            </Text>
          </View>
          {/* SIZE */}
        </View>
        /* CONTENT */
      ))}
    </View>
  );
};

export default IndPage;
