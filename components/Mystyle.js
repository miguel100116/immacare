import React from "react";
import { StyleSheet } from "react-native";

export const Mystyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7e7",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 60,
  },

  box: {
    width: 340,
    padding: 20,
    borderColor: "black",
  },

  logo: {
    height: 90,
    width: 80,
    borderRadius: 10,
    marginBottom: 40,
    alignSelf: "center",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },

  // DASHBOARD DESIGN
  containerDashbord: {
    flex: 1,
    backgroundColor: "#EEECDE",
  flexDirection: "row"
  },

  header: {
    width: "100%",
    backgroundColor: "#EEECDE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop:40,
  },

  logo: {
    height: 80,
    width: 100,
    resizeMode: "contain",
  },

  // CONTACT US SECTION
  contactContainer: {
    backgroundColor: "#40587C",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },

  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },

  contactIcon: {
    backgroundColor: "#0B2447",
    padding: 15,
    borderRadius: 10,
  },

  // BUTTONS SECTION
  buttonContainer: {
    marginTop: 20,
    width:'100%',
    alignItems:"center",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#001C5C",
    width:"85%",
    padding: 50,
    borderRadius: 20,
    marginVertical: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },

  // SIDE NAVIGATION BAR
  sideNavContainer: {
    position: "absolute",
    right: 0, // Move sidebar to the right
    top: 0,
    width: 250,
    height: "100%",
    backgroundColor: "#001C5C",
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  
  sideNavCloseButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  
  sideNavItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  
  sideNavText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  
  logoutButton: {
    marginTop: 30,
    color:'white',
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
 
  },
  
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  //PROFILE CSS
  containerProfile: {
    flex: 1,
    backgroundColor: "#EEECDE",
    alignItems: "center",
  },
  headerProfile: {
    backgroundColor: "#001C5C",
    width: "100%",
    height: 298,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  // backButton: {
  //   position: "absolute",
  //   left: 20,
  //   top: 50,
  //   marginTop:5,
  // },
  backButton: {
    position: "absolute",
    top: 20, // Adjust for better vertical alignment
    left: 20, // Push it to the left corner
    zIndex:20, // Ensure it's above other elements
  },
  
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  profilePictureContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  profileIcon: {
    backgroundColor: "transparent",

  },
  form: {
    width: "90%",
    marginTop: 80,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 20,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#001C5C",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  //setAppointmentcss
  containerSetappointment: {
    padding: 20,
    backgroundColor: '#EEECDE',
    flex: 1,
    justifyContent: 'center',
  
  },
  titleSetappointment: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'navy'
  },
  noteSetappointment: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 15
  },
  sectionTitleSetappointment: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'navy'
  },
  inputSetappointment: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation:4,
  },
  buttonSetappointment: {
    backgroundColor: 'navy',
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonTextSetappointment: {
    color: 'white',
    fontWeight: 'bold'
  },
  //LOGIN CSS
  containerLoginpage: {
    flex: 1,
    backgroundColor: "#EAE0C8", // Beige background
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainerLoginpage: {
    marginBottom: 20,
  },
  logoTextLoginpage: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0A214A", // Dark Blue
  },
  loginTextLoginpage: {
    fontSize: 18,
    color: "#0A214A",
    marginBottom: 20,
  },
  inputContainerLoginpage: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  inputLoginpage: {
    flex: 1,
    height: 50,
  },
  loginButtonLoginpage: {
    backgroundColor: "#0A214A", // Dark Blue
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
  },
  loginButtonTextLoginpage: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerTextLoginpage: {
    marginTop: 15,
    color: "black",
  },
  registerLinkLoginpage: {
    color: "#001C5C",
    fontWeight: "bold",
  },


//our service css
containerService: {
  flex: 1,
  backgroundColor: '#fff7e7',
},
headerService: {
  marginTop:20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 16,
  backgroundColor: '#fff7e7',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
},
logoTextService: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#1e3a8a',
},
contentContainerService: {
  padding: 16,
},
sectionTitleService: {
  fontSize: 18,
  fontWeight: '600',
  color: '#1e3a8a',
  marginBottom: 16,
},
serviceContainerService: {
  marginBottom: 12,
},
serviceButtonService: {
  backgroundColor: '#001C5C',
  borderRadius: 20,
  paddingVertical: 20,
  margin:12,
  paddingHorizontal: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
},
serviceTextService: {
  color: '#fff',
  fontWeight: '600',
},
dropdownContentService: {
  backgroundColor: 'lightblue',
  borderRadius: 12,
  padding: 12,
  margin:12,
  marginTop: 0,
},
dropdownTextService: {
  color: '#1e3a8a',
},
contactSectionService: {
  backgroundColor: '#001C5C',
  borderRadius: 16,
  padding: 20,
  marginTop: 24,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 6,
},
contactTitleService: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 16,
},
contactSubtitleService: {
  color: '#fff',
  marginTop: 4,
},
contactLabelService: {
  color: '#fff',
  marginTop: 12,
  fontWeight: '600',
},
contactNumberService: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 4,
},


//doctors css
doctorsContainer: {
  flex: 1,
  backgroundColor: '#EEECDE',
},
doctorsContentContainer: {
  padding: 20,
},
doctorsSectionTitle: {
  fontSize: 28,
  fontWeight: 'bold',
  color: '#1e3a8a',
  textAlign: 'center',
  marginBottom: 20,
},
doctorsFiltersContainer: {
  marginBottom: 20,
},
doctorsDropdownFilterContainer: {
  marginBottom: 12,
},
doctorsDropdownButton: {
  backgroundColor: '#1e3a8a',
  padding: 14,
  borderRadius: 16,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
doctorsDropdownButtonText: {
  color: '#fff',
  fontSize: 16,
},
dropdownOptions: {
  backgroundColor: '#e0e7ff',
  borderRadius: 12,
  marginTop: 5,
  padding: 10,
},
dropdownOption: {
  paddingVertical: 8,
},
seeAllButton: {
  backgroundColor: '#2563eb',
  padding: 12,
  borderRadius: 12,
  marginTop: 10,
},
seeAllButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
},
doctorsDoctorCardsContainer: {
  gap: 20,
},
doctorsDoctorCard: {
  backgroundColor: '#1e3a8a',
  padding: 20,
  borderRadius: 20,
  flexDirection: 'row',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
},
doctorsDoctorIcon: {
  width: 80,
  height: 80,
  borderRadius: 40,
  backgroundColor: '#e0e7ff',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 16,
},
doctorsDoctorDetails: {
  flex: 1,
},
doctorsDoctorName: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
},
doctorsDoctorSpecialization: {
  color: '#d1d5db',
  fontSize: 16,
  marginVertical: 4,
},
doctorsDoctorAvailability: {
  color: '#d1d5db',
  fontSize: 14,
},
doctorsDoctorType: {
  color: '#d1d5db',
  fontSize: 14,
  marginBottom: 10,
},
doctorsAppointmentButton: {
  backgroundColor: '#f8f5f0',
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 10,
},
doctorsAppointmentButtonText: {
  color: '#1e3a8a',
  fontWeight: 'bold',
  textAlign: 'center',
},
});







