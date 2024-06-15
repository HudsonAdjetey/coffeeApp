import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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
          </View>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "black" }}>
            {item.title}
          </Text>
          <Text style={{ fontSize: 17, color: "gray" }}>{item.subContent}</Text>
          <Text style={{ fontSize: 24, color: "blue", marginTop: 10 }}>
            Price: {item.price}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default IndPage;
