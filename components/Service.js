// import React, { useState } from "react";
// import {View,Text,TouchableOpacity,ScrollView,SafeAreaView,StyleSheet,
// } from "react-native";
// import { Menu, ChevronDown } from "lucide-react-native";
// import { Mystyle } from "./Mystyle";
// import { useNavigation } from "@react-navigation/native";



// const Service = () => {
//     // const navigation = useNavigation(); 
//     // const goToService = () => {
//     //     navigation.navigate("Service"); 
//     // }

//   const [expanded, setExpanded] = useState(null);

//   const toggleDropdown = (service) => {
//     setExpanded(expanded === service ? null : service);
//   };

//   return (
//     <SafeAreaView style={Mystyle.containerService}>
//       {/* Header */}
//       <View style={Mystyle.headerService}>
//         {/* Placeholder for Logo */}
//         <Text style={Mystyle.logoTextService}>ImmaCare+</Text>
//         <Menu color="#1e3a8a" size={24} />
//       </View>

//       {/* Content */}
//       <ScrollView contentContainerStyle={Mystyle.contentContainerService}>
//         <Text style={Mystyle.sectionTitleService}>Our Services</Text>

//         {/* Service Buttons with Dropdowns */}
//         {[
//           "Diagnostics",
//           "Maternal & Reproductive Health",
//           "Pediatric",
//           "Internal Medicine",
//           "HMO",
//         ].map((service, index) => (
//           <View key={index} style={Mystyle.serviceContainerService}>
//             <TouchableOpacity
//               onPress={() => toggleDropdown(service)}
//               style={Mystyle.serviceButtonService}
//             >
//               <Text style={Mystyle.serviceTextService}>{service}</Text>
//               <ChevronDown color="#fff" size={20} />
//             </TouchableOpacity>
//             {expanded === service && (
//               <View style={Mystyle.dropdownContentService}>
//                 <Text style={Mystyle.dropdownTextService}>
//                   Details about {service}
//                 </Text>
//               </View>
//             )}
//           </View>
//         ))}

//         {/* Contact Section */}
//         <View style={Mystyle.contactSectionService}>
//           <Text style={Mystyle.contactTitleService}>LYING IN</Text>
//           <Text style={Mystyle.contactSubtitleService}>24/7</Text>
//           <Text style={Mystyle.contactLabelService}>CONTACT US:</Text>
//           <Text style={Mystyle.contactNumberService}>0912 3456 789</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default Service;


 import React, { useState } from "react";
import {View,Text,TouchableOpacity,ScrollView,SafeAreaView,StyleSheet,
} from "react-native";
import { Menu, ChevronDown, ArrowLeft } from "lucide-react-native";
import { Mystyle } from "./Mystyle";
import { useNavigation } from "@react-navigation/native";

const Service = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const [expanded, setExpanded] = useState(null);

  const toggleDropdown = (service) => {
    setExpanded(expanded === service ? null : service);
  };

  return (
    <SafeAreaView style={Mystyle.containerService}>
      {/* Header */}
      <View style={Mystyle.headerService}>
        {/* Back Button */}
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft color="#1e3a8a" size={24} />
        </TouchableOpacity>
        {/* Placeholder for Logo */}
        <Text style={Mystyle.logoTextService}>ImmaCare+</Text>
        <Menu color="#1e3a8a" size={24} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={Mystyle.contentContainerService}>
        <Text style={Mystyle.sectionTitleService}>Our Services</Text>

        {/* Service Buttons with Dropdowns */}
        {[
          "Diagnostics",
          "Maternal & Reproductive Health",
          "Pediatric",
          "Internal Medicine",
          "HMO",
        ].map((service, index) => (
          <View key={index} style={Mystyle.serviceContainerService}>
            <TouchableOpacity
              onPress={() => toggleDropdown(service)}
              style={Mystyle.serviceButtonService}
            >
              <Text style={Mystyle.serviceTextService}>{service}</Text>
              <ChevronDown color="#fff" size={20} />
            </TouchableOpacity>
            {expanded === service && (
              <View style={Mystyle.dropdownContentService}>
                <Text style={Mystyle.dropdownTextService}>
                  Details about {service}
                </Text>
              </View>
            )}
          </View>
        ))}

        {/* Contact Section */}
        <View style={Mystyle.contactSectionService}>
          <Text style={Mystyle.contactTitleService}>LYING IN</Text>
          <Text style={Mystyle.contactSubtitleService}>24/7</Text>
          <Text style={Mystyle.contactLabelService}>CONTACT US:</Text>
          <Text style={Mystyle.contactNumberService}>0912 3456 789</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Service;
