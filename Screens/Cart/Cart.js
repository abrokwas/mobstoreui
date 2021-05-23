import React from "react";
import { Text, View } from "react-native";

//onnect to store so we can have the state of the store here
//and then map our state of the store to props as below
//then we can use props below
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {props.cartItems.map((x) => {
        return <Text>{x.product.name}</Text>;
      })}
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(Cart);