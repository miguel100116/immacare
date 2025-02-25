// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
// import { ChevronDown } from 'lucide-react-native';

// const MeetOurDoctors = () => {
//   const [specialization, setSpecialization] = useState(null);
//   const [doctorName, setDoctorName] = useState(null);
//   const [hmo, setHmo] = useState(null);
//   const [expanded, setExpanded] = useState(null);

//   const toggleDropdown = (dropdown) => {
//     setExpanded(expanded === dropdown ? null : dropdown);
//   };

//   // Dummy doctor data
//   const doctors = [
//     {
//       name: 'De Guzman, Jat',
//       specialization: 'Obstetrics Gynecology',
//       availability: 'Monday & Wednesday - 10:00AM - 12:00PM',
//       type: 'Cash Only',
//     },
//     {
//       name: 'Alarcon, Mark',
//       specialization: 'Rehabilitation Medicine',
//       availability: 'Tuesday - 1:00PM - 3:00PM',
//       type: 'HMO Accepted',
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.doctorsContainer}>
//       <ScrollView contentContainerStyle={styles.doctorsContentContainer}>
//         <Text style={styles.doctorsSectionTitle}>Meet Our Doctors</Text>

//         {/* Dropdown Filters */}
//         <View style={styles.doctorsFiltersContainer}>
//           {['Specialization', "Doctor's Name", 'HMO'].map((filter, index) => (
//             <View key={index} style={styles.doctorsDropdownFilterContainer}>
//               <TouchableOpacity onPress={() => toggleDropdown(filter)} style={styles.doctorsDropdownButton}>
//                 <Text style={styles.doctorsDropdownButtonText}>{filter}</Text>
//                 <ChevronDown color="#fff" size={20} />
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>

//         {/* Doctor Cards */}
//         <View style={styles.doctorsDoctorCardsContainer}>
//           {doctors.map((doctor, index) => (
//             <View key={index} style={styles.doctorsDoctorCard}>
//               <View style={styles.doctorsDoctorImagePlaceholder} />
//               <View style={styles.doctorsDoctorDetails}>
//                 <Text style={styles.doctorsDoctorName}>{doctor.name}</Text>
//                 <Text style={styles.doctorsDoctorSpecialization}>{doctor.specialization}</Text>
//                 <Text style={styles.doctorsDoctorAvailability}>{doctor.availability}</Text>
//                 <Text style={styles.doctorsDoctorType}>{doctor.type}</Text>
//                 <TouchableOpacity style={styles.doctorsAppointmentButton}>
//                   <Text style={styles.doctorsAppointmentButtonText}>Schedule an Appointment</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
// import { ChevronDown, Male, Female } from 'lucide-react-native';

// const MeetOurDoctors = () => {
//   const [specialization, setSpecialization] = useState(null);
//   const [doctorName, setDoctorName] = useState(null);
//   const [hmo, setHmo] = useState(null);
//   const [expanded, setExpanded] = useState(null);

//   const toggleDropdown = (dropdown) => {
//     setExpanded(expanded === dropdown ? null : dropdown);
//   };

//   // Dummy doctor data with gender
//   const doctors = [
//     {
//       name: 'De Guzman, Jat',
//       specialization: 'Obstetrics Gynecology',
//       availability: 'Monday & Wednesday - 10:00AM - 12:00PM',
//       type: 'Cash Only',
//       gender: 'female',
//     },
//     {
//       name: 'Alarcon, Mark',
//       specialization: 'Rehabilitation Medicine',
//       availability: 'Tuesday - 1:00PM - 3:00PM',
//       type: 'HMO Accepted',
//       gender: 'male',
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.doctorsContainer}>
//       <ScrollView contentContainerStyle={styles.doctorsContentContainer}>
//         <Text style={styles.doctorsSectionTitle}>Meet Our Doctors</Text>

//         {/* Dropdown Filters */}
//         <View style={styles.doctorsFiltersContainer}>
//           {['Specialization', "Doctor's Name", 'HMO'].map((filter, index) => (
//             <View key={index} style={styles.doctorsDropdownFilterContainer}>
//               <TouchableOpacity onPress={() => toggleDropdown(filter)} style={styles.doctorsDropdownButton}>
//                 <Text style={styles.doctorsDropdownButtonText}>{filter}</Text>
//                 <ChevronDown color="#fff" size={20} />
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>

//         {/* Doctor Cards */}
//         <View style={styles.doctorsDoctorCardsContainer}>
//           {doctors.map((doctor, index) => (
//             <View key={index} style={styles.doctorsDoctorCard}>
//               <View style={styles.doctorsDoctorImagePlaceholder}>
//                 {doctor.gender === 'male' ? (
//                   <Male color="#1e3a8a" size={40} />
//                 ) : (
//                   <Female color="#1e3a8a" size={40} />
//                 )}
//               </View>
//               <View style={styles.doctorsDoctorDetails}>
//                 <Text style={styles.doctorsDoctorName}>{doctor.name}</Text>
//                 <Text style={styles.doctorsDoctorSpecialization}>{doctor.specialization}</Text>
//                 <Text style={styles.doctorsDoctorAvailability}>{doctor.availability}</Text>
//                 <Text style={styles.doctorsDoctorType}>{doctor.type}</Text>
//                 <TouchableOpacity style={styles.doctorsAppointmentButton}>
//                   <Text style={styles.doctorsAppointmentButtonText}>Schedule an Appointment</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default Doctors;


// legit before testing
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faUserDoctor, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { useNavigation } from '@react-navigation/native';
// import { Mystyle } from './Mystyle';

// const MeetOurDoctors = () => {
//   const [specialization, setSpecialization] = useState(null);
//   const [doctorName, setDoctorName] = useState(null);
//   const [hmo, setHmo] = useState(null);
//   const [expanded, setExpanded] = useState(null);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const navigation = useNavigation();

//   // Dummy doctor data
//   const doctors = [
//     {
//       name: 'De Guzman, Jat',
//       specialization: 'Obstetrics Gynecology',
//       availability: 'Monday & Wednesday - 10:00AM - 12:00PM',
//       type: 'Cash Only',
//     },
//     {
//       name: 'Alarcon, Mark',
//       specialization: 'Rehabilitation Medicine',
//       availability: 'Tuesday - 1:00PM - 3:00PM',
//       type: 'HMO Accepted',
//     },
//     {
//       name: 'Santos, Maria',
//       specialization: 'Cardiology',
//       availability: 'Friday - 9:00AM - 11:00AM',
//       type: 'HMO Accepted',
//     },
//   ];

//   // Dropdown options
//   const filterOptions = {
//     Specialization: [...new Set(doctors.map((doc) => doc.specialization))],
//     "Doctor's Name": [...new Set(doctors.map((doc) => doc.name))],
//     HMO: [...new Set(doctors.map((doc) => doc.type))],
//   };

//   // Apply filters whenever filter criteria change
//   useEffect(() => {
//     const filtered = doctors.filter((doctor) => {
//       return (
//         (!specialization || doctor.specialization === specialization) &&
//         (!doctorName || doctor.name.toLowerCase().trim() === doctorName.toLowerCase().trim()) &&
//         (!hmo || doctor.type === hmo)
//       );
//     });
//     setFilteredDoctors(filtered);
//   }, [specialization, doctorName, hmo]);

//   const toggleDropdown = (dropdown) => {
//     setExpanded(expanded === dropdown ? null : dropdown);
//   };

//   const resetFilters = () => {
//     setSpecialization(null);
//     setDoctorName(null);
//     setHmo(null);
//   };

//   const handleAppointment = (doctor) => {
//     navigation.navigate('Appointment', { doctor });
//   };

//   return (
//     <SafeAreaView style={Mystyle.doctorsContainer}>
//       {/* Back Icon */}
//       <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Dashboard')} style={Mystyle.backButton}>
//         <FontAwesomeIcon icon={faArrowLeft} size={24} color="#1e3a8a" />
//       </TouchableOpacity>

//       <ScrollView contentContainerStyle={Mystyle.doctorsContentContainer}>
//         <Text style={Mystyle.doctorsSectionTitle}>Meet Our Doctors</Text>

//         {/* Dropdown Filters */}
//         <View style={Mystyle.doctorsFiltersContainer}>
//           {['Specialization', "Doctor's Name", 'HMO'].map((filter, index) => (
//             <View key={index} style={Mystyle.doctorsDropdownFilterContainer}>
//               <TouchableOpacity onPress={() => toggleDropdown(filter)} style={Mystyle.doctorsDropdownButton}>
//                 <Text style={Mystyle.doctorsDropdownButtonText}>
//                   {filter}: {filter === 'Specialization' && specialization ? specialization : filter === "Doctor's Name" && doctorName ? doctorName : filter === 'HMO' && hmo ? hmo : 'All'}
//                 </Text>
//               </TouchableOpacity>
//               {expanded === filter && (
//                 <View style={Mystyle.dropdownOptions}>
//                   {filterOptions[filter].map((option, optionIndex) => (
//                     <TouchableOpacity
//                       key={optionIndex}
//                       onPress={() => {
//                         if (filter === 'Specialization') setSpecialization(option);
//                         else if (filter === "Doctor's Name") setDoctorName(option);
//                         else if (filter === 'HMO') setHmo(option);
//                         setExpanded(null);
//                       }}
//                       style={Mystyle.dropdownOption}
//                     >
//                       <Text>{option}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               )}
//             </View>
//           ))}
//           <TouchableOpacity onPress={resetFilters} style={Mystyle.seeAllButton}>
//             <Text style={Mystyle.seeAllButtonText}>See All Doctors</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Doctor Cards */}
//         <View style={Mystyle.doctorsDoctorCardsContainer}>
//           {filteredDoctors.map((doctor, index) => (
//             <View key={index} style={Mystyle.doctorsDoctorCard}>
//               <View style={Mystyle.doctorsDoctorIcon}>
//                 <FontAwesomeIcon icon={faUserDoctor} size={40} color="#1e3a8a" />
//               </View>
//               <View style={Mystyle.doctorsDoctorDetails}>
//                 <Text style={Mystyle.doctorsDoctorName}>{doctor.name}</Text>
//                 <Text style={Mystyle.doctorsDoctorSpecialization}>{doctor.specialization}</Text>
//                 <Text style={Mystyle.doctorsDoctorAvailability}>{doctor.availability}</Text>
//                 <Text style={Mystyle.doctorsDoctorType}>{doctor.type}</Text>
//                 <TouchableOpacity
//                   style={Mystyle.doctorsAppointmentButton}
//                   onPress={() => handleAppointment(doctor)}
//                 >
//                   <Text style={Mystyle.doctorsAppointmentButtonText}>Schedule an Appointment</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default MeetOurDoctors;

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserDoctor, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { Mystyle } from './Mystyle';

const MeetOurDoctors = () => {
  const [specialization, setSpecialization] = useState(null);
  const [doctorName, setDoctorName] = useState(null);
  const [hmo, setHmo] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const navigation = useNavigation();

  // Dummy doctor data
  const doctors = [
    {
      name: 'De Guzman, Jat',
      specialization: 'Obstetrics Gynecology',
      availability: 'Monday & Wednesday - 10:00AM - 12:00PM',
      type: 'Cash Only',
    },
    {
      name: 'Alarcon, Mark',
      specialization: 'Rehabilitation Medicine',
      availability: 'Tuesday - 1:00PM - 3:00PM',
      type: 'HMO Accepted',
    },
    {
      name: 'Brian, Yvonne',
      specialization: 'Cardiology',
      availability: 'Friday - 9:00AM - 11:00AM',
      type: 'HMO Accepted',
    },
  ];

  // Dropdown options
  const filterOptions = {
    Specialization: [...new Set(doctors.map((doc) => doc.specialization))],
    "Doctor's Name": [...new Set(doctors.map((doc) => doc.name))],
    HMO: [...new Set(doctors.map((doc) => doc.type))],
  };

  // Apply filters whenever filter criteria change
  useEffect(() => {
    const filtered = doctors.filter((doctor) => {
      return (
        (!specialization || doctor.specialization === specialization) &&
        (!doctorName || doctor.name.toLowerCase().trim() === doctorName.toLowerCase().trim()) &&
        (!hmo || doctor.type === hmo)
      );
    });
    setFilteredDoctors(filtered);
  }, [specialization, doctorName, hmo]);

  const toggleDropdown = (dropdown) => {
    setExpanded(expanded === dropdown ? null : dropdown);
  };

  const resetFilters = () => {
    setSpecialization(null);
    setDoctorName(null);
    setHmo(null);
  };

  const handleAppointment = (doctor) => {
    navigation.navigate('Appointment', {
      doctorName: doctor.name,
      specialization: doctor.specialization,
    });
  };

  return (
    <SafeAreaView style={Mystyle.doctorsContainer}>
      <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Dashboard')} style={Mystyle.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="#1e3a8a" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={Mystyle.doctorsContentContainer}>
        <Text style={Mystyle.doctorsSectionTitle}>Meet Our Doctors</Text>

        <View style={Mystyle.doctorsFiltersContainer}>
          {['Specialization', "Doctor's Name", 'HMO'].map((filter, index) => (
            <View key={index} style={Mystyle.doctorsDropdownFilterContainer}>
              <TouchableOpacity onPress={() => toggleDropdown(filter)} style={Mystyle.doctorsDropdownButton}>
                <Text style={Mystyle.doctorsDropdownButtonText}>
                  {filter}: {filter === 'Specialization' && specialization ? specialization : filter === "Doctor's Name" && doctorName ? doctorName : filter === 'HMO' && hmo ? hmo : 'All'}
                </Text>
              </TouchableOpacity>
              {expanded === filter && (
                <View style={Mystyle.dropdownOptions}>
                  {filterOptions[filter].map((option, optionIndex) => (
                    <TouchableOpacity
                      key={optionIndex}
                      onPress={() => {
                        if (filter === 'Specialization') setSpecialization(option);
                        else if (filter === "Doctor's Name") setDoctorName(option);
                        else if (filter === 'HMO') setHmo(option);
                        setExpanded(null);
                      }}
                      style={Mystyle.dropdownOption}
                    >
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
          <TouchableOpacity onPress={resetFilters} style={Mystyle.seeAllButton}>
            <Text style={Mystyle.seeAllButtonText}>See All Doctors</Text>
          </TouchableOpacity>
        </View>

        <View style={Mystyle.doctorsDoctorCardsContainer}>
          {filteredDoctors.map((doctor, index) => (
            <View key={index} style={Mystyle.doctorsDoctorCard}>
              <View style={Mystyle.doctorsDoctorIcon}>
                <FontAwesomeIcon icon={faUserDoctor} size={40} color="#1e3a8a" />
              </View>
              <View style={Mystyle.doctorsDoctorDetails}>
                <Text style={Mystyle.doctorsDoctorName}>{doctor.name}</Text>
                <Text style={Mystyle.doctorsDoctorSpecialization}>{doctor.specialization}</Text>
                <Text style={Mystyle.doctorsDoctorAvailability}>{doctor.availability}</Text>
                <Text style={Mystyle.doctorsDoctorType}>{doctor.type}</Text>
                <TouchableOpacity
                  style={Mystyle.doctorsAppointmentButton}
                  onPress={() => handleAppointment(doctor)}
                >
                  <Text style={Mystyle.doctorsAppointmentButtonText}>Schedule an Appointment</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MeetOurDoctors;



