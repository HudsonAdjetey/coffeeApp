import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import Color from "../../constants/Color";
import { icon } from "../../constants/images";
import Icon from "react-native-vector-icons/Ionicons";

const IndPage = () => {
  const { item } = useLocalSearchParams();
  const [data, setData] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [active, setActive] = useState(false);
  const { width } = Dimensions.get("screen" || "window");
  const navigation = useNavigation();
  useEffect(() => {
    const decodedItem = JSON.parse(decodeURIComponent(item));
    if (decodedItem) {
      setData([decodedItem]);
    }
  }, [item]);
  //   console.log(selectedSize);
  useEffect(() => {
    if (item && data.length > 0) {
      setSelectedSize(data[0].size[0]);
    }
  }, [item, data]);
  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const toggleHeart = () => {
    setActive(!active);
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        backgroundColor: Color.primary,
        flex: 1,
      }}
    >
      <ScrollView>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            paddingHorizontal: 20,
            zIndex: 900,
            marginTop: 40,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#21262E",
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="chevron-back-sharp" size={30} color={Color.lightGray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleHeart}
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#21262E",
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="heart"
              size={30}
              color={active ? Color.red : Color.white}
            />
          </TouchableOpacity>
        </View>
        {data.map((item, index) => (
          /* CONTENT */
          <View key={index}>
            {/* HEADER BANNER */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: 400,
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
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
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
                  marginTop: 10,
                }}
              >
                Size
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 15,
                  flexWrap: "wrap",
                }}
              >
                {item?.size?.map((size, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flexBasis: 110,
                      backgroundColor: "#141921",
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      height: 60,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                      borderWidth: selectedSize === size ? 2 : 0,
                      borderColor: selectedSize === size ? Color.secondary : "",
                      borderStyle: "solid",
                    }}
                    onPress={() => handleSelectSize(size)}
                  >
                    <Text
                      style={{
                        color:
                          selectedSize === size ? Color.secondary : Color.white,
                        fontSize: 22,
                        fontWeight: "400",
                      }}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            {/* SIZE */}

            {/* BASE ~ PRICE AND CART BUTTON */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 50,
                paddingHorizontal: 24,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: Color.lightGray,
                  }}
                >
                  Price
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 9,
                  }}
                >
                  <Text
                    style={{
                      color: Color.secondary,
                      fontSize: 21,
                      fontWeight: "500",
                      alignSelf: "flex-end",
                    }}
                  >
                    GH
                  </Text>
                  <Text
                    style={{
                      color: Color.white,
                      fontSize: 30,
                      fontWeight: "500",
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: Color.secondary,
                  flexBasis: width < 420 ? "50%" : "",
                  width: width > 420 && 200,
                  borderRadius: 19,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: Color.white,
                  }}
                >
                  Add to cart
                </Text>
              </TouchableOpacity>
            </View>
            {/* BASE ~ PRICE AND CART BUTTON */}
          </View>
          /* CONTENT */
        ))}
      </ScrollView>
    </View>
  );
};

export default IndPage;
