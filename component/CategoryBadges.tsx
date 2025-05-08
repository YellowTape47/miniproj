import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface badgeNames {
  badgeName: string;
}
const CategoryBadges = ({ badgeName }: badgeNames) => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 5,
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: "white",
          //   alignSelf: "flex-start",
          // padding: 5,
          margin: 5,
        }}
      >
        {badgeName}
      </Text>
    </View>
  );
};

export default CategoryBadges;

const styles = StyleSheet.create({});
