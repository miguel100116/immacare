// import React, { useState } from "react";
// import { View, Text, TextInput, Button, Alert, Image, ScrollView, TouchableOpacity } from "react-native";
// import { Mystyle } from "./Mystyle";
// import { useNavigation } from '@react-navigation/native';
// import Icon from "react-native-vector-icons/FontAwesome";

// const RegistrationForm = () => {
//   const navigation = useNavigation();  

//   const goToRegister = () => {
//     navigation.navigate("Login");
//   };

//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     mobile: "",
//     address: "",
//   });

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   const validateForm = () => {
//     if (!form.name.trim() || !form.age.trim() || !form.gender.trim() || !form.mobile.trim() || !form.address.trim()) {
//       Alert.alert("Error", "Please fill in all required fields.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       console.log("Form Submitted:", form);
//       Alert.alert("Success", "Registration Successful!", [
//         { text: "OK", onPress: () => navigation.navigate("Dashboard") } 
//       ]);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={Mystyle.scrollContainer}>
//       <View style={Mystyle.container}>

//         {/* ✅ Back Button Positioned in the Upper Left Corner */}
//         <TouchableOpacity onPress={goToRegister} style={Mystyle.backButton}>
//           <Icon name="arrow-left" size={30} color="black" />
//         </TouchableOpacity>

//         <View style={Mystyle.box}>
//           <Image source={require("../assets/logo.png")} style={Mystyle.logo} />
          
//           <Text style={Mystyle.label}>Name:</Text>
//           <TextInput
//             placeholder="Enter your name"
//             style={Mystyle.input}
//             onChangeText={(text) => handleChange("name", text)}
//           />

//           <Text style={Mystyle.label}>Age:</Text>
//           <TextInput
//             placeholder="Enter your age"
//             style={Mystyle.input}
//             keyboardType="numeric"
//             onChangeText={(text) => handleChange("age", text)}
//           />

//           <Text style={Mystyle.label}>Sex:</Text>
//           <TextInput
//             placeholder="Enter your gender"
//             style={Mystyle.input}
//             onChangeText={(text) => handleChange("gender", text)}
//           />

//           <Text style={Mystyle.label}>Phone #:</Text>
//           <TextInput
//             placeholder="Enter your phone number"
//             style={Mystyle.input}
//             keyboardType="phone-pad"
//             onChangeText={(text) => handleChange("mobile", text)}
//           />

//           <Text style={Mystyle.label}>Address:</Text>
//           <TextInput
//             placeholder="Enter your address"
//             style={Mystyle.input}
//             onChangeText={(text) => handleChange("address", text)}
//           />
          
//           <Button title="Register" onPress={handleSubmit} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default RegistrationForm;










import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Mystyle } from "./Mystyle";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

const RegistrationForm = () => {
  const navigation = useNavigation();
  const goToLogin = () => navigation.navigate("Login");

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    address: "",
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validateForm = () => {
    if (!form.name || !form.age || !form.gender || !form.mobile || !form.address || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        // Save user data in AsyncStorage
        await AsyncStorage.setItem("user", JSON.stringify(form));
        Alert.alert("Success", "Registration Successful!", [
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ]);
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={Mystyle.scrollContainer}>
      <View style={Mystyle.container}>
        <TouchableOpacity onPress={goToLogin} style={Mystyle.backButton}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>

        <View style={Mystyle.box}>
          <Image source={require("../assets/logo.png")} style={Mystyle.logo} />
          
          <Text style={Mystyle.label}>Name:</Text>
          <TextInput
            placeholder="Enter your name"
            style={Mystyle.input}
            onChangeText={(text) => handleChange("name", text)}
          />

          <Text style={Mystyle.label}>Age:</Text>
          <TextInput
            placeholder="Enter your age"
            style={Mystyle.input}
            keyboardType="numeric"
            onChangeText={(text) => handleChange("age", text)}
          />

          <Text style={Mystyle.label}>Sex:</Text>
          <TextInput
            placeholder="Enter your gender"
            style={Mystyle.input}
            onChangeText={(text) => handleChange("gender", text)}
          />

          <Text style={Mystyle.label}>Phone #:</Text>
          <TextInput
            placeholder="Enter your phone number"
            style={Mystyle.input}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange("mobile", text)}
          />

          <Text style={Mystyle.label}>Address:</Text>
          <TextInput
            placeholder="Enter your address"
            style={Mystyle.input}
            onChangeText={(text) => handleChange("address", text)}
          />

          {/* Email */}
          <Text style={Mystyle.label}>Email:</Text>
          <TextInput
            placeholder="Enter your email"
            style={Mystyle.input}
            onChangeText={(text) => handleChange("email", text)}
          />

          {/* Password */}
          <Text style={Mystyle.label}>Password:</Text>
          <TextInput
            placeholder="Enter your password"
            style={Mystyle.input}
            secureTextEntry
            onChangeText={(text) => handleChange("password", text)}
          />

          <Button title="Register" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegistrationForm;
