import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Mystyle } from "./Mystyle";

const Login = () => {
  const navigation = useNavigation();
  const goToRegister = () => navigation.navigate("Registration");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);

        // Validate email & password
        if (user.email === form.email && user.password === form.password) {
          Alert.alert("Success", "Login Successful!", [
            { text: "OK", onPress: () => navigation.navigate("Dashboard") },
          ]);
        } else {
          Alert.alert("Error", "Invalid email or password.");
        }
      } else {
        Alert.alert("Error", "No registered user found. Please register first.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <View style={Mystyle.containerLoginpage}>
      <View style={Mystyle.logoContainerLoginpage}>
        <Text style={Mystyle.logoTextLoginpage}>Immacare+</Text>
      </View>

      <Text style={Mystyle.loginTextLoginpage}>Login to your Account</Text>

      <View style={Mystyle.inputContainerLoginpage}>
        <TextInput
          style={Mystyle.inputLoginpage}
          placeholder="Email"
          onChangeText={(value) => handleChange("email", value)}
        />
      </View>

      <View style={Mystyle.inputContainerLoginpage}>
        <TextInput
          style={Mystyle.inputLoginpage}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          onChangeText={(value) => handleChange("password", value)}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <MaterialIcons
            name={passwordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="green"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={Mystyle.loginButtonLoginpage}
        onPress={handleLogin}
      >
        <Text style={Mystyle.loginButtonTextLoginpage}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={Mystyle.registerTextLoginpage}>
        Don’t have an account?
        <TouchableOpacity onPress={goToRegister}>
          <Text style={Mystyle.registerLinkLoginpage}> Register Here</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Login;
