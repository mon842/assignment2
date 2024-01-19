import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";


function Icon({style,color,name,size}) {
  return (
    <AntDesign style={style} color={color} name={name} size={20} />
  );
}

export default Icon;
