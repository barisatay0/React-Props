import React from "react";
import { View, Text } from "react-native";

const Users = ({ data }) => {
  return (
    <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default Users;
