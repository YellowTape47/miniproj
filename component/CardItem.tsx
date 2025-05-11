import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
interface CardDetails {
  image: string;
  title: string;
  category: string;
  price: number;
}

const CardItem = ({ image, title, category, price }: CardDetails) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          height: 250,
          width: "100%",
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: 100,
            width: "92%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {title}
        </Text>
        <Text style={{ marginLeft: 20, marginTop: 3, fontSize: 16 }}>
          {category}
        </Text>
        <Text style={{ marginLeft: 20, marginTop: 3 }}>KWD {price}</Text>
        <View
          style={{
            borderWidth: 1,
            alignSelf: "flex-start",
            // width: 110,
            borderRadius: 5,
            // height: 40,
            backgroundColor: "blue",
            borderColor: "blue",
            marginLeft: 20,
            marginTop: 5,
            flexDirection: "row",
            top: 5,
          }}
        >
          <Button title="Add to Cart" color={"white"} />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "red",
            // width: 110,
            alignSelf: "flex-start",
            borderRadius: 5,
            // height: 40,
            backgroundColor: "red",
            marginLeft: 140,
            top: -35,
          }}
        >
          <Button title="Add to Favorites" color={"white"} />
        </View>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
