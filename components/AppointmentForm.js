import React, { useState } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,KeyboardAvoidingView,Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Mystyle } from "./Mystyle";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome"; 

const AppointmentForm = () => {
  const navigation = useNavigation(); 

  const goToProfile = () => {
    navigation.navigate("Dashboard");
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    birthday: "",
    address: "",
    specialization: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={Mystyle.containerSetappointment}>
          <Text style={Mystyle.titleSetappointment}>Set Appointment</Text>

          <Button  onPress={goToProfile} style={Mystyle.backButton}>
            <Icon name="arrow-left" size={24} color="white" />
          </Button>

          <Text style={Mystyle.noteSetappointment}>
            Note: Required fields are marked with an asterisk (*).
          </Text>

          <Text style={Mystyle.sectionTitleSetappointment}>Patient Info</Text>
          <TextInput
            style={Mystyle.inputSetappointment}
            placeholder="Name*"
            onChangeText={(value) => handleChange("name", value)}
          />
          <TextInput
            style={Mystyle.inputSetappointment}
            placeholder="Phone*"
            keyboardType="phone-pad"
            onChangeText={(value) => handleChange("phone", value)}
          />
          <TextInput
            style={Mystyle.inputSetappointment}
            placeholder="Birthday*"
            onChangeText={(value) => handleChange("birthday", value)}
          />
          <TextInput
            style={Mystyle.inputSetappointment}
            placeholder="Address*"
            onChangeText={(value) => handleChange("address", value)}
          />

          <Text style={Mystyle.sectionTitleSetappointment}>
            Patient Appointment Details
          </Text>
          <Picker
            selectedValue={form.specialization}
            onValueChange={(value) => handleChange("specialization", value)}
            style={Mystyle.inputSetappointment}
          >
            <Picker.Item label="Specialization*" value="" />
            <Picker.Item label="General" value="general" />
            <Picker.Item label="Cardiology" value="cardiology" />
            <Picker.Item label="Dermatology" value="dermatology" />
          </Picker>

          <Picker
            selectedValue={form.doctor}
            onValueChange={(value) => handleChange("doctor", value)}
            style={Mystyle.inputSetappointment}
          >
            <Picker.Item label="Doctor*" value="" />
            <Picker.Item label="Dr. Bermejo" value="dr_bermejo" />
            <Picker.Item label="Dr. Alarcon" value="dr_alarcon" />
            <Picker.Item label="Dr. Brian" value="dr_brian" />
            <Picker.Item label="Dr. DeGuzman" value="dr_deguzman" />
          </Picker>

          <TextInput
            style={Mystyle.inputSetappointment}
            placeholder="Date*"
            onChangeText={(value) => handleChange("date", value)}
          />
          <TextInput
            style={Mystyle.inputSetappointment}
            placeholder="Time*"
            onChangeText={(value) => handleChange("time", value)}
          />

          <Text style={Mystyle.sectionTitleSetappointment}>Medical History</Text>
          <TextInput
            style={Mystyle.inputSetappointment}
            placeholder="Reason for Visit*"
            onChangeText={(value) => handleChange("reason", value)}
            multiline
          />

          <TouchableOpacity
            style={Mystyle.buttonSetappointment}
            onPress={handleSubmit}
          >
            <Text style={Mystyle.buttonTextSetappointment}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AppointmentForm;

