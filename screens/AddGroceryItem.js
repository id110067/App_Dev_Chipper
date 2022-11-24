import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import SellerBottomTabs from "../components/sellerHome/SellerBottomTabs";

const AddGroceryItem = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <View style={{ marginTop: "10%", flex: 1 }}>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "black",
                width: "80%",
                alignSelf: "center",
                height: 50,
                paddingLeft: 10,
                fontWeight: "bold",
                marginBottom: "4%",
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter Product Name"
            />
          )}
          name="productName"
        />
        {errors.search && (
          <Text style={{ color: "red", marginTop: "2%", marginBottom: "2%" }}>
            This is required.
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "black",
                width: "80%",
                alignSelf: "center",
                height: 50,
                paddingLeft: 10,
                fontWeight: "bold",
                marginBottom: "4%",
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter Product Quantity"
            />
          )}
          name="productQuantity"
        />
        {errors.search && (
          <Text style={{ color: "red", marginTop: "2%", marginBottom: "2%" }}>
            This is required.
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "black",
                width: "80%",
                alignSelf: "center",
                height: 50,
                paddingLeft: 10,
                fontWeight: "bold",
                marginBottom: "4%",
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Add Product Image"
            />
          )}
          name="productImage"
        />
        {errors.search && (
          <Text style={{ color: "red", marginTop: "2%", marginBottom: "2%" }}>
            This is required.
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "black",
                width: "80%",
                alignSelf: "center",
                height: 50,
                paddingLeft: 10,
                fontWeight: "bold",
                marginBottom: "4%",
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter Product Price"
            />
          )}
          name="productPrice"
        />
        {errors.search && (
          <Text style={{ color: "red", marginTop: "2%", marginBottom: "2%" }}>
            This is required.
          </Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            marginTop: 10,
            height: 50,
            width: 200,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            alignItems: "center",
            marginBottom: "5%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}>
            Add Product
          </Text>
        </TouchableOpacity>
      </View>
      <View>
      <SellerBottomTabs navigation={navigation} />
      </View>
    </View>
  )
  // return (
  //   <View>
  //   <View>

  //   </View>
  //     <SellerBottomTabs navigation={navigation} />
  //   </View>
  // )
}

export default AddGroceryItem