import React from "react";
import { Color } from "../../constants";
import { Checkbox } from "react-native-paper";

const CheckBox = ({status,onPress,color}) => {
  return (
    <Checkbox.Android
      status={status}
      onPress={onPress}
      color={color}
    />
  );
};

export default CheckBox;
