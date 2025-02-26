// import React, { useState } from "react";
// import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,KeyboardAvoidingView,Platform,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { Mystyle } from "./Mystyle";
// import { useNavigation } from "@react-navigation/native";
// import { Button } from "react-native-paper";
// import Icon from "react-native-vector-icons/FontAwesome"; 
// import {  ArrowLeft } from "lucide-react-native";
// const AppointmentForm = () => {
//   const navigation = useNavigation(); 

//   const goToProfile = () => {
//     navigation.navigate("Dashboard");
//   };

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     birthday: "",
//     address: "",
//     specialization: "",
//     doctor: "",
//     date: "",
//     time: "",
//     reason: "",
//   });

//   const handleChange = (key, value) => {
//     setForm({ ...form, [key]: value });
//   };

//   const handleSubmit = () => {
//     console.log(form);
//   };
//   const goBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <ScrollView
//         contentContainerStyle={{ flexGrow: 1 }}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={Mystyle.containerSetappointment}>
//           <Text style={Mystyle.titleSetappointment}>Set Appointment</Text>

//           <TouchableOpacity onPress={goBack}>
//           <ArrowLeft color="#1e3a8a" size={24} />
//         </TouchableOpacity>

//           <Text style={Mystyle.noteSetappointment}>
//             Note: Required fields are marked with an asterisk (*).
//           </Text>

//           <Text style={Mystyle.sectionTitleSetappointment}>Patient Info</Text>
//           <TextInput
//             style={Mystyle.inputSetappointment}
//             placeholder="Name*"
//             onChangeText={(value) => handleChange("name", value)}
//           />
//           <TextInput
//             style={Mystyle.inputSetappointment}
//             placeholder="Phone*"
//             keyboardType="phone-pad"
//             onChangeText={(value) => handleChange("phone", value)}
//           />
//           <TextInput
//             style={Mystyle.inputSetappointment}
//             placeholder="Birthday*"
//             onChangeText={(value) => handleChange("birthday", value)}
//           />
//           <TextInput
//             style={Mystyle.inputSetappointment}
//             placeholder="Address*"
//             onChangeText={(value) => handleChange("address", value)}
//           />

//           <Text style={Mystyle.sectionTitleSetappointment}>
//             Patient Appointment Details
//           </Text>
//           <Picker
//             selectedValue={form.specialization}
//             onValueChange={(value) => handleChange("specialization", value)}
//             style={Mystyle.inputSetappointment}
//           >
//             <Picker.Item label="Specialization*" value="" />
//             <Picker.Item label="General" value="general" />
//             <Picker.Item label="Cardiology" value="cardiology" />
//             <Picker.Item label="Dermatology" value="dermatology" />
//           </Picker>

//           <Picker
//             selectedValue={form.doctor}
//             onValueChange={(value) => handleChange("doctor", value)}
//             style={Mystyle.inputSetappointment}
//           >
//             <Picker.Item label="Doctor*" value="" />
//             <Picker.Item label="Dr. Bermejo" value="dr_bermejo" />
//             <Picker.Item label="Dr. Alarcon" value="dr_alarcon" />
//             <Picker.Item label="Dr. Brian" value="dr_brian" />
//             <Picker.Item label="Dr. DeGuzman" value="dr_deguzman" />
//           </Picker>

//           <TextInput
//             style={Mystyle.inputSetappointment}
//             placeholder="Date*"
//             onChangeText={(value) => handleChange("date", value)}
//           />
//           <TextInput
//             style={Mystyle.inputSetappointment}
//             placeholder="Time*"
//             onChangeText={(value) => handleChange("time", value)}
//           />

//           <Text style={Mystyle.sectionTitleSetappointment}>Medical History</Text>
//           <TextInput
//             style={Mystyle.inputSetappointment}
//             placeholder="Reason for Visit*"
//             onChangeText={(value) => handleChange("reason", value)}
//             multiline
//           />

//           <TouchableOpacity
//             style={Mystyle.buttonSetappointment}
//             onPress={handleSubmit}
//           >
//             <Text style={Mystyle.buttonTextSetappointment}>SUBMIT</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default AppointmentForm;


////// tunayyyyyy

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { Mystyle } from "./Mystyle";
// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeft } from "lucide-react-native";

// const AppointmentForm = () => {
//   const navigation = useNavigation();

//   const goBack = () => {
//     navigation.goBack();
//   };

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     birthday: "",
//     address: "",
//     specialization: "",
//     doctor: "",
//     date: "",
//     time: "",
//     reason: "",
//   });

//   const handleChange = (key, value) => {
//     setForm({ ...form, [key]: value });
//   };

//   const handleSubmit = () => {
//     console.log(form);
//   };

//   return (
//     <SafeAreaView style={Mystyle.containerSetappointment}>
//       {/* Header with Back Button */}
//       <View style={Mystyle.header}>
//         <TouchableOpacity  onPress={goBack}>
//           <ArrowLeft color="#1e3a8a" size={24}  />
//         </TouchableOpacity>
//       </View>

//       {/* Form Content */}
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={{ flex: 1 }}
//       >
//         <ScrollView
//           contentContainerStyle={{ flexGrow: 1 }}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}
//         >
//           <View style={Mystyle.formContainer}>
//             <Text style={Mystyle.titleSetappointment}>Set Appointment</Text>
//             <Text style={Mystyle.noteSetappointment}>
//               Note: Required fields are marked with an asterisk (*).
//             </Text>

//             {/* Patient Info */}
//             <Text style={Mystyle.sectionTitleSetappointment}>Patient Info</Text>
//             <TextInput
//               style={Mystyle.inputSetappointment}
//               placeholder="Name*"
//               onChangeText={(value) => handleChange("name", value)}
//             />
//             <TextInput
//               style={Mystyle.inputSetappointment}
//               placeholder="Phone*"
//               keyboardType="phone-pad"
//               onChangeText={(value) => handleChange("phone", value)}
//             />
//             <TextInput
//               style={Mystyle.inputSetappointment}
//               placeholder="Birthday*"
//               onChangeText={(value) => handleChange("birthday", value)}
//             />
//             <TextInput
//               style={Mystyle.inputSetappointment}
//               placeholder="Address*"
//               onChangeText={(value) => handleChange("address", value)}
//             />

//             {/* Appointment Details */}
//             <Text style={Mystyle.sectionTitleSetappointment}>
//               Patient Appointment Details
//             </Text>
//             <Picker
//               selectedValue={form.specialization}
//               onValueChange={(value) => handleChange("specialization", value)}
//               style={Mystyle.inputSetappointment}
//             >
//               <Picker.Item label="Specialization*" value="" />
//               <Picker.Item label="General" value="general" />
//               <Picker.Item label="Cardiology" value="cardiology" />
//               <Picker.Item label="Dermatology" value="dermatology" />
//             </Picker>

//             <Picker
//               selectedValue={form.doctor}
//               onValueChange={(value) => handleChange("doctor", value)}
//               style={Mystyle.inputSetappointment}
//             >
//               <Picker.Item label="Doctor*" value="" />
//               <Picker.Item label="Dr. Bermejo" value="dr_bermejo" />
//               <Picker.Item label="Dr. Alarcon" value="dr_alarcon" />
//               <Picker.Item label="Dr. Brian" value="dr_brian" />
//               <Picker.Item label="Dr. DeGuzman" value="dr_deguzman" />
//             </Picker>

//             <TextInput
//               style={Mystyle.inputSetappointment}
//               placeholder="Date*"
//               onChangeText={(value) => handleChange("date", value)}
//             />
//             <TextInput
//               style={Mystyle.inputSetappointment}
//               placeholder="Time*"
//               onChangeText={(value) => handleChange("time", value)}
//             />

//             {/* Medical History */}
//             <Text style={Mystyle.sectionTitleSetappointment}>Medical History</Text>
//             <TextInput
//               style={Mystyle.inputSetappointment}
//               placeholder="Reason for Visit*"
//               onChangeText={(value) => handleChange("reason", value)}
//               multiline
//             />

//             {/* Submit Button */}
//             <TouchableOpacity
//               style={Mystyle.buttonSetappointment}
//               onPress={handleSubmit}
//             >
//               <Text style={Mystyle.buttonTextSetappointment}>SUBMIT</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default AppointmentForm;




//semi 100%
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   TouchableOpacity
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { Mystyle } from "./Mystyle";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { ArrowLeft } from "lucide-react-native";

// const AppointmentForm = () => {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const goBack = () => {
//     navigation.goBack();
//   };

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     birthday: "",
//     address: "",
//     specialization: "",
//     doctor: "",
//     date: "",
//     time: "",
//     reason: "",
//   });

//   useEffect(() => {
//     if (route.params) {
//       setForm((prevForm) => ({
//         ...prevForm,
//         doctor: route.params.doctorName || "",
//         specialization: route.params.specialization || "",
//       }));
//     }
//   }, [route.params]);

//   const handleChange = (key, value) => {
//     setForm({ ...form, [key]: value });
//   };

//   const handleSubmit = () => {
//     console.log(form);
//   };

//   return (
//     <SafeAreaView style={Mystyle.containerSetappointment}>
//       <View style={Mystyle.header}>
//         <TouchableOpacity onPress={goBack}>
//           <ArrowLeft color="#1e3a8a" size={24} />
//         </TouchableOpacity>
//       </View>

//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={{ flex: 1 }}
//       >
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
//           <View style={Mystyle.formContainer}>
//             <Text style={Mystyle.titleSetappointment}>Set Appointment</Text>
//             <Text style={Mystyle.noteSetappointment}>
//               Note: Required fields are marked with an asterisk (*).
//             </Text>

//             <Text style={Mystyle.sectionTitleSetappointment}>Patient Info</Text>
//             <TextInput style={Mystyle.inputSetappointment} placeholder="Name*" onChangeText={(value) => handleChange("name", value)} />
//             <TextInput style={Mystyle.inputSetappointment} placeholder="Phone*" keyboardType="phone-pad" onChangeText={(value) => handleChange("phone", value)} />
//             <TextInput style={Mystyle.inputSetappointment} placeholder="Birthday*" onChangeText={(value) => handleChange("birthday", value)} />
//             <TextInput style={Mystyle.inputSetappointment} placeholder="Address*" onChangeText={(value) => handleChange("address", value)} />

//             <Text style={Mystyle.sectionTitleSetappointment}>Appointment Details</Text>
//             <Picker selectedValue={form.specialization} onValueChange={(value) => handleChange("specialization", value)} style={Mystyle.inputSetappointment}>
//               <Picker.Item label="Specialization*" value="" />
//               <Picker.Item label="Obstetrics Gynecology" value="Obstetrics Gynecology" />
//               <Picker.Item label="Rehabilitation Medicine" value="Rehabilitation Medicine" />
//               <Picker.Item label="Cardiology" value="Cardiology" />
//             </Picker>

//             <Picker selectedValue={form.doctor} onValueChange={(value) => handleChange("doctor", value)} style={Mystyle.inputSetappointment}>
//               <Picker.Item label="Doctor*" value="" />
//               <Picker.Item label="De Guzman, Jat" value="De Guzman, Jat" />
//               <Picker.Item label="Alarcon, Mark" value="Alarcon, Mark" />
//               <Picker.Item label="Santos, Maria" value="Santos, Maria" />
//             </Picker>

//             <TextInput style={Mystyle.inputSetappointment} placeholder="Date*" onChangeText={(value) => handleChange("date", value)} />
//             <TextInput style={Mystyle.inputSetappointment} placeholder="Time*" onChangeText={(value) => handleChange("time", value)} />

//             <Text style={Mystyle.sectionTitleSetappointment}>Medical History</Text>
//             <TextInput style={Mystyle.inputSetappointment} placeholder="Reason for Visit*" onChangeText={(value) => handleChange("reason", value)} multiline />

//             <TouchableOpacity style={Mystyle.buttonSetappointment} onPress={handleSubmit}>
//               <Text style={Mystyle.buttonTextSetappointment}>SUBMIT</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default AppointmentForm;







import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Modal
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Mystyle } from "./Mystyle";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { BlurView } from "expo-blur";


const AppointmentForm = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const goBack = () => {
    navigation.goBack();
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (route.params) {
      setForm((prevForm) => ({
        ...prevForm,
        doctor: route.params.doctorName || "",
        specialization: route.params.specialization || "",
      }));
    }
  }, [route.params]);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    console.log("Confirmed Appointment:", form);
    setIsModalVisible(false);
  };

  const handleEdit = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={Mystyle.containerSetappointment}>
      <View style={Mystyle.appointmentHeader}>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft color="#1e3a8a" size={24} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={Mystyle.appointmentFormContainer}>
            <Text style={Mystyle.titleSetappointment}>Set Appointment</Text>
            <Text style={Mystyle.noteSetappointment}>
              Note: Required fields are marked with an asterisk (*).
            </Text>

            <TextInput style={Mystyle.inputSetappointment} placeholder="Name*" placeholderTextColor="white" onChangeText={(value) => handleChange("name", value)} />
            <TextInput style={Mystyle.inputSetappointment} placeholder="Phone*" placeholderTextColor="white" keyboardType="phone-pad" onChangeText={(value) => handleChange("phone", value)} />
            <TextInput style={Mystyle.inputSetappointment} placeholder="Birthday*" placeholderTextColor="white" onChangeText={(value) => handleChange("birthday", value)} />
            <TextInput style={Mystyle.inputSetappointment} placeholder="Address*" placeholderTextColor="white" onChangeText={(value) => handleChange("address", value)} />

            <Picker selectedValue={form.specialization} onValueChange={(value) => handleChange("specialization", value)} style={Mystyle.inputSetappointmentdoc}>
              <Picker.Item label="Specialization*" value="" />
              <Picker.Item label="Obstetrics Gynecology" value="Obstetrics Gynecology" />
              <Picker.Item label="Rehabilitation Medicine" value="Rehabilitation Medicine" />
              <Picker.Item label="Cardiology" value="Cardiology" />
            </Picker>

            <Picker selectedValue={form.doctor} onValueChange={(value) => handleChange("doctor", value)} style={Mystyle.inputSetappointmentdoc}>
              <Picker.Item label="Doctor*" value="" />
              <Picker.Item label="De Guzman, Jat" value="De Guzman, Jat" />
              <Picker.Item label="Alarcon, Mark" value="Alarcon, Mark" />
              <Picker.Item label="Brian, Yvonne" value="Brian, Yvonne" />
            </Picker>

            <TextInput style={Mystyle.inputSetappointment} keyboardType="decimal-pad" placeholder="mm/dd/yyyy*" placeholderTextColor="white" onChangeText={(value) => handleChange("date", value)} />
            <TextInput style={Mystyle.inputSetappointment} placeholder="Time*" placeholderTextColor="white" onChangeText={(value) => handleChange("time", value)} />
            <TextInput style={Mystyle.inputSetappointment} placeholder="Reason for Visit*" placeholderTextColor="white" onChangeText={(value) => handleChange("reason", value)} multiline />

            <TouchableOpacity style={Mystyle.buttonSetappointment} onPress={handleSubmit}>
              <Text style={Mystyle.buttonTextSetappointment}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Verification Modal */}
      <Modal transparent visible={isModalVisible} animationType="slide">
  <View style={Mystyle.modalBackground}>
    <View style={Mystyle.verificationPopupContainer}>
      <Text style={Mystyle.verificationPopupTitle}>Verification</Text>
      <Text style={Mystyle.verificationPopupText}>Name: {form.name}</Text>
      <Text style={Mystyle.verificationPopupText}>Phone: {form.phone}</Text>
      <Text style={Mystyle.verificationPopupText}>Birthday: {form.birthday}</Text>
      <Text style={Mystyle.verificationPopupText}>Address: {form.address}</Text>
      <Text style={Mystyle.verificationPopupText}>Doctor: {form.doctor}</Text>
      <Text style={Mystyle.verificationPopupText}>Specialization: {form.specialization}</Text>
      <Text style={Mystyle.verificationPopupText}>Date: {form.date}</Text>
      <Text style={Mystyle.verificationPopupText}>Time: {form.time}</Text>
      <Text style={Mystyle.verificationPopupText}>Reason for Visit: {form.reason}</Text>
      <Text style={Mystyle.verificationNoteText}>
        NOTE: Your appointment isn't confirmed yet. We will call you for final confirmation.
      </Text>
      <View style={Mystyle.verificationModalButtonContainer}>
        <TouchableOpacity style={Mystyle.verificationModalButton} onPress={handleEdit}>
          <Text style={Mystyle.verificationModalButtonText}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Mystyle.verificationModalButton} onPress={handleConfirm}>
          <Text style={Mystyle.verificationModalButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
    </SafeAreaView>
  );
};

export default AppointmentForm;