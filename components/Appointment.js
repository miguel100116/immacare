import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
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
    navigation.navigate("Doctors");
  };

  return (
    <View style={Mystyle.containerDashbord}>
   
      {/* Main Content */}
      <View style={{ flex: 1 }}>
        {/* Header with Menu Button */}
        <Appbar.Header style={Mystyle.header}>
          <Image source={require("../assets/logo.png")} style={Mystyle.logo} />
          <Text style={{fontSize:29, color:'#001C5C', fontWeight:'bold', right:30,}}>Immacare+</Text>
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
              <Text style={{color:'white', fontSize:12}}>0921-123-4212</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Mystyle.contactIcon}>
              <Icon name="map-marker" size={24} color="white" />
              <Text style={{color:'white', fontSize:12}}> 233 Doctor Pilapil St.Brgy San Miguel Pasig City</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Mystyle.contactIcon}>
              <Icon name="envelope" size={24} color="white" />
              <Text style={{color:'white', fontSize:12}}>icclinis2007@yahoo.com</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Buttons Section */}
        <View style={Mystyle.buttonContainer}>
          <TouchableOpacity style={Mystyle.button} onPress={() => navigation.navigate("Doctors")} >
            <Icon name="stethoscope" size={20} color="white" />
            <Text style={Mystyle.buttonText}> Find a Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Mystyle.button}
            onPress={() => navigation.navigate("Service")}
          >
            <Icon name="users" size={20} color="white" />
            <Text style={Mystyle.buttonText}> Find a Service</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Mystyle.button}
            onPress={() => navigation.navigate("Appointment")}
          >
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
              navigation.navigate("Doctors");
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
              Alert.alert(
                "Logout Confirmation",
                "Are you sure you want to logout?",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      setTimeout(() => {
                        navigation.navigate("Login");
                      }, 100); // Wait for 2 seconds before navigating
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
