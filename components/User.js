import React from "react";
import { View, Text } from "react-native";

const User = ({ data }) => {
  return (
    <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default User;
