import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Mystyle } from "./Mystyle";
import Icon from "react-native-vector-icons/FontAwesome";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const navigation = useNavigation();

  const goToDashboard = () => {
    navigation.navigate("Profile");
    navigation.navigate("Appointment");
    navigation.navigate("Login");
    navigation.navigate("Service");
  };

  return (
    <View style={Mystyle.containerDashbord}>
      {/* Main Content */}
      <View style={{ flex: 1 }}>
        {/* Header with Menu Button */}
        <Appbar.Header style={Mystyle.header}>
          <Image source={require("../assets/logo.png")} style={Mystyle.logo} />
          <Appbar.Action
            icon="menu"
            color="rgb(9, 10, 109)"
            size={30}
            onPress={() => setIsSideNavOpen(true)}
          />
        </Appbar.Header>

        {/* Contact Us Section */}
        <View style={Mystyle.contactContainer}>
          <Text style={Mystyle.contactTitle}>Contact Us</Text>
          <View style={Mystyle.iconContainer}>
            <TouchableOpacity style={Mystyle.contactIcon}>
              <Icon name="phone" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={Mystyle.contactIcon}>
              <Icon name="map-marker" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={Mystyle.contactIcon}>
              <Icon name="envelope" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Buttons Section */}
        <View style={Mystyle.buttonContainer}>
          <TouchableOpacity style={Mystyle.button}>
            <Icon name="stethoscope" size={20} color="white" />
            <Text style={Mystyle.buttonText}> Find a Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Mystyle.button}>
            <Icon name="users" size={20} color="white" />
            <Text style={Mystyle.buttonText}> Find a Service</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Mystyle.button}>
            <Icon name="calendar" size={20} color="white" />
            <Text style={Mystyle.buttonText}> Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isSideNavOpen && (
        <View style={Mystyle.sideNavContainer}>
          {/* Close Button */}
          <TouchableOpacity
            style={Mystyle.sideNavCloseButton}
            onPress={() => setIsSideNavOpen(false)}
          >
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>

          {/* Navigation Items */}
          <TouchableOpacity
            style={Mystyle.sideNavItem}
            onPress={() => {
              setIsSideNavOpen(false);
              // navigation.navigate("Home");
            }}
          >
            <Icon name="home" size={20} color="white" />
            <Text style={Mystyle.sideNavText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Mystyle.sideNavItem}
            onPress={() => {
              setIsSideNavOpen(false);
              navigation.navigate("Profile");
            }}
          >
            <Icon name="user" size={20} color="white" />
            <Text style={Mystyle.sideNavText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Mystyle.sideNavItem}
            onPress={() => {
              setIsSideNavOpen(false);
              navigation.navigate("Appointment");
            }}
          >
            <Icon name="calendar" size={20} color="white" />
            <Text style={Mystyle.sideNavText}>Appointment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Mystyle.sideNavItem}
            onPress={() => {
              setIsSideNavOpen(false);
              // navigation.navigate("Meet Doctors");
            }}
          >
            <Icon name="stethoscope" size={20} color="white" />
            <Text style={Mystyle.sideNavText}>Meet Doctors</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Mystyle.sideNavItem}
            onPress={() => {
              setIsSideNavOpen(false);
              navigation.navigate("Service");
            }}
          >
            <Icon name="users" size={20} color="white" />
            <Text style={Mystyle.sideNavText}>Services</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Mystyle.logoutButton}
            onPress={() => {
              alert("Logging out...");
              navigation.navigate("Login");
            }}
          >
            <Text style={Mystyle.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
