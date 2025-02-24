import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Mystyle } from "./Mystyle";
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-paper";



const Profile = () => {
    const navigation = useNavigation(); 

    const goToDashboard = () => {
        navigation.navigate("Dashboard"); 
    }
    return (
    <View style={Mystyle.containerProfile}>
      {/* Header Section */}
        <View style={Mystyle.headerProfile}>
        <Button onPress={goToDashboard} style={Mystyle.backButton}>
            <Icon name="arrow-left" size={24} color="white" />
        </Button>
        <Text style={Mystyle.headerText}>Profile</Text>
        </View>

      {/* Profile Picture */}
    <View style={Mystyle.profilePictureContainer}>
        <Icon name="user-circle" size={120} color="white" style={Mystyle.profileIcon} />
    </View>

      {/* Form Inputs */}
        <View style={Mystyle.form}>
        <TextInput style={Mystyle.input} placeholder="Username" placeholderTextColor="#666" />
        <TextInput style={Mystyle.input} placeholder="Email" placeholderTextColor="#666" />
        <TextInput style={Mystyle.input} placeholder="Phone" placeholderTextColor="#666" keyboardType="phone-pad" />
        <TextInput style={Mystyle.input} placeholder="Address" placeholderTextColor="#666" />
        <TextInput style={Mystyle.input} placeholder="Birthday" placeholderTextColor="#666" keyboardType="phone-pad"/>
        </View>

      {/* Logout Button */}
        <TouchableOpacity style={Mystyle.logoutButton}>
        <Text style={Mystyle.logoutText}>LOGOUT</Text>
    </TouchableOpacity>
    </View>
);
};
export default Profile;
