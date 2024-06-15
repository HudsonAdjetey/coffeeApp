import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

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
    <View>
      {data.map((item, index) => (
        <View key={index}>
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
              <Text style={{ fontSize: 20, fontWeight: "600", color: "red" }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 17, color: "red" }}>
                {item.subContent}
              </Text>
              <Text style={{ fontSize: 24, color: "red", marginTop: 10 }}>
                Price: {item.price}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default IndPage;
