// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Mystyle } from "./Mystyle";
// import { useNavigation } from '@react-navigation/native';
// import { Button } from "react-native-paper";
// import {  ArrowLeft } from "lucide-react-native";


// const Profile = () => {
//     const navigation = useNavigation(); 
    
    
//     const goBack = () => {
//       navigation.goBack();
//     };


//     const goToDashboard = () => {
//         navigation.navigate("Dashboard"); 
//     }
//     return (
//     <View style={Mystyle.containerProfile}>
//       {/* Header Section */}
//         <View style={Mystyle.headerProfile}>
//         <TouchableOpacity onPress={goBack} style={{position:'absolute', padding:60, paddingRight:400,}}>
//           <ArrowLeft color="white" size={24} />
//         </TouchableOpacity>
//         <Text style={Mystyle.headerText}>Profile</Text>
//         </View>

//       {/* Profile Picture */}
//     <View style={Mystyle.profilePictureContainer}>
//         <Icon name="user-circle" size={120} color="white" style={Mystyle.profileIcon} />
//     </View>

//       {/* Form Inputs */}
//         <View style={Mystyle.form}>
//         <TextInput style={Mystyle.input} placeholder="Username" placeholderTextColor="#666" />
//         <TextInput style={Mystyle.input} placeholder="Email" placeholderTextColor="#666" />
//         <TextInput style={Mystyle.input} placeholder="Phone" placeholderTextColor="#666" keyboardType="phone-pad" />
//         <TextInput style={Mystyle.input} placeholder="Address" placeholderTextColor="#666" />
//         <TextInput style={Mystyle.input} placeholder="Birthday" placeholderTextColor="#666" keyboardType="phone-pad"/>
//         </View>

//       {/* Logout Button */}
//         <TouchableOpacity style={Mystyle.logoutButton}>
//         <Text style={Mystyle.logoutText}>LOGOUT</Text>
//     </TouchableOpacity>
//     </View>
// );
// };
// export default Profile;






// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Mystyle } from "./Mystyle";
// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeft } from "lucide-react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Profile = () => {
//   const navigation = useNavigation();
//   const [userData, setUserData] = useState({});

//   const goBack = () => {
//     navigation.goBack();
//   };

//   const fetchUserData = async () => {
//     try {
//       const storedUserData = await AsyncStorage.getItem("user");
//       if (storedUserData) {
//         setUserData(JSON.parse(storedUserData));
//       }
//     } catch (error) {
//       console.error("Failed to fetch user data", error);
//     }
//   };

//   const handleLogout = () => {
//     Alert.alert("Logout", "Are you sure you want to logout?", [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "OK",
//         onPress: () => {
//           navigation.navigate("Login");
//         },
//       },
//     ]);
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <View style={Mystyle.containerProfile}>
//       <View style={Mystyle.headerProfile}>
//         <TouchableOpacity onPress={goBack} style={{ position: "absolute", padding: 60, paddingRight: 400 }}>
//           <ArrowLeft color="white" size={24} />
//         </TouchableOpacity>
//         <Text style={Mystyle.headerText}>Profile</Text>
//       </View>

//       <View style={Mystyle.profilePictureContainer}>
//         <Icon name="user-circle" size={120} color="white" style={Mystyle.profileIcon} />
//       </View>

//       <View style={Mystyle.form}>
//         <TextInput style={Mystyle.input} value={userData.name} placeholder="Username" placeholderTextColor="#666" editable={false} />
//         <TextInput style={Mystyle.input} value={userData.email} placeholder="Email" placeholderTextColor="#666" editable={false} />
//         <TextInput style={Mystyle.input} value={userData.mobile} placeholder="Phone" placeholderTextColor="#666" editable={false} />
//         <TextInput style={Mystyle.input} value={userData.address} placeholder="Address" placeholderTextColor="#666" editable={false} />
//         <TextInput style={Mystyle.input} value={userData.age} placeholder="Birthday" placeholderTextColor="#666" editable={false} />
//       </View>

//       <TouchableOpacity style={Mystyle.logoutButton} onPress={handleLogout}>
//         <Text style={Mystyle.logoutText}>LOGOUT</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Profile;













// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Mystyle } from "./Mystyle";
// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeft, Edit3, Save } from "lucide-react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Profile = () => {
//   const navigation = useNavigation();
//   const [userData, setUserData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);

//   const goBack = () => {
//     navigation.goBack();
//   };

//   const fetchUserData = async () => {
//     try {
//       const storedUserData = await AsyncStorage.getItem("user");
//       if (storedUserData) {
//         setUserData(JSON.parse(storedUserData));
//       }
//     } catch (error) {
//       console.error("Failed to fetch user data", error);
//     }
//   };

//   const handleLogout = () => {
//     Alert.alert("Logout", "Are you sure you want to logout?", [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "OK",
//         onPress: () => {
//           navigation.navigate("Login");
//         },
//       },
//     ]);
//   };

//   const handleSave = async () => {
//     try {
//       await AsyncStorage.setItem("user", JSON.stringify(userData));
//       setIsEditing(false);
//       Alert.alert("Success", "Profile updated successfully!");
//     } catch (error) {
//       console.error("Failed to save user data", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <View style={Mystyle.containerProfile}>
//       <View style={Mystyle.headerProfile}>
//         <TouchableOpacity onPress={goBack} style={{ position: "absolute", padding: 60, paddingRight: 400 }}>
//           <ArrowLeft color="white" size={24} />
//         </TouchableOpacity>
//         <Text style={Mystyle.headerText}>Profile</Text>
//         <TouchableOpacity onPress={() => setIsEditing(!isEditing)} style={{ position: "absolute", right: 20, top: 60 }}>
//           {isEditing ? <Save color="white" size={24} /> : <Edit3 color="white" size={24} />}
//         </TouchableOpacity>
//       </View>

//       <View style={Mystyle.profilePictureContainer}>
//         <Icon name="user-circle" size={120} color="white" style={Mystyle.profileIcon} />
//       </View>

//       <View style={Mystyle.form}>
//         <TextInput style={Mystyle.input} value={userData.name} placeholder="Username" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, name: text })} />
//         <TextInput style={Mystyle.input} value={userData.email} placeholder="Email" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, email: text })} />
//         <TextInput style={Mystyle.input} value={userData.mobile} placeholder="Phone" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, mobile: text })} />
//         <TextInput style={Mystyle.input} value={userData.address} placeholder="Address" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, address: text })} />
//         <TextInput style={Mystyle.input} value={userData.age} placeholder="Birthday" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, age: text })} />
//       </View>

//       {isEditing && (
//         <TouchableOpacity style={Mystyle.logoutButton} onPress={handleSave}>
//           <Text style={Mystyle.logoutText}>SAVE</Text>
//         </TouchableOpacity>
//       )}

//       {!isEditing && (
//         <TouchableOpacity style={Mystyle.logoutButton} onPress={handleLogout}>
//           <Text style={Mystyle.logoutText}>LOGOUT</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default Profile;



// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Mystyle } from "./Mystyle";
// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeft, Edit3, Save } from "lucide-react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Profile = () => {
//   const navigation = useNavigation();
//   const [userData, setUserData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);

//   const goBack = () => {
//     navigation.goBack();
//   };

//   const fetchUserData = async () => {
//     try {
//       const storedUserData = await AsyncStorage.getItem("user");
//       if (storedUserData) {
//         setUserData(JSON.parse(storedUserData));
//       }
//     } catch (error) {
//       console.error("Failed to fetch user data", error);
//     }
//   };

//   const handleLogout = () => {
//     Alert.alert("Logout", "Are you sure you want to logout?", [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "OK",
//         onPress: () => {
//           navigation.navigate("Login");
//         },
//       },
//     ]);
//   };

//   const handleSave = async () => {
//     try {
//       await AsyncStorage.setItem("user", JSON.stringify(userData));
//       setIsEditing(false);
//       Alert.alert("Success", "Profile updated successfully!");
//     } catch (error) {
//       console.error("Failed to save user data", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <View style={Mystyle.containerProfile}>
//       <View style={Mystyle.headerProfile}>
//         <TouchableOpacity onPress={goBack} style={{ position: "absolute", padding: 60, paddingRight: 400 }}>
//           <ArrowLeft color="white" size={24} />
//         </TouchableOpacity>
//         <Text style={Mystyle.headerText}>Profile</Text>
//         <TouchableOpacity onPress={() => setIsEditing(!isEditing)} style={{ position: "absolute", right: 20, top: 60 }}>
//           {isEditing ? <Save color="white" size={24} /> : <Edit3 color="white" size={24} />}
//         </TouchableOpacity>
//       </View>

//       <View style={Mystyle.profilePictureContainer}>
//         <Icon name="user-circle" size={120} color="white" style={Mystyle.profileIcon} />
//       </View>

//       <View style={Mystyle.form}>
//         <Text style={Mystyle.label}>Username</Text>
//         <TextInput style={Mystyle.input} value={userData.name} placeholder="Username" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, name: text })} />

//         <Text style={Mystyle.label}>Email</Text>
//         <TextInput style={Mystyle.input} value={userData.email} placeholder="Email" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, email: text })} />

//         <Text style={Mystyle.label}>Phone</Text>
//         <TextInput style={Mystyle.input} value={userData.mobile} placeholder="Phone" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, mobile: text })} />

//         <Text style={Mystyle.label}>Address</Text>
//         <TextInput style={Mystyle.input} value={userData.address} placeholder="Address" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, address: text })} />

//         <Text style={Mystyle.label}>Birthday</Text>
//         <TextInput style={Mystyle.input} value={userData.age} placeholder="Birthday" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, age: text })} />
//       </View>

//       {isEditing && (
//         <TouchableOpacity style={Mystyle.logoutButton} onPress={handleSave}>
//           <Text style={Mystyle.logoutText}>SAVE</Text>
//         </TouchableOpacity>
//       )}

//       {!isEditing && (
//         <TouchableOpacity style={Mystyle.logoutButton} onPress={handleLogout}>
//           <Text style={Mystyle.logoutText}>LOGOUT</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default Profile;













//legitttttt

// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Mystyle } from "./Mystyle";
// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeft, Edit3, Save } from "lucide-react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Profile = () => {
//   const navigation = useNavigation();
//   const [userData, setUserData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);

//   const goBack = () => {
//     navigation.goBack();
//   };

//   const fetchUserData = async () => {
//     try {
//       const storedUserData = await AsyncStorage.getItem("user");
//       if (storedUserData) {
//         setUserData(JSON.parse(storedUserData));
//       }
//     } catch (error) {
//       console.error("Failed to fetch user data", error);
//     }
//   };

//   const handleLogout = () => {
//     Alert.alert("Logout", "Are you sure you want to logout?", [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "OK",
//         onPress: () => {
//           navigation.navigate("Login");
//         },
//       },
//     ]);
//   };

//   const handleSave = async () => {
//     try {
//       await AsyncStorage.setItem("user", JSON.stringify(userData));
//       setIsEditing(false);
//       Alert.alert("Success", "Profile updated and saved successfully!");
//     } catch (error) {
//       console.error("Failed to save user data", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <View style={Mystyle.containerProfile}>
//       <View style={Mystyle.headerProfile}>
//         <TouchableOpacity onPress={goBack} style={{ position: "absolute", padding: 60, paddingRight: 400 }}>
//           <ArrowLeft color="white" size={24} />
//         </TouchableOpacity>
//         <Text style={Mystyle.headerText}>Profile</Text>
//         <TouchableOpacity onPress={() => setIsEditing(!isEditing)} style={{ position: "absolute", right: 20, top: 60 }}>
//           {isEditing ? <Save color="white" size={24} /> : <Edit3 color="white" size={24} />}
//         </TouchableOpacity>
//       </View>

//       <View style={Mystyle.profilePictureContainer}>
//         <Icon name="user-circle" size={120} color="white" style={Mystyle.profileIcon} />
//       </View>

//       <View style={Mystyle.form}>
//         <Text style={Mystyle.label}>Username</Text>
//         <TextInput style={Mystyle.input} value={userData.name} placeholder="Username" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, name: text })} />

//         <Text style={Mystyle.label}>Email</Text>
//         <TextInput style={Mystyle.input} value={userData.email} placeholder="Email" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, email: text })} />

//         <Text style={Mystyle.label}>Phone</Text>
//         <TextInput style={Mystyle.input} value={userData.mobile} placeholder="Phone" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, mobile: text })} />

//         <Text style={Mystyle.label}>Address</Text>
//         <TextInput style={Mystyle.input} value={userData.address} placeholder="Address" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, address: text })} />

//         <Text style={Mystyle.label}>Birthday</Text>
//         <TextInput style={Mystyle.input} value={userData.age} placeholder="Birthday" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, age: text })} />
//       </View>

//       {isEditing && (
//         <TouchableOpacity style={Mystyle.logoutButton} onPress={handleSave}>
//           <Text style={Mystyle.logoutText}>SAVE</Text>
//         </TouchableOpacity>
//       )}

//       {!isEditing && (
//         <TouchableOpacity style={Mystyle.logoutButton} onPress={handleLogout}>
//           <Text style={Mystyle.logoutText}>LOGOUT</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default Profile;

















import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Mystyle } from "./Mystyle";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Edit3, Save } from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const fetchUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("user");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "OK",
        onPress: () => {
          navigation.navigate("Login");
        },
      },
    ]);
  };

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      setIsEditing(false);
      Alert.alert("Success", "Profile updated and saved successfully!");
    } catch (error) {
      console.error("Failed to save user data", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View style={Mystyle.containerProfile}>
      <View style={Mystyle.headerProfile}>
        <TouchableOpacity onPress={goBack} style={{ position: "absolute", padding: 60, paddingRight: 400 }}>
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={Mystyle.headerText}>Profile</Text>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)} style={{ position: "absolute", right: 20, top: 60 }}>
          {isEditing ? <Save color="white" size={24} /> : <Edit3 color="white" size={24} />}
        </TouchableOpacity>
      </View>

      <View style={Mystyle.profilePictureContainer}>
      <Text style={{color:'white', fontWeight:'bold',  bottom:30, fontSize:18 }}>Hi, {userData.name || "User"}</Text>
        <Icon name="user-circle" size={120} color="white" style={Mystyle.profileIcon} />
      
      </View>

      <View style={Mystyle.form}>
        <Text style={Mystyle.label}>Username</Text>
        <TextInput style={Mystyle.input} value={userData.name} placeholder="Username" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, name: text })} />

        <Text style={Mystyle.label}>Email</Text>
        <TextInput style={Mystyle.input} value={userData.email} placeholder="Email" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, email: text })} />

        <Text style={Mystyle.label}>Phone</Text>
        <TextInput style={Mystyle.input} value={userData.mobile} placeholder="Phone" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, mobile: text })} />

        <Text style={Mystyle.label}>Address</Text>
        <TextInput style={Mystyle.input} value={userData.address} placeholder="Address" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, address: text })} />

        <Text style={Mystyle.label}>Birthday</Text>
        <TextInput style={Mystyle.input} value={userData.age} placeholder="Birthday" placeholderTextColor="#666" editable={isEditing} onChangeText={(text) => setUserData({ ...userData, age: text })} />
      </View>

      {isEditing && (
        <TouchableOpacity style={Mystyle.logoutButton} onPress={handleSave}>
          <Text style={Mystyle.logoutText}>SAVE</Text>
        </TouchableOpacity>
      )}

      {!isEditing && (
        <TouchableOpacity style={Mystyle.logoutButton} onPress={handleLogout}>
          <Text style={Mystyle.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Profile;
