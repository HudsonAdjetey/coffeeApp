import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Color from "../constants/Color";

const Product = ({ DataContent, navigateToIndPage, Icon }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 20,
        marginBottom: 20,
      }}
      data={DataContent}
      key={(items) => Math.random()}
      keyExtractor={(items) => items.id++}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            // gap: 20,
            position: "relative",
            marginRight: 20,
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
            <View
              style={{
                backgroundColor: "rgba(38, 43, 51, 0.63)",
                width: 200,
                padding: 12,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
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
                      width: "100%",
                      borderRadius: 10,
                      marginBottom: 15,
                    }}
                    source={item.img}
                  />
                </TouchableOpacity>
              </View>
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
          </Text>
        </View>
      )}
    />
  );
};

export default Product;

const styles = StyleSheet.create({});
